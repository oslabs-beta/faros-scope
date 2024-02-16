"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Node_1 = __importDefault(require("../components/Node/Node"));
//* example arr input:
//* [
//*   { name: '1'},
//*   { name: '2'},
//* ]
/**
 * Formats the nodes of a cluster into a list of JSX elements.
 * @param arr - The nodes of a cluster.
 * @returns A list of JSX elements.
 */
function formatNodes(arr = [], interval = 4) {
    const result = [];
    const dimensions = {
        width: `${(arr.length % 2) + 9}em`,
        height: `${(arr.length % 2) + 9}em`,
        maxWidth: '15em',
        maxHeight: '15em',
    };
    console.log('INSIDE FORMATE NODE', arr);
    let i = 0;
    while (i < arr.length) {
        const nodesSlice = arr.slice(i, i + interval);
        const row = nodesSlice.map((node) => {
            return (0, jsx_runtime_1.jsx)(Node_1.default, { dimensions: dimensions, node: node }, node.name);
        });
        result.push((0, jsx_runtime_1.jsx)("div", { className: "row", children: row }));
        i += interval; // Increment by interval
    }
    return result;
}
exports.default = formatNodes;
