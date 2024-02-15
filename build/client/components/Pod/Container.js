"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Container = ({ containerName, containerImage, }) => {
    return (
    // Rename Class
    (0, jsx_runtime_1.jsxs)("div", { className: "containerBucketOuter", children: [(0, jsx_runtime_1.jsxs)("div", { className: "containerName", children: ["name: ", containerName] }), (0, jsx_runtime_1.jsxs)("div", { className: "containerImage", children: [" image: ", containerImage] }), (0, jsx_runtime_1.jsx)("div", { children: 0 }), (0, jsx_runtime_1.jsx)("div", { children: 0 })] }));
};
exports.default = Container;
