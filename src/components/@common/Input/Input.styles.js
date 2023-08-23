import styled from 'styled-components';

const StyledForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    > input:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.point1};
        caret-color: ${({ theme }) => theme.colors.point1};
    }
`;
const StyledLabel = styled.label`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 16px;
`;
const StyledRequired = styled.span`
    color: #ff1f00;
`;
const StyledInput = styled.input`
    box-sizing: border-box;
    width: ${(props) => props.$inputWidth};
    height: 54px;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.black};
    padding: 8px 22px;
    margin-bottom: 4px;
    border-radius: ${({ theme, $rounded }) => ($rounded ? theme.borderRadius.large : '0')};
    border: ${({ $rounded }) => ($rounded ? '2px solid #c5c5c5' : 'none')};
    ${({ $rounded }) => !$rounded && 'border-bottom: 2px solid #c5c5c5'};

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;

const StyledErrorMessage = styled.span`
    color: #ff1f00;
`;

export { StyledForm, StyledInput, StyledLabel, StyledRequired, StyledErrorMessage };
