import styled, { css } from 'styled-components';

const ToggleButton = styled.div`
    padding: 10px;
    cursor: pointer;
`;
const ButtonBar = styled.span`
    display: block;
    background-color: black;
    width: 30px;
    height: 2px;
    border-radius: 3px;
    &:nth-child(1) {
        margin-bottom: 6px;
    }
    &:nth-child(3) {
        margin-top: 6px;
    }
    ${({ $active }) =>
        $active &&
        css`
            &:nth-child(1) {
                margin-bottom: -2px;
                margin-top: 8px;
                transform: rotate(45deg);
            }
            &:nth-child(2) {
                transform: rotate(45deg);
            }
            &:nth-child(3) {
                margin-top: -2px;
                transform: rotate(135deg);
            }
            ${({ theme }) => theme.media.labtop} {
                width: 36px;
            }
        `}
`;

export { ToggleButton, ButtonBar };
