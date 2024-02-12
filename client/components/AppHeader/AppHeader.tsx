import {
  cilBell,
  cilEnvelopeOpen,
  cilList,
  cilMenu,
  cilMoon,
  cilSun,
} from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import {
  CContainer,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CHeader,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavItem,
  CNavLink,
} from "@coreui/react";
import { useTheme } from "@mui/material";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { ColorModeContext } from "../../theme";

import { AppBreadcrumb } from "../index";
// import { AppHeaderDropdown } from './components';
// import { logo } from 'src/assets/brand/logo'

import { changeState } from "../../store/slice";

import { RootState } from "../../../types/types";

const AppHeader = () => {
  //   let location = useLocation();

  // type assertion; assert to typescript that ColorModeContext is an object with the method toggleColorMode
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  const changeTheme = () => colorMode.toggleColorMode();

  const dispatch = useDispatch();

  const sidebarShow = useSelector(
    (state: RootState) => state.appState.sidebarShow
  );

  const toggleSidebar = () => {
    dispatch(changeState({ type: "set", sidebarShow: !sidebarShow }));
  };

  return (
    <CHeader position="sticky">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          //   onClick={() => dispatch(changeState({ type: 'set', sidebarShow: !sidebarShow }))}
          onClick={toggleSidebar}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        {/* <CHeaderBrand className="mx-auto d-md-none" to="/">
          <CIcon icon={logo} height={48} alt="Logo" />
        </CHeaderBrand> */}
        <CHeaderNav className="d-none d-md-flex me-auto">
          <CNavItem>
            <CNavLink to="/dashboard" component={NavLink}>
              Dashboard
            </CNavLink>
          </CNavItem>
          <CNavItem>{/* <CNavLink href="#">Users</CNavLink> */}</CNavItem>
          <CNavItem>{/* \\<CNavLink href="#">Settings</CNavLink> */}</CNavItem>
        </CHeaderNav>
        <CHeaderNav>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilBell} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilList} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilEnvelopeOpen} size="lg" />
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav>
          <li className="nav-item py-1">
            <div className="vr h-100 mx-2 text-body text-opacity-75"></div>
          </li>
          <CDropdown variant="nav-item" placement="bottom-end">
            <CDropdownToggle caret={false}>
              {theme.palette.mode === "dark" ? (
                <CIcon icon={cilMoon} size="lg" />
              ) : (
                <CIcon icon={cilSun} size="lg" />
              )}
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem
                active={theme.palette.mode === "light"}
                className="d-flex align-items-center"
                component="button"
                type="button"
                onClick={() => changeTheme()}
              >
                <CIcon className="me-2" icon={cilSun} size="lg" /> Light
              </CDropdownItem>
              <CDropdownItem
                active={theme.palette.mode === "dark"}
                className="d-flex align-items-center"
                component="button"
                type="button"
                onClick={() => changeTheme()}
              >
                <CIcon className="me-2" icon={cilMoon} size="lg" /> Dark
              </CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CHeaderNav>
        {/* <CHeaderNav className="ms-3">
          <AppHeaderDropdown />
        </CHeaderNav> */}
      </CContainer>
      <CHeaderDivider />
      <CContainer fluid className="d-flex justify-content-between">
        <AppBreadcrumb />
        {/* // SELECTIVELY RENDER TIMESPAN BASED ON ROUTE */}
        {/* <BasicTimePicker/> */}
        Add TimePicker
      </CContainer>
      <CHeaderDivider />
      <CContainer fluid>Add Notifications | Add Filter | Add Event</CContainer>
    </CHeader>
  );
};

export default AppHeader;
