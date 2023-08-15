import styled, { useTheme } from 'styled-components';
const CategoryLink = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-sizing: border-box;
    width: 35vw;
    height: 35vw;
    padding: 5vw;
    border-radius: 10px;
    box-shadow: 0px 1px 20px 20px rgba(0, 0, 0, 0.02);
    & + div {
        margin-left: 5vw;
    }
    @media all and (min-width: 768px) {
        width: 18%;
        height: 18%;
        padding: 3%;
        border-radius: 20px;
        & + div {
            margin-left: 2%;
        }
    }
`;
const CategoryImage = styled.img`
    width: 25%;
    height: auto;
    margin-bottom: 8%;
`;
const CategoryTitle = styled.h3`
    font-size: 1rem;
    margin-bottom: 40%;
`;

const MakeTicketLink = styled.div`
    align-self: flex-end;
    font-size: 0.7rem;
`;
export { CategoryLink, CategoryImage, CategoryTitle, MakeTicketLink };
