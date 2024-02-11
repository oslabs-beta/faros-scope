"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatContainers = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const components_1 = require("../../components");
/**
 * Formats the pods of a node into a list of JSX elements.
 * @param containers - The pods of a node.
 * @returns A list of JSX elements.
 */
const formatContainers = (containers = []) => {
    return containers.map((container) => {
        return ((0, jsx_runtime_1.jsx)(components_1.Container, { containerName: container.name, containerImage: container.image, cpuUsage: container.cpuUsage, memUsage: container.memUsage }, container.name));
    });
};
exports.formatContainers = formatContainers;
