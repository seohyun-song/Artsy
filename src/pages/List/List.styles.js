import styled from 'styled-components';

const TitleWrap = styled.div`
    display: flex;
    margin-bottom: 20px;

    h4 {
        font-size: 1.5rem;
    }
`;

const FilterWrap = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
`;

const TicketList = styled.div`
    display: grid;
    grid-row-gap: 16px;

    @media all and (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 16px;
    }
    @media all and (min-width: 1280px) {
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 20px;
        grid-row-gap: 20px;
    }
`;

export { TitleWrap, FilterWrap, TicketList };
