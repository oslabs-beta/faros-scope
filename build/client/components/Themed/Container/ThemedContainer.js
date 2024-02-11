"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemedContainer = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Theme_1 = require("../../context/Theme");
/**
 * A basic container that uses the current theme for styling, and wraps its children in a centered div
 * @param children
 * @returns ReactNode
 */
const ThemedContainer = ({ children, IDOverride, }) => {
    const { theme } = (0, Theme_1.useTheme)();
    return ((0, jsx_runtime_1.jsx)("div", { id: IDOverride || '', className: `outerContainer ${theme}`, children: (0, jsx_runtime_1.jsx)("div", { id: IDOverride || '', className: `innerContainer ${theme}`, children: children }) }));
};
exports.ThemedContainer = ThemedContainer;
