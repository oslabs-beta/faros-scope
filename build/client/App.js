"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const react_1 = require("react");
const theme_1 = require("./theme");
const system_1 = require("@mui/system");
const material_1 = require("@mui/material");
const react_2 = require("@coreui/react");
// import { HomePage } from './pages';
// import { SettingsPage } from './pages';
// import { LandingPage } from './pages';
// import { MainPage } from './pages';
// import { NodeView } from './pages';
// import { ListViewDisplay } from './components';
// import { GraphPage } from './pages/GraphPage/GraphPage';
// import { WorkloadView } from './pages';
require("./scss/style.scss");
// Containers
const DefaultLayout = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('./layout/DefaultLayout'))));
const Loader = () => {
    return ((0, jsx_runtime_1.jsx)("div", { style: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        }, children: (0, jsx_runtime_1.jsx)(react_2.CSpinner, { variant: "grow" }) }));
};
const App = () => {
    const { theme, colorMode } = (0, theme_1.useMode)();
    return ((0, jsx_runtime_1.jsx)("div", { className: "app", children: (0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsx)(react_1.Suspense, { fallback: (0, jsx_runtime_1.jsx)(Loader, {}), children: (0, jsx_runtime_1.jsx)(theme_1.ColorModeContext.Provider, { value: colorMode, children: (0, jsx_runtime_1.jsxs)(system_1.ThemeProvider, { theme: theme, children: [(0, jsx_runtime_1.jsx)(material_1.CssBaseline, {}), (0, jsx_runtime_1.jsx)(react_router_dom_1.Routes, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "*", element: (0, jsx_runtime_1.jsx)(DefaultLayout, {}) }) })] }) }) }) }) }));
};
exports.default = App;
