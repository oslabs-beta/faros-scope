"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSocket = void 0;
const react_1 = require("react");
const socket_io_client_1 = require("socket.io-client");
const metricsSlice_1 = require("./metricsSlice");
const store_1 = __importDefault(require("./store"));
// Custom Hook for Socket.IO
const useSocket = (url) => {
    const [socket, setSocket] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        // Connect to Socket.IO server
        const newSocket = (0, socket_io_client_1.io)(url);
        setSocket(newSocket);
        newSocket.on("connect", () => {
            console.log("Connected to Socket.IO server");
        });
        newSocket.on("disconnect", () => {
            console.log("Disconnected from Socket.IO server");
        });
        newSocket.on('podAdded', (data) => {
            console.log('Pod Added: ', data);
            data.eventType = 'Pod Added';
            store_1.default.dispatch((0, metricsSlice_1.addClusterEventWithCustomId)(data, 'PodAdded'));
        });
        newSocket.on('podModified', (data) => {
            data.eventType = 'Pod Modified';
            console.log('Pod Modified: ', data);
            store_1.default.dispatch((0, metricsSlice_1.addClusterEventWithCustomId)(data, 'PodModified'));
        });
        newSocket.on('podDeleted', (data) => {
            data.eventType = 'Pod Deleted';
            console.log('Pod Deleted: ', data);
            store_1.default.dispatch((0, metricsSlice_1.addClusterEventWithCustomId)(data, 'PodDeleted'));
        });
        return () => { newSocket.disconnect(); };
    }, [url]);
    return socket;
};
exports.useSocket = useSocket;
