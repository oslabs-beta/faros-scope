"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("../../css/NotifDisplay.scss");
const formatNotifications_1 = __importDefault(require("../../util/formatNotifications"));
const react_redux_1 = require("react-redux");
const NotifDisplay = () => {
    const logHistory = (0, react_redux_1.useSelector)((state) => state.clusterEvents.entities);
    const eventsSTATE = (0, react_redux_1.useSelector)((state) => state.clusterEvents);
    let filteredLogHistory;
    console.log('REDUX STATE NICK > EDWIN ---->', eventsSTATE);
    if (logHistory) {
        filteredLogHistory = (0, formatNotifications_1.default)(logHistory);
    }
    const showNotifications = () => {
        const notificationDiv = document.getElementsByClassName('notificationContainer');
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "outerNotifContainer", onClick: () => console.log('hi'), children: [(0, jsx_runtime_1.jsx)("h2", { className: "notificationTitle", children: "Notifications" }), (0, jsx_runtime_1.jsx)("div", { className: "notificationContainer", children: filteredLogHistory })] }));
};
exports.default = NotifDisplay;
