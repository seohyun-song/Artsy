import { useEffect } from 'react';

import {
    StyledOverlay,
    StyledContentBox,
    StyledTitle,
    StyledDescription,
    StyledButtonContainer,
    StyledButton
} from './Confirm.styles';

const Confirm = ({
    isOpen,
    onClose,
    title,
    description,
    cancelButtonText = '취소',
    submitButtonText = '확인',
    onSubmit,
}) => {
  return (
    <>
        { isOpen === true &&
            <ConfirmContent
                onClose={onClose}
                title={title}
                description={description}
                cancelButtonText={cancelButtonText}
                submitButtonText={submitButtonText}
                onSubmit={onSubmit}
            />
        }
    </>
  );
}

const ConfirmContent = ({
    onClose,
    title,
    description,
    cancelButtonText,
    submitButtonText,
    onSubmit,
}) => {
    const preventScroll = () => {
        const currentScrollY = window.scrollY;
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
        document.body.style.top = `-${currentScrollY}px`;
        document.body.style.overflowY = 'scroll';
        return currentScrollY;
    };

    const allowScroll = (prevScrollY) => {
        document.body.style.position = 'unset';
        document.body.style.width = 'unset';
        document.body.style.top = 'unset';
        document.body.style.overflowY = 'unset';
        window.scrollTo(0, prevScrollY);
    };

    useEffect(() => {
        const prevScrollY = preventScroll();
        return () => {
            allowScroll(prevScrollY);
        };
    }, []);

    return (
        <StyledOverlay onClick={onClose}>
            <StyledContentBox onClick={(e) => { e.stopPropagation() }}>
                <StyledTitle>{ title }</StyledTitle>
                <StyledDescription>{ description }</StyledDescription>
                <StyledButtonContainer>
                    <StyledButton
                        onClick={onClose}
                        size={'medium'}
                        style={'line'}
                        color={'#999'}
                    >
                        { cancelButtonText }
                    </StyledButton>
                    <StyledButton
                        onClick={onSubmit}
                        size={'medium'}
                    >
                        { submitButtonText }
                    </StyledButton>
                </StyledButtonContainer>
            </StyledContentBox>
        </StyledOverlay>
    );
}

export default Confirm;