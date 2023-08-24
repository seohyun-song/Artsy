import styled from 'styled-components';

const StyledHeader = styled.header`
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 5.5rem;
    line-height: 50px;
    text-align: center;

    background-color: ${({ color }) => color};

    ${({ theme }) => theme.media.labtop} {
        background-color: #fff;
    }
`;

const StyledHeaderInner = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 1rem;
    box-sizing: border-box;

    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
        font-size: 3rem;
    }

    img {
        width: 3rem;
        height: 3rem;
        cursor: pointer;
    }
`;

export { StyledHeader, StyledHeaderInner };
