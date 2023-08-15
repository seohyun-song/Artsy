import styled from 'styled-components';

const TitleWrap = styled.div`
    display: flex;

    h4 {
        font-size: 1.5rem;
    }
`;

const FilterWrap = styled.div`
    z-index: 1000;
    position: sticky;
    top: 50px;

    padding: 1rem 0;
    background-color: #fff;
`;

const FilterInner = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
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

const NoTicket = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
    border-radius: 8px;
    box-sizing: border-box;
    background-color: #eee;
    font-size: 0.875rem;

    @media all and (min-width: 768px) {
    }
    @media all and (min-width: 1280px) {
        max-width: 600px;
        margin: 80px auto 0;
        min-height: 200px;
    }
`;

export { TitleWrap, FilterWrap, TicketList, NoTicket, FilterInner };
