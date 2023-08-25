import styled from 'styled-components';
import Button from '@components/@common/Button/Button';

const EmailForm = styled.form`
    display: grid;
    grid-gap: 12px;
    margin-bottom: 16px;
`;
const CheckButton = styled(Button)`
    font-size: 1.4rem;
`;
export { EmailForm, CheckButton };
