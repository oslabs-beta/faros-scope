"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Container_1 = __importDefault(require("../components/Pod/Container"));
/**
 * Formats the pods of a node into a list of JSX elements.
 * @param containers - The pods of a node.
 * @returns A list of JSX elements.
 */
const formatContainers = (containers = []) => {
    return containers.map((container) => {
        return ((0, jsx_runtime_1.jsx)(Container_1.default, { containerName: container.name, containerImage: container.image, cpuUsage: container.cpuUsage, memUsage: container.memUsage }, container.name));
    });
};
exports.default = formatContainers;
