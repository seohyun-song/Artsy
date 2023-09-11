import React, { useState, useEffect } from 'react';
import * as U from './UserStats.styles';
import Wrap from '@components/@common/Wrap/Wrap';
import ContentsLoading from '@components/@common/ContentsLoading/ContentsLoading';
import StatsBox from '@components/UserStats/StatsBox/StatsBox';
import CoinIconUrl from '@assets/icons/icon-coin.png';
import CalendarIconUrl from '@assets/icons/icon-calendar.png';
import useToastContext from '@hooks/useToastContext';
import { ERROR_TYPE } from '@constants/serverErrorType';
import { ERROR_MESSAGE } from '@constants/message';
import StatsChart from '@components/UserStats/StatsChart/StatsChart';
import useTicketStatsQuery from '@hooks/@queries/useTicketStatsQuery';

const UserStats = () => {
    const toast = useToastContext();
    const [year, setYear] = useState(new Date().getFullYear());
    const [month, setMonth] = useState(new Date().getMonth() + 1);

    const {
        data: chartData,
        isLoading: isChartLoading,
        isError: isChartError,
        error: chartError,
    } = useTicketStatsQuery(year, month);

    useEffect(() => {
        if (!isChartError) return;
        if (isChartError) {
            const errorType = chartError?.response?.data?.error?.type;

            switch (errorType) {
                default:
                    toast.show(ERROR_MESSAGE.defaultError);
            }
        }
    }, [isChartError]);

    const onLeft = () => {
        if (month === 1) {
            setYear((prev) => prev - 1);
            setMonth(12);
        } else setMonth((prev) => prev - 1);
    };

    const onRight = () => {
        if (year === new Date().getFullYear() && month === new Date().getMonth() + 1) {
            toast.show('해당 월까지만 선택 가능합니다.');
            return;
        } else if (month === 12) {
            setYear((prev) => prev + 1);
            setMonth(1);
        } else setMonth((prev) => prev + 1);
    };

    return (
        <>
            {isChartLoading ? (
                <U.StatsContainer>
                    <ContentsLoading />
                </U.StatsContainer>
            ) : (
                <Wrap>
                    <U.StatsContainer>
                        <U.StatsWrap>
                            <U.StatsChartWrap>
                                <StatsChart
                                    chartdata={chartData?.chart}
                                    year={year}
                                    month={month}
                                    onLeft={onLeft}
                                    onRight={onRight}
                                    cntSum={chartData?.cntPerMonth}
                                />
                            </U.StatsChartWrap>
                            <U.StatsBoxWrap>
                                <StatsBox
                                    title={`${month}월 관람 횟수`}
                                    content={`${chartData?.cntPerMonth ?? 0}회`}
                                    imgSrc={CalendarIconUrl}
                                />
                                <StatsBox
                                    title={`${month}월 지출`}
                                    content={`${chartData?.pricePerMonth.toLocaleString() ?? 0}원`}
                                    imgSrc={CoinIconUrl}
                                />
                            </U.StatsBoxWrap>
                        </U.StatsWrap>
                    </U.StatsContainer>
                </Wrap>
            )}
        </>
    );
};

export default UserStats;
