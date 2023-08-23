import styled from 'styled-components';

const StyledHeader = styled.header`
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    // 임시
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: #fff;
    box-shadow: 0px 1px 10px 3px rgba(0, 0, 0, 0.02);
    padding-top: 1rem;
`;

const StyledHeaderInner = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 1rem;
    box-sizing: border-box;

    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
        font-size: 3rem;
    }

    img {
        width: 3rem;
        height: 3rem;
        cursor: pointer;
    }
`;

export { StyledHeader, StyledHeaderInner };
