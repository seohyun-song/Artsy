import * as S from './SearchPwd.styles';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Container from '@components/@common/Container/Container';
import Input from '@components/@common/Input/Input';
import Button from '@components/@common/Button/Button';
import PageTitle from '@components/UserEdit/PageTitle/PageTitle';
import Timer from '@components/SearchPwd/Timer/Timer';

import useToastContext from '@hooks/useToastContext';
import formatTime from '@utils/formatTime';

import { ERROR_MESSAGE } from '@constants/message';

const SearchPwd = () => {
    const toast = useToastContext();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [isDisabled, setisDisabled] = useState(true);
    const [count, setCount] = useState(600);
    const [isRunning, setIsRunning] = useState(false);
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
    });

    useEffect(() => {
        let timerId;
        if (isRunning) {
            timerId = setInterval(() => {
                setCount((prev) => prev - 1);
            }, 1000);
        } else {
            clearInterval(timerId);
        }

        return () => clearInterval(timerId);
    }, [isRunning]);

    const handleChange = (e) => {
        const { value, name } = e.target;
        setUserInfo({ ...userInfo, [name]: value });
    };

    const handleClickSend = () => {
        setIsRunning(true);
    };

    return (
        <Container>
            <S.Wrap>
                <PageTitle>비밀번호 찾기</PageTitle>
                <S.SubTitleWrap>가입하신 이메일을 입력하시면 해당 이메일로 임시비밀번호가 발송됩니다.</S.SubTitleWrap>
                <S.Form>
                    <S.InputBox>
                        <Input
                            id="email"
                            labelText="이메일"
                            inputType="email"
                            name="email"
                            placeholder="이메일주소 입력"
                            isRequired
                            inputWidth="100%"
                            isValid={true}
                            value={userInfo.email}
                            onChange={handleChange}
                            inputRef={emailRef}
                        />
                        <Button type="button" size="small" full="full" style="line" onClick={handleClickSend}>
                            임시 비밀번호 발송
                        </Button>
                    </S.InputBox>
                    <S.InputBox>
                        <S.Timer>{formatTime(count)}</S.Timer>
                        <Input
                            id="password"
                            name="password"
                            inputType="password"
                            labelText="임시비밀번호"
                            placeholder="임시비밀번호 입력"
                            isRequired
                            inputWidth="100%"
                            isValid={true}
                            value={userInfo.password}
                            onChange={handleChange}
                            inputRef={passwordRef}
                        />
                    </S.InputBox>
                    <Button type="button" size="large" full="full" onClick={''} disabled={isDisabled}>
                        임시 비밀번호로 로그인
                    </Button>
                </S.Form>
            </S.Wrap>
        </Container>
    );
};
export default SearchPwd;
