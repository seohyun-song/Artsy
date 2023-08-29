import styled from 'styled-components';

const Wrap = styled.div`
    /* media */
    ${({ theme }) => theme.media.tablet} {
        width: 50rem;
        margin: 0 auto;
    }
`;

const SubTitleWrap = styled.div`
    margin-bottom: 4rem;
`;

const Form = styled.div``;

const InputBox = styled.div`
    position: relative;
    margin-bottom: 3.5rem;

    > button {
        margin-top: 1rem;
    }

    > span {
    }
`;

const Timer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    font-size: ${({ theme }) => theme.fontSizes.text};
    color: #909090;
`;

export { Wrap, SubTitleWrap, Form, InputBox, Timer };
