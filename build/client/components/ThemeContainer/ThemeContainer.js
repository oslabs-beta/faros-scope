"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeContainer = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
/**
 * A basic container that uses the current theme for styling, and wraps its children in a centered div
 * @param children
 * @returns ReactNode
 */
const ThemeContainer = ({ children, IDOverride, style, }) => {
    const muiTheme = (0, material_1.useTheme)();
    return ((0, jsx_runtime_1.jsx)("div", { style: style, id: IDOverride || undefined, className: `styledContainer ${muiTheme.palette.mode}`, children: children }));
};
exports.ThemeContainer = ThemeContainer;
