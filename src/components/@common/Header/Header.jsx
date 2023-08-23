import { StyledHeader, StyledHeaderInner } from './Header.styles';
import HeaderIcon from '@assets/icons/icon-header.png';

const Header = () => {
    return (
        <StyledHeader>
            <StyledHeaderInner>
                <h1>Artsy</h1>
                <img src={HeaderIcon} />
            </StyledHeaderInner>
        </StyledHeader>
    );
};
export default Header;
