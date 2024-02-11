"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavBar = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
require("./Navbar.scss");
const index_1 = require("../SwitchButton/index");
const react_1 = require("react");
const theme_1 = require("../../theme");
const material_1 = require("@mui/material");
/**
 * The NavBar component is contstantly rendered at the top of the page. It contains a link to the Faros GitHub repo, and other links to different pages of the app. It also contains a toggle switch to change the theme of the app.
 * @returns ReactNode
 */
const NavBar = ({ styleOverride }) => {
    const colorMode = (0, react_1.useContext)(theme_1.ColorModeContext);
    const muiTheme = (0, material_1.useTheme)();
    // const { scrollToSignificantChild } = useGrid();
    const changeTheme = () => {
        colorMode.toggleColorMode();
        // toggleTheme();
    };
    // const centerGrid = () => {
    //   scrollToSignificantChild();
    // };
    return ((0, jsx_runtime_1.jsx)("div", { style: styleOverride, className: `navContainer ${'horizontal'} ${muiTheme.palette.mode}`, children: (0, jsx_runtime_1.jsxs)("nav", { className: `NavBar ${'horizontal'}`, children: [(0, jsx_runtime_1.jsx)("a", { id: "App-Name-Header", className: 'navLink', href: "https://github.com/oslabs-beta/faros-scope", children: "Faros" }), (0, jsx_runtime_1.jsxs)("div", { className: 'nav-right', children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: '/', className: 'navLink', children: "Home" }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: '/list-view', className: 'navLink', children: "List View" }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: '/node-view', className: 'navLink', children: "Node View" }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: '/landing', className: 'navLink', children: "About" }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: 'https://github.com/oslabs-beta/faros-scope', className: 'navLink', children: "Github Repository" })] }), (0, jsx_runtime_1.jsx)(index_1.SwitchButton, { onChange: changeTheme })] }) }));
};
exports.NavBar = NavBar;
