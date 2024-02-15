"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColoredText = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
/**
 * @param color - The color of the text, first letter must be capitalized
*/
const ColoredText = ({ children, color }) => {
    return ((0, jsx_runtime_1.jsx)("span", { className: `inline${color}Text`, children: children }));
};
exports.ColoredText = ColoredText;
