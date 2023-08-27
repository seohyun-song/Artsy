import styled from 'styled-components';
import arrowUrl from '@assets/icons/icon-brightArrow.png';

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 240px;
    height: 240px;
    margin-bottom: 6rem;
    border-radius: 100%;
    box-shadow: 0px 1px 10px 10px rgba(0, 0, 0, 0.02);

    &::after {
        content: '';
        position: absolute;
        bottom: -17%;
        right: 50%;
        transform: translateX(50%);
        width: 36px;
        height: 18px;
        background: url(${arrowUrl}) no-repeat center/cover;
    }
    &:last-of-type::after {
        width: 0;
        height: 0;
    }

    ${({ theme }) => theme.media.tablet} {
        width: 180px;
        height: 180px;
        margin-bottom: 0;
        & + div {
            margin-left: 3rem;
        }
        &::after {
            width: 30px;
            height: 15px;
            top: 50%;
            right: -22%;
            transform: rotate(-90deg) translateY(-50%);
        }
    }
    ${({ theme }) => theme.media.labtop} {
        max-width: 260px;
        max-height: 260px;
        & + div {
            margin-left: 6rem;
        }
    }
`;
const ImageWrap = styled.span`
    width: 40%;
    margin-bottom: 0.8rem;
    > img {
        width: 100%;
    }
`;
const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({ $color }) => $color};
    font-size: 1.4rem;
    > p:first-of-type {
        font-size: 2rem;
        font-weight: bold;
    }
    ${({ theme }) => theme.media.tablet} {
        > p:first-of-type {
        }
    }
    ${({ theme }) => theme.media.labtop} {
        margin-bottom: 0.4rem;
        font-size: 1.6rem;
    }
`;
export { Container, ImageWrap, Content };
