"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSocket = void 0;
const react_1 = require("react");
const socket_io_client_1 = require("socket.io-client");
const slice_1 = require("../store/slice");
const store_1 = require("../store");
// Custom Hook for Socket.IO
const useSocket = (url) => {
    const [socket, setSocket] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        // Connect to Socket.IO server
        const newSocket = (0, socket_io_client_1.io)(url);
        setSocket(newSocket);
        newSocket.on('connect', () => {
            console.log('Connected to Socket.IO server');
        });
        newSocket.on('disconnect', () => {
            console.log('Disconnected from Socket.IO server');
        });
        newSocket.on('podAdded', (data) => {
            console.log('added POD');
            data.eventType = 'Pod Added';
            store_1.store.dispatch((0, slice_1.addClusterEvent)(data));
        });
        newSocket.on('podModified', (data) => {
            data.eventType = 'Pod Modified';
            store_1.store.dispatch((0, slice_1.addClusterEvent)(data));
        });
        newSocket.on('podDeleted', (data) => {
            data.eventType = 'Pod Deleted';
            store_1.store.dispatch((0, slice_1.addClusterEvent)(data));
        });
        return () => {
            newSocket.disconnect();
        };
    }, [url]);
    return socket;
};
exports.useSocket = useSocket;
