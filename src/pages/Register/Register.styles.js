import styled from 'styled-components';
import Button from '@components/@common/Button/Button';
const RegisterContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input {
        font-size: 1.4rem;
    }
    ${({ $theme }) => $theme.media.labtop} {
        flex-basis: 40%;
    }
`;
const Title = styled.h2`
    font-size: 3.4rem;
    margin-bottom: 2.6rem;
`;
const RegisterForm = styled.form`
    width: 100%;
    max-width: 290px;
    display: grid;
    /* grid-template-rows: 57px 57px 53px; */
    grid-gap: 12px;
    margin-bottom: 16px;
`;
const RegisterButton = styled(Button)`
    border-radius: 100px;
    height: 53px;
    font-size: 1.4rem;
`;
export { RegisterContainer, Title, RegisterForm, RegisterButton };
