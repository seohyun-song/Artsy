import styled from 'styled-components';

const StyledToastContainer = styled.div`
    z-index: 9999;
    position: fixed;
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    row-gap: 12px;
    background-color: red;
`;

export default StyledToastContainer;
