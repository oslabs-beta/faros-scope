"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationDisplay = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
require("../../css/NotifDisplay.scss");
const util_1 = require("../../util");
const react_redux_1 = require("react-redux");
const material_1 = require("@mui/material");
const NotificationDisplay = () => {
    const logHistory = (0, react_redux_1.useSelector)((state) => state.clusterEvents.entities);
    const muiTheme = (0, material_1.useTheme)();
    let filteredLogHistory;
    if (logHistory) {
        filteredLogHistory = (0, util_1.formatNotifications)(logHistory);
    }
    return ((0, jsx_runtime_1.jsxs)("div", { className: `notificationContainer ${muiTheme.palette.mode}`, children: [(0, jsx_runtime_1.jsx)("h2", { className: "notificationTitle", children: "Notifications" }), filteredLogHistory] }));
};
exports.NotificationDisplay = NotificationDisplay;
