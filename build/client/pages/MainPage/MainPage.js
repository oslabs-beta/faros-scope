"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainPage = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const index_1 = require("../../components/NavBar/index");
const context_1 = require("../../context");
// import {
//   useGetClusterInfoQuery,
//   useGetClusterMetricsMapQuery,
// } from '../../services/api';
const bobbySocketService_1 = require("../../services/bobbySocketService");
const material_1 = require("@mui/material");
const theme_1 = require("../../theme");
const MainPage = () => {
    const muiTheme = (0, material_1.useTheme)();
    const { toggleColorMode } = (0, react_1.useContext)(theme_1.ColorModeContext);
    (0, bobbySocketService_1.useSocket)('http://34.139.156.110:80/');
    // ^ see if this works w/o variable declarations
    // useGetClusterInfoQuery(undefined, { pollingInterval: 25000 });
    // useGetClusterMetricsMapQuery(undefined, { pollingInterval: 5000 });
    // Outlet is a special component that is used to render nested routes, default is the index route, which is the home page.
    (0, react_1.useEffect)(() => {
        const storedMode = localStorage.getItem('theme');
        if (muiTheme.palette.mode !== storedMode) {
            toggleColorMode();
        }
    }, []);
    const body = document.querySelector('body');
    //* This useEffect hook is used to toggle the theme class on the body element, which is used to style the app's body itself.
    (0, react_1.useEffect)(() => {
        if (body) {
            if (muiTheme.palette.mode === 'dark') {
                body.classList.add('dark');
                body.classList.remove('light');
            }
            else if (muiTheme.palette.mode === 'light') {
                body.classList.add('light');
                body.classList.remove('dark');
            }
        }
        localStorage.setItem('theme', muiTheme.palette.mode);
    }, [muiTheme.palette.mode]);
    return ((0, jsx_runtime_1.jsx)("div", { className: "Main", children: (0, jsx_runtime_1.jsxs)(context_1.GridProvider, { children: [(0, jsx_runtime_1.jsx)(index_1.NavBar, {}), (0, jsx_runtime_1.jsx)(react_router_dom_1.Outlet, {})] }) }));
};
exports.MainPage = MainPage;
