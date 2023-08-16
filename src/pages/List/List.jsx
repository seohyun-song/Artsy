import { useState, useCallback } from 'react';
import { useTheme } from 'styled-components';
import { Link } from 'react-router-dom';
import { useQuery, useQueryClient } from 'react-query';
import ticketApi from '@api/ticket';
import categoryApi from '@api/category';
import Ticket from '@components/Ticket/Ticket';
import Container from '@components/@common/Container/Container.jsx';
import Button from '@components/@common/Button/Button.jsx';
import * as L from './List.styles';

//test
import { useSearchParams } from 'react-router-dom';

const List = () => {
    const theme = useTheme();
    const queryClient = useQueryClient();
    const [searchParams, setSearchParams] = useSearchParams();
    const sortKey = searchParams.get('category');
    const [category, setCategory] = useState(sortKey);

    const setSortParams = useCallback((category) => {
        category === '전체' ? searchParams.delete('category') : searchParams.set('category', category);
        setSearchParams(searchParams);
    }, []);

    const ticketQuery = useQuery(['ticket', sortKey], ticketApi.getTickets);
    const categoryQuery = useQuery(['category'], categoryApi.getCategories);
    const handleFilter = (e) => {
        setSortParams(e.target.value);
        setCategory(e.target.value);
    };

    return (
        <>
            <Container>
                <L.TitleWrap>
                    <h4>총 {ticketQuery.data?.length} 개</h4>
                </L.TitleWrap>
            </Container>
            <L.FilterWrap>
                <L.FilterInner>
                    <L.Filter onChange={handleFilter} value={category || ''}>
                        <option>전체</option>
                        {categoryQuery?.data?.map((category, idx) => (
                            <option key={`${category.name}-${idx}`}>{category.name}</option>
                        ))}
                    </L.Filter>
                    <Button size="small" color={theme.colors.point1}>
                        티켓추가
                    </Button>
                </L.FilterInner>
            </L.FilterWrap>
            <Container>
                {ticketQuery.data?.length === 0 && <L.NoTicket>아직 추가하신 기록이 없습니다</L.NoTicket>}
                <L.TicketList>
                    {ticketQuery.data?.map((ticket, idx) => (
                        <Link to="/detail" key={idx}>
                            <Ticket
                                category={ticket.category}
                                title={ticket.title}
                                showDate={ticket.showDate}
                                rating={ticket.rating}
                                image={ticket.image}
                            />
                        </Link>
                    ))}
                </L.TicketList>
            </Container>
        </>
    );
};
export default List;
