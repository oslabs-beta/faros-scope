"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const react_redux_1 = require("react-redux");
const slice_1 = require("../../store/slice");
const react_2 = require("@coreui/react");
const icons_react_1 = __importDefault(require("@coreui/icons-react"));
const components_1 = require("./components");
const simplebar_react_1 = __importDefault(require("simplebar-react"));
require("simplebar/dist/simplebar.min.css");
// sidebar nav config
const _nav_1 = __importDefault(require("../../_nav"));
const AppSidebar = () => {
    const dispatch = (0, react_redux_1.useDispatch)();
    const unfoldable = (0, react_redux_1.useSelector)((state) => state.appState.sidebarUnfoldable);
    const sidebarShow = (0, react_redux_1.useSelector)((state) => state.appState.sidebarShow);
    return ((0, jsx_runtime_1.jsxs)(react_2.CSidebar, { position: "fixed", unfoldable: unfoldable, visible: sidebarShow, onVisibleChange: (visible) => {
            dispatch((0, slice_1.changeState)({ type: "set", sidebarShow: visible }));
        }, children: [(0, jsx_runtime_1.jsxs)(react_2.CSidebarBrand, { className: "WhatAmI d-none d-md-flex" /*to="/" */, children: [(0, jsx_runtime_1.jsx)(icons_react_1.default, { className: "sidebar-brand-full", height: 35 }), (0, jsx_runtime_1.jsx)(icons_react_1.default, { className: "sidebar-brand-narrow", height: 35 })] }), (0, jsx_runtime_1.jsx)(react_2.CSidebarNav, { children: (0, jsx_runtime_1.jsx)(simplebar_react_1.default, { children: (0, jsx_runtime_1.jsx)(components_1.AppSidebarNav, { items: _nav_1.default }) }) }), (0, jsx_runtime_1.jsx)(react_2.CSidebarToggler, { className: "d-none d-lg-flex", onClick: () => dispatch((0, slice_1.changeState)({ type: "set", sidebarUnfoldable: !unfoldable })) })] }));
};
exports.default = react_1.default.memo(AppSidebar);
