"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwitchButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const fa_1 = require("react-icons/fa");
require("./SwitchButton.scss");
/**
 * A basic switch button that uses the current theme for styling, and toggles the current global theme between light and dark modes
 * @param checked
 * @param onChange
 * @returns ReactNode
 */
const SwitchButton = ({ onChange }) => {
    const muiTheme = (0, material_1.useTheme)();
    return ((0, jsx_runtime_1.jsx)("div", { className: 'switchContainer', children: (0, jsx_runtime_1.jsxs)("div", { className: 'switchButton', children: [(0, jsx_runtime_1.jsxs)("label", { className: 'modeLabel', htmlFor: "lightTheme", children: [(0, jsx_runtime_1.jsx)("input", { type: "radio", id: "lightTheme", className: 'brightnessModeLight' + ' ' + 'brightnessMode', value: "light", checked: muiTheme.palette.mode === 'light', onChange: onChange }), (0, jsx_runtime_1.jsx)(fa_1.FaSun, { className: 'sunIcon' })] }), (0, jsx_runtime_1.jsxs)("label", { className: 'modeLabel', htmlFor: "darkTheme", children: [(0, jsx_runtime_1.jsx)("input", { type: "radio", id: "darkTheme", className: 'brightnessModeLight' + ' ' + 'brightnessMode', value: "dark", checked: muiTheme.palette.mode === 'dark', onChange: onChange }), (0, jsx_runtime_1.jsx)(fa_1.FaMoon, { className: 'moonIcon' })] })] }) }));
};
exports.SwitchButton = SwitchButton;
