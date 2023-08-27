import React from 'react';
import { getIconUrl } from '@utils/getImageUrl';
import * as B from './Badge.styles';
import { useTheme } from 'styled-components';

const Badge = ({ gradeInfo }) => {
    const { imageName, name, targetValue } = gradeInfo;
    const theme = useTheme();
    const badgeColor = theme.gradeColor[imageName];
    return (
        <B.Container>
            <B.ImageWrap>
                <img src={getIconUrl(`Badge_${imageName}`)} alt={name} />
            </B.ImageWrap> 
            <B.Content $color={badgeColor}>
                <p>{name}</p>
                <p>{targetValue}개 미만</p>
            </B.Content>
        </B.Container>
    );
};

export default Badge;
