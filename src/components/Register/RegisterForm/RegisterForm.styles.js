import styled from 'styled-components';
import Button from '@components/@common/Button/Button';

const RegisterForm = styled.form`
    display: grid;
    grid-gap: 12px;
    margin-bottom: 16px;
`;
const RegisterButton = styled(Button)`
    font-size: 1.4rem;
    &:disabled {
        background-color: #909090;
    }
`;
const BackButton = styled.span`
    margin-left: 0.8rem;
    font-size: 1.4rem;
    cursor: pointer;
    color: #909090;
`;
export { RegisterForm, RegisterButton, BackButton };
