"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Notification_1 = __importDefault(require("../components/NotifDisplay/Notification"));
const formatNotifications = (log) => {
    const result = [];
    console.log('Current Logs ----->', log);
    for (const obj in log) {
        const newLog = {
            name: log[obj].metadata.name,
            logText: log[obj].eventType
        };
        result.push(newLog);
    }
    console.log('preNotfi --->', result);
    const notifsArr = result.map((elm) => {
        return ((0, jsx_runtime_1.jsx)(Notification_1.default, { data: elm }));
    });
    // Timer Typescript issues
    // const timer = () => {
    //     const cb = (arr) => {
    //         arr.pop();
    //     }
    //     setTimeout(cb, 10000);
    // }
    // serious duct tape
    return notifsArr.reverse();
};
exports.default = formatNotifications;
