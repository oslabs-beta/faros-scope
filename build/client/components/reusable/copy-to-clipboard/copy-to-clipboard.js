"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CopyToClipboard = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const fa_1 = require("react-icons/fa");
require("./copy-to-clipboard.scss");
const CopyToClipboard = ({ text }) => {
    return ((0, jsx_runtime_1.jsx)("button", { onClick: () => {
            navigator.clipboard.writeText(text);
        }, className: "copyToClipboard", children: (0, jsx_runtime_1.jsx)(fa_1.FaCopy, {}) }));
};
exports.CopyToClipboard = CopyToClipboard;
