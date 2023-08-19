import Container from '@components/@common/Container/Container.jsx';
import GradeBar from '@components/@common/GradeBar/GradeBar.jsx';
import Loading from '@components/@common/Loading/Loading.jsx';

import MyGreeting from '@components/MyPage/MyGreeting/MyGreeting.jsx';
import MyIconButton from '@components/MyPage/MyIconButton/MyIconButton.jsx';
import MyExpense from '@components/MyPage/MyExpense/MyExpense.jsx';

import useUserInfoQuery from '@hooks/@queries/useUserInfoQuery';
import useTotalPriceQuery from '@hooks/@queries/useTotalPriceQuery';

import myIconUrl from '@assets/icons/icon-my.png';
import bookIconUrl from '@assets/icons/icon-book.png';
import chartIconUrl from '@assets/icons/icon-chart.png';

import * as M from './MyPage.styles';

/* 지영님 코드 병합시 impor 구문으로 변경 */
const BADGE_GRADE = [
    { name: '아티 비기너', targetValue: 10, imageName: 'darkSilver' },
    { name: '아티 프렌즈', targetValue: 30, imageName: 'bronze' },
    { name: '아티 패밀리', targetValue: 70, imageName: 'silver' },
    { name: '아티 마스터', targetValue: Number.POSITIVE_INFINITY, imageName: 'gold' },
];
const calculateGrade = (ticketCount) => {
    const selectedGrade = BADGE_GRADE.find(({ targetValue }) => ticketCount < targetValue);
    return selectedGrade;
};

/* // 지영님 코드 병합시 impor 구문으로 변경 */

const MyPage = () => {
    const userInfoQuery = useUserInfoQuery();
    const totalPriceQuery = useTotalPriceQuery();

    if (userInfoQuery.isLoading || totalPriceQuery.isLoading) return <Loading></Loading>;

    return (
        <>
            <Container>
                <M.MyPage>
                    <M.ViewWrap>
                        <MyGreeting username={userInfoQuery?.data?.displayName} />
                        <M.IconMenuList>
                            <MyIconButton to="" imgUrl={myIconUrl}>
                                계정정보
                            </MyIconButton>
                            <MyIconButton to="/ticket/list" imgUrl={bookIconUrl}>
                                기록함
                            </MyIconButton>
                            <MyIconButton to="" imgUrl={chartIconUrl}>
                                통계
                            </MyIconButton>
                        </M.IconMenuList>
                        <M.GradeBox>
                            <M.GradeBoxTop>
                                <h4>{calculateGrade(userInfoQuery?.data?.totalTicket).name}</h4>
                                <p>
                                    문화 마스터까지{' '}
                                    {calculateGrade(userInfoQuery?.data?.totalTicket).targetValue -
                                        userInfoQuery?.data?.totalTicket}
                                    개의 티켓이 필요해요!
                                </p>
                            </M.GradeBoxTop>
                            <GradeBar total={userInfoQuery?.data?.totalTicket} height={0.8} />
                        </M.GradeBox>
                    </M.ViewWrap>
                    <M.DataWrap>
                        {/* api 호출 정보 */}
                        <MyExpense totalPrice={totalPriceQuery?.data?.totalPrice.toLocaleString()} />
                    </M.DataWrap>
                </M.MyPage>
            </Container>
        </>
    );
};
export default MyPage;
