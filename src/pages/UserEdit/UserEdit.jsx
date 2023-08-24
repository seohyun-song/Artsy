import { useNavigate } from 'react-router-dom';

import Container from '@components/@common/Container/Container';
import Input from '@components/@common/Input/Input';
import Button from '@components/@common/Button/Button';
import ButtonWrap from '@components/@common/ButtonWrap/ButtonWrap';

import PageTitle from '@components/UserEdit/PageTitle/PageTitle';

import * as U from './UserEdit.styles';

const UserEdit = () => {
    return (
        <Container>
            <U.Wrap>
                <PageTitle>회원 정보 수정</PageTitle>
                <form>
                    <U.InputBox>
                        <Input
                            inputType="text"
                            labelText="이메일"
                            readOnly="readonly"
                            isValid={true}
                            inputWidth="100%"
                        />
                    </U.InputBox>
                    <U.InputBox>
                        <Input
                            inputType="text"
                            labelText="이름(닉네임)"
                            isValid={true}
                            isRequired
                            inputWidth="100%"
                            errorMessage={''}
                        />
                    </U.InputBox>
                    <U.InputBox>
                        <div>
                            <Input
                                inputType="password"
                                labelText="비밀번호"
                                placeholder="새 비밀번호"
                                isValid={true}
                                errorMessage={''}
                                inputWidth="100%"
                            />
                        </div>
                        <div>
                            <Input
                                inputType="password"
                                placeholder="새 비밀번호 확인"
                                isValid={true}
                                isRequired
                                errorMessage={''}
                                inputWidth="100%"
                            />
                        </div>
                    </U.InputBox>
                    <ButtonWrap>
                        <Button type="button" size="large" full="full" style="line">
                            취소
                        </Button>
                        <Button type="submit" size="large" full="full">
                            수정
                        </Button>
                    </ButtonWrap>
                </form>
            </U.Wrap>
        </Container>
    );
};
export default UserEdit;
