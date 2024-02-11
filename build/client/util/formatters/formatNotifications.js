"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatNotifications = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const components_1 = require("../../components");
/**
 * Converts the clusterEvent object in redux in notification JSX elements
 * @param logs
 * @returns A list of JSX elements
 *
 */
const formatNotifications = (logs) => {
    const result = [];
    for (const obj in logs) {
        const newLog = {
            name: logs[obj].metadata.name,
            logText: logs[obj].eventType,
        };
        result.push(newLog);
    }
    const notifsArr = result.map((elm) => {
        return (0, jsx_runtime_1.jsx)(components_1.Notification, { data: elm });
    });
    return notifsArr;
};
exports.formatNotifications = formatNotifications;
