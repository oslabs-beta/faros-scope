"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tooltip = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const material_1 = require("@mui/material");
const Tooltip = ({ children, text }) => {
    const [show, setShow] = (0, react_1.useState)(false);
    const muiTheme = (0, material_1.useTheme)();
    const hideTooltip = () => {
        setShow(false);
    };
    const showTooltip = () => {
        setShow(true);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "tooltip", onMouseLeave: hideTooltip, children: [show && ((0, jsx_runtime_1.jsx)("span", { className: `tooltip-text ${muiTheme.palette.mode}`, children: text })), (0, jsx_runtime_1.jsx)("div", { className: "tooltip-trigger", onMouseOver: showTooltip, children: children })] }));
};
exports.Tooltip = Tooltip;
