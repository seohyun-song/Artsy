import styled from 'styled-components';

const Container = styled.div`
    min-height: 120vh;
`;

const TypeColorBox = styled.div`
    display: block;
    width: 100%;
    height: 45rem;
    position: absolute;
    z-index: -999;

    background-color: ${({ color }) => color};
`;

const MainText = styled.h2`
    font-weight: 700;
    font-size: 2.4rem;
    margin: 20px 0 40px 0;
    color: white;

    ${({ theme }) => theme.media.tablet} {
        color: white;
    }

    ${({ theme }) => theme.media.labtop} {
        color: ${({ theme }) => theme.colors.black};
    }
`;

const TicketDetailWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TicketImageWrap = styled.div`
    max-width: 100%;
    width: 200px;
    height: 290px;
    transition: all 0.2s;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: 12px;
    }

    ${({ theme }) => theme.media.labtop} {
        width: 290px;
        height: 400px;
        max-width: 100%;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            border-radius: 12px;
        }
    }
`;

const TicketDetailBox = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    text-align: center;
    overflow: auto;

    width: 90%;
    top: 38rem;

    border-radius: 12px;
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.25);

    background-color: white;
    z-index: -999;
`;

const DetailContainer = styled.div`
    width: 90%;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const UnderLine = styled.div`
    width: 70%;
    border-bottom: 0.5px solid #c4c4c4;
    margin: 30px 0 20px 0;
`;

const TitleText = styled.span`
    font-size: ${({ title }) => (title ? '2rem' : '1.5rem')};
    font-weight: 600;

    margin-top: ${({ title }) => (title ? '10rem' : '0')};
`;

const DetailText = styled.span`
    font-size: 1.25rem;
    margin: 10px 0 20px 0;

    max-width: 100%; /* 부모 요소의 최대 너비까지만 확장 */
    word-wrap: break-word; /* 긴 단어를 강제로 줄바꿈 */
`;

const EditWrap = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    width: 100%;
    margin: 1rem 0;
`;

const EditText = styled.span`
    font-size: 1.25rem;
    color: #777;
    cursur: pointer;

    &:not(:last-child) {
        margin-right: 4px;
    }
`;

export {
    Container,
    MainText,
    TicketImageWrap,
    TypeColorBox,
    TicketDetailWrap,
    TicketDetailBox,
    DetailContainer,
    TitleText,
    DetailText,
    UnderLine,
    EditText,
    EditWrap,
};
