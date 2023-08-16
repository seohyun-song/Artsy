import React from 'react';
import * as B from './Badge.styles';
import { useTheme } from 'styled-components';

const data = {
    ticketCount: 4,
    currentBadge: { name: 'silver', standard: 10 },
    nextBadge: { name: 'bronze', standard: 30 },
};
const Badge = () => {
    const theme = useTheme();
    return (
        <B.Badge theme={theme}>
            <B.ImageWrapper>
                <img src={`/src/assets/icons/badge_${data.currentBadge.name}.png`} alt="badge image" />
            </B.ImageWrapper>
            <B.Description>
                다음 뱃지까지 <br />
                6개의 기록이 남았습니다!
            </B.Description>
            <B.BadgeValue theme={theme}>
                {data.ticketCount} <span>/ {data.currentBadge.standard}</span>
            </B.BadgeValue>
            <B.Bar>
                <B.Value $all={data.currentBadge.standard} $value={data.ticketCount} theme={theme}></B.Value>
            </B.Bar>
        </B.Badge>
    );
};

export default Badge;
