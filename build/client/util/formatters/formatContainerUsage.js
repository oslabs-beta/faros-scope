"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatContainerUsage = void 0;
const formatContainerUsage = (data) => {
    const cache = { node: [], pod: [], namespace: [] };
    if (data.pod) {
        data.pod.forEach((item, idx) => {
            const key = Object.keys(item)[0];
            const spreadPod = Object.assign({ name: key, id: idx, type: 'pod' }, item[key]);
            cache.pod.push(spreadPod);
        });
    }
    if (data.node) {
        data.node.forEach((item, idx) => {
            const key = Object.keys(item)[0];
            const spreadNode = Object.assign({ name: key, id: idx, type: 'node' }, item[key]);
            cache.node.push(spreadNode);
        });
    }
    if (data.namespace) {
        data.namespace.forEach((item, idx) => {
            const key = Object.keys(item)[0];
            const spreadNamespace = Object.assign({ name: key, id: idx, type: 'namespace' }, item[key]);
            cache.namespace.push(spreadNamespace);
        });
    }
    return cache;
};
exports.formatContainerUsage = formatContainerUsage;
