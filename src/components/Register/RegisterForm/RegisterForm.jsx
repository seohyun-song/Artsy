import React, { useEffect, useRef } from 'react';
import * as R from './RegisterForm.styles';
import Input from '@components/@common/Input/Input';
import { useTheme } from 'styled-components';
import { useNavigate } from 'react-router';
import useToastContext from '@hooks/useToastContext';
import useRegisterQuery from '@hooks/@queries/useRegisterQuery';
import { ERROR_TYPE } from '@constants/serverErrorType';
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from '@constants/message';

const RegisterForm = ({ userInfo, initializeUserInfo, handleChange, setIsCheckEmail }) => {
    const nameInputRef = useRef(null);
    const passwordInputRef = useRef(null);
    const theme = useTheme();
    const navigate = useNavigate();
    const toast = useToastContext();

    const {
        mutate: signUp,
        isSuccess: isSuccessRegister,
        isError: isErrorRegister,
        error: registerError,
    } = useRegisterQuery();

    useEffect(() => {
        if (isErrorRegister) {
            const errorType = registerError.response.data?.error.type;
            switch (errorType) {
                case ERROR_TYPE.INVALID_PARAM: {
                    toast.show(ERROR_MESSAGE.incorrectRegister);
                    break;
                }
                default: {
                    toast.show('관리자에게 문의하세요');
                }
            }
        }
        if (isSuccessRegister) {
            toast.show(SUCCESS_MESSAGE.successRegister);
            navigate('/signin');
        }
    }, [isSuccessRegister, isErrorRegister]);

    const handleRegister = async (e) => {
        e.preventDefault();
        const { displayName, password } = userInfo;

        const isCorrectFormat = checkValidation({ displayName }) && checkValidation({ password });
        if (!isCorrectFormat) {
            toast.show(ERROR_MESSAGE.incorrectRegister);
            return;
        }
        signUp(userInfo);
        initializeUserInfo();
    };

    const handlebackToEmail = () => {
        setIsCheckEmail(false);
    };
    return (
        <R.RegisterForm onSubmit={handleRegister}>
            <Input
                placeholder="이름(닉네임)을 입력하세요."
                id="displayName"
                name="displayName"
                inputRef={nameInputRef}
                onChange={handleChange}
                value={userInfo.displayName}
                rounded
                isRequired
                isValid={true}
                inputWidth="100%"
                errorMessage={'최소 3자에서 최대15자를 입력해주세요'}
            />
            <Input
                inputType="password"
                placeholder="비밀번호를 입력하세요."
                id="password"
                name="password"
                inputRef={passwordInputRef}
                onChange={handleChange}
                value={userInfo.password}
                rounded
                isRequired
                isValid={true}
                inputWidth="100%"
            />

            <R.RegisterButton color={theme.colors.point1} size={'large'}>
                가입하기
            </R.RegisterButton>
            <R.BackButton onClick={handlebackToEmail}>&lt; 뒤로가기</R.BackButton>
        </R.RegisterForm>
    );
};

export default RegisterForm;
