import { StyledBarWrap, StyledBar, StyledLegend } from './GradeBar.styles';

/* 지영님 코드 병합시 impor 구문으로 변경 */
const BADGE_GRADE = [
    { name: '아티 비기너', targetValue: 10, imageName: 'darkSilver' },
    { name: '아티 프렌즈', targetValue: 30, imageName: 'bronze' },
    { name: '아티 패밀리', targetValue: 70, imageName: 'silver' },
    { name: '아티 마스터', targetValue: Number.POSITIVE_INFINITY, imageName: 'gold' },
];
const calculateGrade = (ticketCount) => {
    const selectedGrade = BADGE_GRADE.find(({ targetValue }) => ticketCount < targetValue);
    return selectedGrade;
};

/* // 지영님 코드 병합시 impor 구문으로 변경 */

/**
 *
 * @param {Number} total
 * @param {Number} height rem 단위로 계산한 숫자(default: 100%)
 * @param {Number} height rem 단위로 계산한 숫자(default: 1rem)
 * @returns
 */
const GradeBar = ({ total, width, height }) => {
    const { targetValue, imageName } = calculateGrade(total);
    let percent = 0;
    if (total !== 0) {
        percent = total >= 70 ? 100 : Math.floor((total / targetValue) * 100);
    }

    return (
        <StyledBarWrap $width={width}>
            <StyledLegend $grade={imageName}>
                <span>{total}</span>
                <span> / {targetValue}</span>
            </StyledLegend>
            <StyledBar $grade={imageName} $percent={percent ?? 0} $height={height} />
        </StyledBarWrap>
    );
};
export default GradeBar;
