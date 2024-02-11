"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const index_1 = require("../components/Pod/index");
/**
 * Formats the pods of a node into a list of JSX elements.
 * @param pods - The pods of a node.
 * @returns A list of JSX elements.
 */
const formatPods = (pods = [], interval = 6, clickFunc) => {
    const result = [];
    let i = 0;
    while (i < pods.length) {
        const elements = pods.slice(i, i + interval); // Get interval elements
        const row = elements.map((element, indx) => {
            const animationDelay = `${2 + indx / 4 + i / 4}s`;
            return ((0, jsx_runtime_1.jsx)(index_1.Pod, { podName: element.name, podData: element, animationDelay: animationDelay, clickFunc: clickFunc }, element.name));
        });
        result.push((0, jsx_runtime_1.jsx)("div", { className: "podRow", children: row }, i));
        i += interval; // Increment by interval
    }
    return result;
};
exports.default = formatPods;
