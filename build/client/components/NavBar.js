"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("../css/Navbar.scss");
const Theme_1 = require("../Theme");
const SwitchButton_1 = __importDefault(require("./reusable/SwitchButton"));
const react_router_dom_1 = require("react-router-dom");
const reusable_1 = require("./reusable");
/**
 * The NavBar component is contstantly rendered at the top of the page. It contains a link to the Faros GitHub repo, and other links to different pages of the app. It also contains a toggle switch to change the theme of the app.
 * @returns ReactNode
 */
const NavBar = ({ styleOverride, orientation }) => {
    const { toggleTheme, theme } = (0, Theme_1.useTheme)();
    const changeTheme = () => {
        toggleTheme();
    };
    return (react_1.default.createElement("div", { style: styleOverride, className: `navContainer ${orientation === 'vertical' ? 'vertical' : 'horizontal'}` },
        react_1.default.createElement("nav", { className: `NavBar ${orientation === 'horizontal' ? 'horizontal' : 'vertical'}` },
            react_1.default.createElement("a", { id: "App-Name-Header", className: "navLink", href: "https://github.com/oslabs-beta/faros-scope" }, orientation === 'vertical' ? 'FA' : 'Faros'),
            react_1.default.createElement("div", { className: "nav-right" },
                react_1.default.createElement(react_router_dom_1.Link, { to: '/', className: "navLink" }, orientation === 'vertical' ? (react_1.default.createElement("img", { style: { maxWidth: '35px', maxHeight: '35px' }, src: "../../assets/icons8-home-512.png" })) : ('Home')),
                react_1.default.createElement(react_router_dom_1.Link, { to: '/settings', className: "navLink" }, orientation === 'vertical' ? (react_1.default.createElement("img", { style: { maxWidth: '35px', maxHeight: '35px' }, src: "../../assets/icons8-settings-512.png" })) : ('Settings')),
                react_1.default.createElement(SwitchButton_1.default, { checked: theme === 'dark', onChange: changeTheme }),
                react_1.default.createElement(reusable_1.NotPod, null)))));
};
exports.default = NavBar;
