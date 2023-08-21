import { useState, useCallback, useRef, useEffect } from 'react';
import { useTheme } from 'styled-components';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';

import useCategoryQuery from '@hooks/@queries/useCategoryQuery';
import useTicketInfiniteQuery from '@hooks/@queries/useTicketInfiniteQuery';
import Ticket from '@components/Ticket/Ticket';
import Container from '@components/@common/Container/Container.jsx';
import Button from '@components/@common/Button/Button.jsx';
import Loading from '@components/@common/Loading/Loading.jsx';
import formatDate from '@utils/formatDate';
import * as L from './InfinityTest.styles';

const List = () => {
    //test
    const observerEl = useRef(null);

    const theme = useTheme();
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const [categoryId, setCategoryId] = useState(searchParams.get('categoryId'));

    const setSortParams = useCallback((categoryId) => {
        categoryId === 0 ? searchParams.delete('categoryId') : searchParams.set('categoryId', categoryId);
        setSearchParams(searchParams);
    }, []);

    const categoryQuery = useCategoryQuery();
    const ticketQuery = useTicketInfiniteQuery(categoryId);

    const handleFilter = (e) => {
        const selectedIdx = e.target.selectedIndex;
        setSortParams(selectedIdx);
        setCategoryId(selectedIdx);
    };

    const handleObserver = useCallback(
        (entries) => {
            const [target] = entries;
            // 관찰대상이 교차되고 다음 페이지가 있는 경우
            if (target.isIntersecting && ticketQuery.hasNextPage) {
                // 다음 페이지의 데이터 요청
                ticketQuery.fetchNextPage();
            }
        },
        [ticketQuery.fetchNextPage, ticketQuery.hasNextPage]
    );

    useEffect(() => {
        if (!observerEl.current) return;
        const element = observerEl.current;
        const options = {
            threshold: 0,
        };
        // new IntersectionObserver(callback, oprions): 관찰자 인스턴스 생성
        const observer = new IntersectionObserver(handleObserver, options);
        // 관찰시작
        observer.observe(element);

        // unmount시 클린업
        return () => observer.unobserve(element);
    }, [ticketQuery.fetchNextPage, ticketQuery.hasNextPage, handleObserver]);

    if (ticketQuery.isLoading) return <Loading></Loading>;

    if (ticketQuery.isSuccess) {
        console.log(ticketQuery.isFetchingNextPage, ticketQuery.hasNextPage);
    }

    return (
        <>
            <button
                onClick={() => {
                    ticketQuery.fetchNextPage();
                }}
            >
                다음
            </button>
            <Container>
                <L.TitleWrap>
                    <h4>총 {ticketQuery?.data?.length} 개</h4>
                </L.TitleWrap>
            </Container>
            <L.FilterWrap>
                <L.FilterInner>
                    <L.Filter onChange={handleFilter} value={categoryId ?? '전체'}>
                        <option value="0">전체</option>
                        {categoryQuery?.data?.map(({ id, name }) => (
                            <option key={id} value={id}>
                                {name}
                            </option>
                        ))}
                    </L.Filter>
                    <Button size="small" color={theme.colors.point1} onClick={() => navigate('/ticket/create')}>
                        티켓추가
                    </Button>
                </L.FilterInner>
            </L.FilterWrap>
            <Container>
                {ticketQuery?.data?.pages[0].ticketList.length === 0 && (
                    <L.NoTicket>아직 추가하신 기록이 없습니다</L.NoTicket>
                )}
                <L.TicketList>
                    {ticketQuery?.data?.pages.map((page) =>
                        page?.ticketList.map(({ id, categoryColor, title, showDate, rating, fileImageUrl }) => {
                            return (
                                <Link to={`/ticket/detail/${id}`} key={id}>
                                    <Ticket
                                        categoryColor={categoryColor}
                                        title={title}
                                        showDate={formatDate(showDate)}
                                        rating={rating}
                                        imUrl={fileImageUrl}
                                    />
                                </Link>
                            );
                        })
                    )}
                </L.TicketList>

                <div ref={observerEl}>
                    {ticketQuery.isFetchingNextPage && ticketQuery.hasNextPage ? 'Loading...' : ''}
                </div>
            </Container>
        </>
    );
};
export default List;
