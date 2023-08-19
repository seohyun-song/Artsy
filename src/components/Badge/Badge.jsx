import React from 'react';
import * as B from './Badge.styles';
import { useTheme } from 'styled-components';
import calculateGrade from '@utils/calculateGrade';

const data = {
    total: 10,
};

const Badge = () => {
    const theme = useTheme();
    const { name: userGrade, targetValue, imageName } = calculateGrade(data.total);
    const isMasterGrade = (grade) => {
        if (grade === '아티 마스터') return true;
        return false;
    };
    return (
        <B.Badge $theme={theme}>
            <B.ImageWrapper>
                <img src={`/src/assets/icons/badge_${imageName}.png`} alt={userGrade} />
            </B.ImageWrapper>
            {/* <B.Comment>{selectComment(userGrade)}</B.Comment> */}
            {isMasterGrade(userGrade) ? (
                <B.Comment>
                    당신은 아티 마스터!
                    <br />
                    최고 기록에 도전하세요!
                </B.Comment>
            ) : (
                <B.Comment>
                    다음 뱃지까지 <br /> {targetValue - data.total}개의 기록이 남았습니다!
                </B.Comment>
            )}
            <B.BadgeValue theme={theme}>
                {data.total} <span>/ {isMasterGrade(userGrade) ? 'Full' : targetValue}</span>
            </B.BadgeValue>
            <B.Bar>
                <B.Value
                    $all={isMasterGrade(userGrade) ? data.total : targetValue}
                    $value={data.total}
                    theme={theme}
                ></B.Value>
            </B.Bar>
        </B.Badge>
    );
};

export default Badge;
