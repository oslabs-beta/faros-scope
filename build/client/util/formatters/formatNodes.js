"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatNodes = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Node_1 = require("../../components/Node/Node");
/**
 * Formats the nodes of a cluster into a list of JSX elements.
 * @param arr - The nodes of a cluster.
 * @returns A list of JSX elements.
 */
const formatNodes = (arr = [], interval = 4) => {
    const result = [];
    const dimensions = {
        width: `${(arr.length % 2) + 15}em`,
        height: `${(arr.length % 2) + 15}em`,
        maxWidth: '20em',
        maxHeight: '20em',
    };
    let i = 0;
    while (i < arr.length) {
        const nodesSlice = arr.slice(i, i + interval);
        const row = nodesSlice.map((node) => {
            return (0, jsx_runtime_1.jsx)(Node_1.Node, { dimensions: dimensions, node: node }, node.nodeName);
        });
        result.push((0, jsx_runtime_1.jsx)("div", { className: "row", children: row }));
        i += interval;
    }
    return result;
};
exports.formatNodes = formatNodes;
