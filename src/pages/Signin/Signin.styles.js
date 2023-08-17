import styled from 'styled-components';
import Button from '../../components/@common/Button/Button';
import { maxWidth } from '../../components/@common/Container/Container.styls';
const Background = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -2;
    display: grid;
    grid-template-columns: 1fr minmax(min-content, 1280px) 1fr;
`;
const Left = styled.div`
    width: 100%;
    background: linear-gradient(180deg, rgba(105, 96, 204, 0.8) 0%, #554dab 100%);
`;
const Right = styled.div`
    width: 100%;
`;
const SignInContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Introduction = styled.div`
    display: none;
    height: 100%;
    color: #fff;
    background: linear-gradient(180deg, rgba(105, 96, 204, 0.8) 0%, #554dab 100%);
    h2 {
        font-size: 3.6rem;
        margin-bottom: 0.8rem;
    }
    ${({ $theme }) => $theme.media.labtop} {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex-basis: 60%;
    }
`;
const SignInContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${({ $theme }) => $theme.media.labtop} {
        flex-basis: 40%;
    }
`;
const loginTitle = styled.h2`
    margin-bottom: 2.6rem;
`;
const loginForm = styled.form`
    max-width: 290px;
    width: 100%;
    display: grid;
    grid-template-rows: 57px 57px 53px;
    grid-gap: 12px;
    margin-bottom: 16px;
`;
const SignInButton = styled(Button)`
    border-radius: 100px;
    height: 53px;
`;
const RegisterButton = styled(Button)`
    border-radius: 100px;
    width: 100%;
    height: 53px;
    max-width: 290px;
    color: ${({ $theme }) => $theme.colors.point1};
    background: #fff;
    margin-bottom: 3.6rem;

    border: 2px solid ${({ $theme }) => $theme.colors.point1};
    ${({ $theme }) => $theme.media.labtop} {
    }
`;
export {
    Background,
    Left,
    Right,
    SignInContainer,
    Introduction,
    SignInContent,
    loginTitle,
    loginForm,
    SignInButton,
    RegisterButton,
};
