import { useTheme } from 'styled-components';
import { Link } from 'react-router-dom';
import Ticket from '@components/Ticket/Ticket';
import Container from '@components/Container/Container.jsx';
import Button from '@components/@common/Button/Button.jsx';
import * as L from './List.styles';

// dummy data
const tickets = [
    {
        category: '영화',
        title: '영화제목입니다',
        showDate: '2023-08-14',
        rating: '5',
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

const List = () => {
    const theme = useTheme();

    return (
        <Container>
            <L.TitleWrap>
                <h4>총 {tickets.length} 개</h4>
            </L.TitleWrap>
            <L.FilterWrap>
                <Button size="small" color={theme.colors.point1}>
                    티켓추가
                </Button>
            </L.FilterWrap>
            <L.TicketList>
                {tickets.map((ticket, idx) => (
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
    );
};
export default List;
