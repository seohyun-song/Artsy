import Container from '@components/@common/Container/Container.jsx';
import Button from '@components/@common/Button/Button.jsx';

import * as I from './Intro.styles';

const Intro = () => {
    return (
        <>
            <Container>
                <I.MainVisual>
                    <I.MainText>
                        <h2>
                            보기만 해도 뿌듯한!
                            <br /> 나만의 티켓북
                        </h2>
                        <p>이제 온라인으로 나만의 문화 티켓을 기록하세요.</p>

                        <Button size="large">바로 시작하기</Button>
                    </I.MainText>
                </I.MainVisual>
            </Container>
        </>
    );
};
export default Intro;
