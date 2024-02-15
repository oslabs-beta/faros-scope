"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Theme_1 = require("../../Theme");
/**
 * A basic container that uses the current theme for styling, and wraps its children in a centered div
 * @param children
 * @returns ReactNode
 */
const ThemedContainer = ({ children }) => {
    const { theme } = (0, Theme_1.useTheme)();
    return (react_1.default.createElement("div", { className: `outerContainer ${theme}` },
        react_1.default.createElement("div", { className: `innerContainer ${theme}` }, children)));
};
exports.default = ThemedContainer;
