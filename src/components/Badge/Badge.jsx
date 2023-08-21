import React from 'react';
import * as B from './Badge.styles';
import { useTheme } from 'styled-components';
import calculateGrade from '../../utils/calculateGrade';

const Badge = ({ totalTicket }) => {
    const theme = useTheme();
    const { name: userGrade, targetValue } = calculateGrade(totalTicket);
    return (
        <B.Badge $theme={theme}>
            <B.ImageWrapper>
                <img src={`/src/assets/icons/badge_${userGrade}.png`} alt="badge image" />
            </B.ImageWrapper>
            <B.Description>
                다음 뱃지까지 <br />
                {targetValue - totalTicket}개의 기록이 남았습니다!
            </B.Description>
            <B.BadgeValue theme={theme}>
                {totalTicket} <span>/ {targetValue}</span>
            </B.BadgeValue>
            <B.Bar>
                <B.Value $all={targetValue} $value={totalTicket} theme={theme}></B.Value>
            </B.Bar>
        </B.Badge>
    );
};

export default Badge;
