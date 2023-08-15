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
    margin-bottom: 4%;
    display: flex;
    flex-direction: column;
    @media all and (min-width: 768px) {
        flex-direction: row;
        margin-bottom: 2%;
        padding: 0 20px;
    }
`;
const MainGreeting = styled.div`
    margin-bottom: 6%;
    h2 {
        font-size: 1.3rem;
        margin-bottom: 4%;
        font-weight: 500;
        line-height: 1.8rem;
    }
    p {
        display: none;
    }
    @media all and (min-width: 768px) {
        flex: 1 auto;
        h2 {
            font-size: 1.5rem;
            font-weight: bold;
            line-height: 2rem;
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
        font-size: 1.3rem;
        font-weight: 600;
        margin-bottom: 3%;
    }
    p {
        position: absolute;
        font-size: 0.7rem;
    }
    @media all and (min-width: 768px) {
        h2 {
            font-size: 1.5rem;
            font-weight: bold;
            margin-bottom: 1%;
        }
        p {
            font-size: 0.9rem;
        }
    }
`;
const CategoryContainer = styled.div`
    width: 100%;

    scroll-snap-type: x mandatory;
    overflow: auto;
    @media all and (min-width: 768px) {
        scroll-snap-type: none;
    }
`;

const CategoryWrapper = styled.div`
    display: flex;
    width: 200vw;
    padding: 8% 0 12%;
    margin-left: 20px;
    div {
        scroll-snap-align: center;
        scroll-snap-stop: normal;
    }
    @media all and (min-width: 768px) {
        width: 100%;
        box-sizing: border-box;
        margin-left: 0;
        padding: 4% 0 12% 3%;
    }
`;
export { Home, CategoryContainer, CategoryWrapper, RecordCollection, UserInfo, Record, MainGreeting };
