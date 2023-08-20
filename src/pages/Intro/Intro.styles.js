import styled from 'styled-components';

import introUrl from '@assets/images/img-intro.png';

const MainVisual = styled.section`
    position: relative;
    height: 40vh;

    &:before {
        content: '';
        z-index: -1;
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        background: url(${introUrl}) no-repeat center / cover;
        filter: blur(8px);
        -webkit-filter: blur(0.8px);
    }
`;

const MainText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    padding: 2rem;
    box-sizing: border-box;

    h2 {
        font-size: ${({ theme }) => theme.fontSizes.h5};
    }
    p {
        color: #909090;
        font-size: ${({ theme }) => theme.fontSizes.text};
    }

    button {
        align-self: center;
        margin-top: auto;
    }
`;
export { MainVisual, MainText };
