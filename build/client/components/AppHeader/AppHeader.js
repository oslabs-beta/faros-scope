"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const icons_1 = require("@coreui/icons");
const icons_react_1 = __importDefault(require("@coreui/icons-react"));
const react_1 = require("@coreui/react");
const material_1 = require("@mui/material");
const react_2 = require("react");
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const theme_1 = require("../../theme");
const index_1 = require("../index");
// import { AppHeaderDropdown } from './components';
// import { logo } from 'src/assets/brand/logo'
const slice_1 = require("../../store/slice");
const AppHeader = () => {
    //   let location = useLocation();
    // type assertion; assert to typescript that ColorModeContext is an object with the method toggleColorMode
    const colorMode = (0, react_2.useContext)(theme_1.ColorModeContext);
    const theme = (0, material_1.useTheme)();
    const changeTheme = () => colorMode.toggleColorMode();
    const dispatch = (0, react_redux_1.useDispatch)();
    const sidebarShow = (0, react_redux_1.useSelector)((state) => state.appState.sidebarShow);
    const toggleSidebar = () => {
        dispatch((0, slice_1.changeState)({ type: 'set', sidebarShow: !sidebarShow }));
    };
    return ((0, jsx_runtime_1.jsxs)(react_1.CHeader, { position: "sticky", className: "mb-4", children: [(0, jsx_runtime_1.jsxs)(react_1.CContainer, { fluid: true, children: [(0, jsx_runtime_1.jsx)(react_1.CHeaderToggler, { className: "ps-1", 
                        //   onClick={() => dispatch(changeState({ type: 'set', sidebarShow: !sidebarShow }))}
                        onClick: toggleSidebar, children: (0, jsx_runtime_1.jsx)(icons_react_1.default, { icon: icons_1.cilMenu, size: "lg" }) }), (0, jsx_runtime_1.jsxs)(react_1.CHeaderNav, { className: "d-none d-md-flex me-auto", children: [(0, jsx_runtime_1.jsx)(react_1.CNavItem, { children: (0, jsx_runtime_1.jsx)(react_1.CNavLink, { to: "/dashboard", component: react_router_dom_1.NavLink, children: "Dashboard" }) }), (0, jsx_runtime_1.jsx)(react_1.CNavItem, {}), (0, jsx_runtime_1.jsx)(react_1.CNavItem, {})] }), (0, jsx_runtime_1.jsxs)(react_1.CHeaderNav, { children: [(0, jsx_runtime_1.jsx)(react_1.CNavItem, { children: (0, jsx_runtime_1.jsx)(react_1.CNavLink, { href: "#", children: (0, jsx_runtime_1.jsx)(icons_react_1.default, { icon: icons_1.cilBell, size: "lg" }) }) }), (0, jsx_runtime_1.jsx)(react_1.CNavItem, { children: (0, jsx_runtime_1.jsx)(react_1.CNavLink, { href: "#", children: (0, jsx_runtime_1.jsx)(icons_react_1.default, { icon: icons_1.cilList, size: "lg" }) }) }), (0, jsx_runtime_1.jsx)(react_1.CNavItem, { children: (0, jsx_runtime_1.jsx)(react_1.CNavLink, { href: "#", children: (0, jsx_runtime_1.jsx)(icons_react_1.default, { icon: icons_1.cilEnvelopeOpen, size: "lg" }) }) })] }), (0, jsx_runtime_1.jsxs)(react_1.CHeaderNav, { children: [(0, jsx_runtime_1.jsx)("li", { className: "nav-item py-1", children: (0, jsx_runtime_1.jsx)("div", { className: "vr h-100 mx-2 text-body text-opacity-75" }) }), (0, jsx_runtime_1.jsxs)(react_1.CDropdown, { variant: "nav-item", placement: "bottom-end", children: [(0, jsx_runtime_1.jsx)(react_1.CDropdownToggle, { caret: false, children: theme.palette.mode === 'dark' ? ((0, jsx_runtime_1.jsx)(icons_react_1.default, { icon: icons_1.cilMoon, size: "lg" })) : ((0, jsx_runtime_1.jsx)(icons_react_1.default, { icon: icons_1.cilSun, size: "lg" })) }), (0, jsx_runtime_1.jsxs)(react_1.CDropdownMenu, { children: [(0, jsx_runtime_1.jsxs)(react_1.CDropdownItem, { active: theme.palette.mode === 'light', className: "d-flex align-items-center", component: "button", type: "button", onClick: () => changeTheme(), children: [(0, jsx_runtime_1.jsx)(icons_react_1.default, { className: "me-2", icon: icons_1.cilSun, size: "lg" }), " Light"] }), (0, jsx_runtime_1.jsxs)(react_1.CDropdownItem, { active: theme.palette.mode === 'dark', className: "d-flex align-items-center", component: "button", type: "button", onClick: () => changeTheme(), children: [(0, jsx_runtime_1.jsx)(icons_react_1.default, { className: "me-2", icon: icons_1.cilMoon, size: "lg" }), " Dark"] })] })] })] })] }), (0, jsx_runtime_1.jsx)(react_1.CHeaderDivider, {}), (0, jsx_runtime_1.jsxs)(react_1.CContainer, { fluid: true, className: "d-flex justify-content-between", children: [(0, jsx_runtime_1.jsx)(index_1.AppBreadcrumb, {}), "Add TimePicker"] }), (0, jsx_runtime_1.jsx)(react_1.CHeaderDivider, {}), (0, jsx_runtime_1.jsx)(react_1.CContainer, { fluid: true, children: "Add Notifications |  Add Filter | Add Event" })] }));
};
exports.default = AppHeader;