import SideBar from '@components/SideBar/SideBar';
import { StyledHeader, StyledHeaderInner } from './Header.styles';
import HeaderIcon from '@assets/icons/icon-header.png';

const Header = () => {
    return (
        <StyledHeader>
            <StyledHeaderInner>Header</StyledHeaderInner>
            <SideBar />
        </StyledHeader>
    );
};
export default Header;
