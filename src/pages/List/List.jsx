import { useState, useRef, useEffect } from 'react';
import { useTheme } from 'styled-components';
import { Link } from 'react-router-dom';
import Ticket from '@components/Ticket/Ticket';
import Container from '@components/Container/Container.jsx';
import Button from '@components/@common/Button/Button.jsx';
import * as L from './List.styles';

// dummy data
const tickets = [
    // {
    //     category: '영화',
    //     title: '영화제목입니다',
    //     showDate: '2023-08-14',
    //     rating: '5',
    // },
    {
        category: '뮤지컬',
        title: '뮤지컬제목입니다',
        showDate: '2023-08-14',
        rating: '4',
    },
    {
        category: '뮤지컬',
        title: '뮤지컬제목입니다',
        showDate: '2023-08-14',
        rating: '4',
    },
    {
        category: '콘서트',
        title: '콘서트제목제목입니다',
        showDate: '2023-08-14',
        rating: '4',
    },
    {
        category: '연극',
        title: '연극제목',
        showDate: '2023-08-14',
        rating: '4',
    },
    {
        category: '전시',
        title: '전시제목',
        showDate: '2023-08-14',
        rating: '4',
    },
];

const categories = [
    {
        name: '영화',
    },
    {
        name: '뮤지컬',
    },
    {
        name: '연극',
    },
    {
        name: '전시',
    },
    {
        name: '콘서트',
    },
];

const List = () => {
    const theme = useTheme();
    // 카테고리 필터링 테스트.
    const [category, setCategory] = useState('전체');
    const [filteredTicketList, setFilteredTicketList] = useState([]);
    const handleFilter = (e) => {
        setCategory(e.target.value);
        setFilteredTicketList(() => {
            if (e.target.value === '전체') return setFilteredTicketList(tickets);
            return setFilteredTicketList(tickets.filter((item) => item.category === e.target.value));
        });
    };

    useEffect(() => {
        setCategory('전체');
        setFilteredTicketList(tickets);
    }, []);

    return (
        <>
            <Container>
                <L.TitleWrap>
                    <h4>총 {filteredTicketList?.length} 개</h4>
                </L.TitleWrap>
            </Container>
            <L.FilterWrap>
                <L.FilterInner>
                    {/* 필터 셀렉트 테스트 */}
                    <select onChange={handleFilter} value={category}>
                        <option>전체</option>
                        {categories.map((category, idx) => (
                            <option key={`${category.name}-${idx}`}>{category.name}</option>
                        ))}
                    </select>
                    <Button size="small" color={theme.colors.point1}>
                        티켓추가
                    </Button>
                </L.FilterInner>
            </L.FilterWrap>
            <Container>
                {filteredTicketList?.length === 0 && <L.NoTicket>아직 추가하신 기록이 없습니다</L.NoTicket>}
                <L.TicketList>
                    {filteredTicketList?.map((ticket, idx) => (
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
