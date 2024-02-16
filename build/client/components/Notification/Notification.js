"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notification = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
require("./NotifDisplay.scss");
const material_1 = require("@mui/material");
const Notification = ({ data }) => {
    const muiTheme = (0, material_1.useTheme)();
    return ((0, jsx_runtime_1.jsxs)("div", { className: `notificationMessage ${muiTheme.palette.mode}`, children: [(0, jsx_runtime_1.jsx)("div", { children: data.name }), (0, jsx_runtime_1.jsx)("div", { className: "logText", children: data.logText })] }));
};
exports.Notification = Notification;
