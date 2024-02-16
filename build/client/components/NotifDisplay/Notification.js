"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("../../css/NotifDisplay.scss");
const Notification = ({ data }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "notificationMessage", children: [(0, jsx_runtime_1.jsx)("div", { children: data.name }), (0, jsx_runtime_1.jsx)("div", { className: "logText", children: data.logText })] }));
};
exports.default = Notification;
