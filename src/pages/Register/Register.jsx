import * as R from './Register.styles';
import Input from '@components/@common/Input/Input';
import GlobalStyle from '@styles/GlobalStyles';
import { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import useCheckEmailQuery from '../../hooks/@queries/useCheckEmailQuery';
import { ERROR_MESSAGE } from '@constants/message';

const Register = () => {
    const [loginInfo, setLoginInfo] = useState({
        displayName: '',
        email: '',
        password: '',
    });

    const { data, mutate: checkEmail, isSuccess } = useCheckEmailQuery();

    useEffect(() => {
        if (isSuccess) {
            data.isExists ? alert(ERROR_MESSAGE.duplicatedEmail) : alert('사용가능한 이메일 주소입니다.');
        }
    }, [isSuccess]);

    const theme = useTheme();

    const handleChange = (e) => {
        setLoginInfo((cur) => ({ ...cur, [e.target.name]: e.target.value }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoginInfo({ displayName: '', email: '', password: '' });
    };
    const handleCheckEmail = (e) => {
        e.preventDefault();
        const email = loginInfo.email;
        checkEmail({ email });
    };

    return (
        <>
            <GlobalStyle />
            <R.RegisterContainer>
                <R.Title>회원가입</R.Title>
                <R.RegisterForm onSubmit={handleSubmit}>
                    <Input
                        placeholder="이메일 주소를 입력하세요."
                        id="email"
                        name="email"
                        onChange={handleChange}
                        value={loginInfo.email}
                        rounded
                        isRequired
                        isValid={true}
                        inputWidth="100%"
                    />
                    <R.RegisterButton color={theme.colors.point1} size={'large'} onClick={handleCheckEmail}>
                        이메일 중복 확인하기
                    </R.RegisterButton>
                    <Input
                        placeholder="이름(닉네임)을 입력하세요."
                        id="displayName"
                        name="displayName"
                        onChange={handleChange}
                        value={loginInfo.displayName}
                        rounded
                        isRequired
                        isValid={true}
                        inputWidth="100%"
                    />
                    <Input
                        inputType="password"
                        placeholder="비밀번호를 입력하세요."
                        id="password"
                        name="password"
                        onChange={handleChange}
                        value={loginInfo.password}
                        rounded
                        isRequired
                        isValid={true}
                        inputWidth="100%"
                    />

                    <R.RegisterButton color={theme.colors.point1} size={'large'}>
                        가입하기
                    </R.RegisterButton>
                </R.RegisterForm>
            </R.RegisterContainer>
        </>
    );
};
export default Register;
