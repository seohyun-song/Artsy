import styled from 'styled-components';
import Button from '@components/@common/Button/Button';
import { Link } from 'react-router-dom';

const SignInContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
`;

const SignInContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 2rem;
    box-sizing: border-box;

    input {
        font-size: 1.4rem;
    }
    ${({ theme }) => theme.media.labtop} {
        flex-basis: 40%;
    }
`;

const LoginTitle = styled.h2`
    flex-basis: 30%;
    display: flex;
    align-items: flex-end;
    padding-bottom: 2.8rem;

    font-size: 4.6rem;
    cursor: pointer;
    ${({ theme }) => theme.media.labtop} {
        font-size: 3.4rem;
    }
`;
const FormContainer = styled.div`
    flex-basis: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;
const LoginForm = styled.form`
    display: grid;
    grid-template-rows: 57px 57px 53px;
    grid-gap: 12px;
    width: 100%;
    max-width: 29rem;
    margin-bottom: 16px;
`;

const SignInButton = styled(Button)`
    font-size: 1.4rem;
`;

const RegisterButton = styled(Button)`
    width: 100%;
    max-width: 29rem;
    border: 2px solid ${({ theme }) => theme.colors.point1};
    font-size: 1.4rem;
`;

const SearchPasswordButton = styled(Link)`
    margin-top: 2rem;
    font-size: ${({ theme }) => theme.fontSizes.text};
    color: ${({ theme }) => theme.colors.font5};
`;
export {
    SignInContainer,
    SignInContent,
    LoginTitle,
    FormContainer,
    LoginForm,
    SignInButton,
    RegisterButton,
    SearchPasswordButton,
};
