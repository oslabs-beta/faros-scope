"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppSidebarNav = void 0;
const react_1 = require("react");
const jsx_runtime_1 = require("react/jsx-runtime");
const react_2 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const prop_types_1 = __importDefault(require("prop-types"));
const react_3 = require("@coreui/react");
const AppSidebarNav = ({ items }) => {
    const location = (0, react_router_dom_1.useLocation)();
    const navLink = (name, icon, badge, indent = false) => {
        return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [icon
                    ? icon
                    : indent && ((0, jsx_runtime_1.jsx)("span", { className: "nav-icon", children: (0, jsx_runtime_1.jsx)("span", { className: "nav-icon-bullet" }) })), name && name, badge && ((0, jsx_runtime_1.jsx)(react_3.CBadge, { color: badge.color, className: "ms-auto", children: badge.text }))] }));
    };
    const navItem = (item, index, indent = false) => {
        const { component, name, badge, icon } = item, rest = __rest(item, ["component", "name", "badge", "icon"]);
        const Component = component;
        return ((0, react_1.createElement)(Component, Object.assign({}, (rest.to &&
            !rest.items && {
            component: react_router_dom_1.NavLink,
        }), { key: index }, rest), navLink(name, icon, badge, indent)));
    };
    const navGroup = (item, index) => {
        var _a;
        const { component, name, icon, items, to } = item, rest = __rest(item, ["component", "name", "icon", "items", "to"]);
        const Component = component;
        return ((0, jsx_runtime_1.jsx)(Component, Object.assign({ compact: true, idx: String(index), toggler: navLink(name, icon), visible: location.pathname.startsWith(to) }, rest, { children: (_a = item.items) === null || _a === void 0 ? void 0 : _a.map((item, index) => item.items ? navGroup(item, index) : navItem(item, index, true)) }), index));
    };
    return ((0, jsx_runtime_1.jsx)(react_2.default.Fragment, { children: items &&
            items.map((item, index) => (item.items ? navGroup(item, index) : navItem(item, index))) }));
};
exports.AppSidebarNav = AppSidebarNav;
exports.AppSidebarNav.propTypes = {
    items: prop_types_1.default.arrayOf(prop_types_1.default.any).isRequired,
};
