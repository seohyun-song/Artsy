import styled, { css } from 'styled-components';

const RowContainer = styled.div`
    width: 100%;
    padding: 1.8rem 0;
    display: flex;
    flex-direction: column;

    ${({ theme }) => theme.media.labtop} {
        flex-direction: row;
    }

    ${({ $review }) =>
        $review === 'medium' &&
        css`
            height: 4.6rem;
            padding: 0 1.6rem;
            font-size: ${({ theme }) => theme.fontSizes.text};
            border-radius: ${({ theme }) => theme.borderRadius.medium};
        `}
`;

const TitleText = styled.span`
    font-size: 1.6rem;
    font-weight: 600;

    ${({ theme }) => theme.media.labtop} {
        text-align: left;
        width: 10rem;
    }
`;

const DetailText = styled.span`
    font-size: 1.4rem;
    margin: 10px 0;
    word-wrap: break-word;

    ${({ theme }) => theme.media.labtop} {
        margin: 0;
        width: 20rem;
        text-align: left;
    }
`;

export { RowContainer, TitleText, DetailText };
