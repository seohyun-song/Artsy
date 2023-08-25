import React, { useEffect } from 'react';
import * as E from './EmailForm.styles';
import Input from '@components/@common/Input/Input';
import { useTheme } from 'styled-components';
import useToastContext from '@hooks/useToastContext';
import checkValidation from '@utils/checkValidation';
import useCheckEmailQuery from '@hooks/@queries/useCheckEmailQuery';
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from '@constants/message';

const EmailForm = ({ userInfo, initializeUserInfo, handleChange, setIsCheckEmail }) => {
    const theme = useTheme();
    const toast = useToastContext();

    const { data, mutate: checkDuplicatedEmail, isSuccess: isSuccessEmailCheck } = useCheckEmailQuery();

    useEffect(() => {
        if (isSuccessEmailCheck) {
            if (data.isExists) {
                toast.show(ERROR_MESSAGE.duplicatedEmail);
            } else {
                toast.show(SUCCESS_MESSAGE.validEmail);
                setIsCheckEmail(true);
            }
        }
    }, [isSuccessEmailCheck]);

    const handleCheckEmail = (e) => {
        e.preventDefault();
        const email = userInfo.email;
        const isCorrectFormat = checkValidation({ email });
        if (!isCorrectFormat) {
            initializeUserInfo();
            return;
        }
        checkDuplicatedEmail({ email });
    };
    return (
        <E.EmailForm onSubmit={handleCheckEmail}>
            <Input
                placeholder="이메일 주소를 입력하세요."
                id="email"
                name="email"
                onChange={handleChange}
                value={userInfo.email}
                rounded
                isRequired
                isValid={true}
                inputWidth="100%"
            />
            <E.CheckButton color={theme.colors.point1} size={'large'}>
                이메일 중복 확인하기
            </E.CheckButton>
        </E.EmailForm>
    );
};

export default EmailForm;
