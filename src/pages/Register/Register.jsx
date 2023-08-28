import * as R from './Register.styles';
import GlobalStyle from '@styles/GlobalStyles';
import { useState } from 'react';
import IntroBox from '@components/introBox/IntroBox';

import EmailForm from '@components/Register/EmailForm/EmailForm';
import RegisterForm from '@components/Register/RegisterForm/RegisterForm';
import useInput from '../../hooks/useInput';

const Register = () => {
    const {
        input: userInfo,
        onChange: handleChange,
        reset: initializeUserInfo,
    } = useInput({
        displayName: '',
        email: '',
        password: '',
    });

    const [isCheckEmail, setIsCheckEmail] = useState(false);

    return (
        <>
            <GlobalStyle />
            <R.RegisterContainer>
                <IntroBox />
                <R.RegisterContent>
                    <R.Title>회원가입</R.Title>
                    <R.FormsContainer>
                        {!isCheckEmail ? (
                            <EmailForm
                                userInfo={userInfo}
                                initializeUserInfo={initializeUserInfo}
                                handleChange={handleChange}
                                setIsCheckEmail={setIsCheckEmail}
                            />
                        ) : (
                            <RegisterForm
                                userInfo={userInfo}
                                initializeUserInfo={initializeUserInfo}
                                handleChange={handleChange}
                                setIsCheckEmail={setIsCheckEmail}
                            />
                        )}
                    </R.FormsContainer>
                </R.RegisterContent>
            </R.RegisterContainer>
        </>
    );
};
export default Register;
