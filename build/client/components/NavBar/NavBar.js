"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavBar = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const Menu_1 = __importDefault(require("@mui/icons-material/Menu"));
const react_router_dom_1 = require("react-router-dom");
const SwitchButton_1 = require("../SwitchButton");
const material_2 = require("@mui/material");
const react_1 = require("react");
const theme_1 = require("../../theme");
const faros_png_1 = __importDefault(require("../../assets/faros.png"));
require("./navbar.scss");
const NavBar = () => {
    const colorMode = (0, react_1.useContext)(theme_1.ColorModeContext);
    const changeTheme = () => colorMode.toggleColorMode();
    const [sidebarShow, setSidebarShow] = (0, react_1.useState)(false);
    const theme = (0, material_2.useTheme)();
    const toggleSidebar = () => {
        console.log('toggleSidebar');
        setSidebarShow(!sidebarShow);
    };
    return ((0, jsx_runtime_1.jsx)(material_1.AppBar, { id: "navbar", position: "fixed", children: (0, jsx_runtime_1.jsxs)(material_1.Toolbar, { id: "toolbar", sx: {
                backgroundColor: 'transparent',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }, children: [(0, jsx_runtime_1.jsx)(material_1.IconButton, { size: "large", edge: "start", color: "inherit", "aria-label": "menu", sx: {
                        mr: 2,
                        '&:hover': {
                            backgroundColor: '#20232A',
                        },
                    }, onClick: toggleSidebar, children: (0, jsx_runtime_1.jsx)(Menu_1.default, {}) }), (0, jsx_runtime_1.jsxs)(material_1.Box, { display: 'flex', gap: 2, children: [(0, jsx_runtime_1.jsx)("img", { height: '50px', src: faros_png_1.default, alt: "logo" }), (0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "h1", children: "Faros-Scope" })] }), (0, jsx_runtime_1.jsx)(SwitchButton_1.SwitchButton, { onChange: changeTheme }), (0, jsx_runtime_1.jsxs)(material_1.Drawer, { variant: "temporary", anchor: "left", open: sidebarShow, onClose: toggleSidebar, ModalProps: {
                        keepMounted: true, // Better open performance on mobile.
                    }, sx: {
                        '& .MuiPaper-root': {
                            background: 'transparent',
                        },
                        '& .MuiDrawer-paper': {
                            minWidth: '15%',
                            backgroundColor: theme.palette.mode === 'light' ? '#FFFFFF' : '#20232A',
                        },
                    }, children: [(0, jsx_runtime_1.jsx)(material_1.IconButton, { size: "large", edge: false, "aria-label": "menu", sx: {
                                color: theme.palette.mode === 'light' ? '#000000' : '#FFFFFF',
                                width: '100%',
                                borderRadius: '0%',
                                backgroundColor: theme.palette.mode === 'light' ? '#d6d4d4' : '#181a1f',
                                '&:hover': {
                                    backgroundColor: theme.palette.mode === 'light' ? '#FFFFFF' : '#20232A',
                                },
                            }, onClick: toggleSidebar, children: (0, jsx_runtime_1.jsx)(Menu_1.default, {}) }), (0, jsx_runtime_1.jsxs)(material_1.Box, { sx: {
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: 1,
                                borderTop: `1px solid ${theme.palette.mode === 'light'
                                    ? '#000000'
                                    : 'rgba(248, 249, 250, 0.5)'}`,
                                borderBottom: `1px solid ${theme.palette.mode === 'light'
                                    ? '#000000'
                                    : 'rgba(248, 249, 250, 0.5)'}`,
                                backgroundColor: theme.palette.mode === 'light' ? '#d6d4d4' : '#181a1f',
                            }, children: [(0, jsx_runtime_1.jsx)(material_1.Container, { sx: {
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginTop: '0.5rem',
                                    }, children: (0, jsx_runtime_1.jsx)("img", { height: '50px', src: faros_png_1.default, alt: "logo" }) }), (0, jsx_runtime_1.jsx)(material_1.Container, { sx: {
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        '&:hover': {
                                            backgroundColor: theme.palette.mode === 'light' ? '#FFFFFF' : '#20232A',
                                        },
                                    }, children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { onClick: toggleSidebar, className: "navbar-link", to: "/", style: {
                                            color: theme.palette.typography.main,
                                        }, children: "Dashboard" }) }), (0, jsx_runtime_1.jsx)(material_1.Container, { sx: {
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        '&:hover': {
                                            backgroundColor: theme.palette.mode === 'light' ? '#FFFFFF' : '#20232A',
                                        },
                                    }, children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { onClick: toggleSidebar, className: "navbar-link", to: "/list-view", style: {
                                            color: theme.palette.typography.main,
                                        }, children: "List-View" }) }), (0, jsx_runtime_1.jsx)(material_1.Container, { sx: {
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        '&:hover': {
                                            backgroundColor: theme.palette.mode === 'light' ? '#FFFFFF' : '#20232A',
                                        },
                                    }, children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { onClick: toggleSidebar, className: "navbar-link", to: "/node-view", style: {
                                            color: theme.palette.typography.main,
                                        }, children: "Node-View" }) })] })] })] }) }));
};
exports.NavBar = NavBar;
