"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("../../css/Switchbutton.scss");
const Theme_1 = require("../../Theme");
/**
 * A basic switch button that uses the current theme for styling, and toggles the current global theme between light and dark modes
 * @param checked
 * @param onChange
 * @returns ReactNode
 */
const SwitchButton = ({ checked, onChange }) => {
    const { theme } = (0, Theme_1.useTheme)();
    //* Sun is the light theme, moon is the dark theme, image element uses a dynamic path, depending on the theme mode
    const sun = '../../assets/sun.png';
    const moon = '../../assets/moon.png';
    return (react_1.default.createElement("div", { className: "switchContainer" },
        react_1.default.createElement("div", { className: "switchButton" },
            react_1.default.createElement("input", { type: "checkbox", className: "switchBar", checked: checked, onChange: onChange }),
            react_1.default.createElement("span", { className: "slider" },
                react_1.default.createElement("img", { className: "themeIcon", src: theme === 'dark' ? moon : sun })))));
};
exports.default = SwitchButton;
