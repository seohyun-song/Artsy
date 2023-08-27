import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TopContent = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    h2 {
        margin-bottom: 1.8rem;
        font-size: 2rem;
    }
    p {
        margin-bottom: 2.4rem;
        font-size: 1.6rem;
        color: #909090;
    }
    ${({ theme }) => theme.media.labtop} {
        h2 {
            margin-bottom: 2.4rem;
            font-size: 3.4rem;
        }
        p {
            margin-bottom: 2.4rem;
            font-size: 2rem;
            color: #909090;
        }
    }
`;
const Background = styled.div`
    position: absolute;
    top: -100%;

    display: flex;
    justify-content: space-between;
`;
const ImageWrap = styled.span`
    display: flex;
    width: 15%;
    img {
        width: 100%;
        height: auto;
    }
    &:first-of-type {
        width: 20%;
    }

    ${({ theme }) => theme.media.tablet} {
        width: 12%;
    }
`;
const RoundBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 800px;
    padding: 1.2rem 1.8rem;
    border-radius: 2.4rem;
    margin-bottom: 8rem;
    background-color: ${({ theme }) => theme.colors.point1};
    font-size: 1.4rem;
    text-align: center;
    color: #fff;
    > p:first-of-type {
        margin-bottom: 0.8rem;
    }
    span {
        color: #e9be53;
    }
    ${({ theme }) => theme.media.labtop} {
        font-size: 2rem;
    }
`;
const BadgesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    ${({ theme }) => theme.media.tablet} {
        flex-direction: row;
    }
`;
export { Container, TopContent, RoundBox, BadgesContainer, Background, ImageWrap };
