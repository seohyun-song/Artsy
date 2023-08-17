import styled from 'styled-components';
const Home = styled.div`
    width: 100%;
    @media all and (min-width: 768px) {
        max-width: 1280px;
        margin: 0 auto;
    }
`;

const UserInfo = styled.div`
    padding: 20px;
    margin-bottom: 16px;
    display: flex;
    flex-direction: column;
    @media all and (min-width: 768px) {
        flex-direction: row;
        padding: 0 20px;
    }
`;
const MainGreeting = styled.div`
    margin-bottom: 16px;
    h2 {
        font-size: 2.4rem;
        font-weight: 500;
        line-height: 3rem;
        margin-bottom: 8px;
    }
    p {
        display: none;
        font-size: 1.4rem;
    }
    @media all and (min-width: 768px) {
        flex: 1 auto;
        h2 {
            font-size: 2.8rem;
            font-weight: bold;
            line-height: 3rem;
        }
        p {
            display: block;
        }
    }
`;
const RecordCollection = styled.div`
    position: relative;
`;
const Record = styled.div`
    padding: 0 20px;

    h2 {
        font-size: 2rem;
        font-weight: 600;
        margin-bottom: 8px;
    }
    p {
        position: absolute;
        font-size: 1rem;
    }
    @media all and (min-width: 768px) {
        h2 {
            font-size: 2.4rem;
            font-weight: bold;
            margin-bottom: 8px;
        }
        p {
            font-size: 1.2rem;
        }
    }
`;
const CategoryContainer = styled.div`
    width: 100%;

    scroll-snap-type: x mandatory;

    /* hide scrollbar but allow scrolling */

    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    overflow-x: scroll;

    &::-webkit-scrollbar {
        display: none; /* for Chrome, Safari, and Opera */
    }
    @media all and (min-width: 768px) {
        scroll-snap-type: none;
    }
`;

const CategoryWrapper = styled.div`
    box-sizing: border-box;

    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 5vw;
    width: 200vw;
    padding: 3.5rem 25px 7rem;
    div {
        scroll-snap-align: center;
        scroll-snap-stop: normal;
    }
    @media all and (min-width: 768px) {
        grid-gap: 20px;
        width: 100%;
    }
`;
export { Home, CategoryContainer, CategoryWrapper, RecordCollection, UserInfo, Record, MainGreeting };
