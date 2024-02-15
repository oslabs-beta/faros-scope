"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
// import React from 'react'
const react_1 = require("@coreui/react");
const icons_1 = require("@coreui/icons");
const icons_react_1 = __importDefault(require("@coreui/icons-react"));
// interface ExtendedCDropdownToggleProps extends React.ComponentProps<typeof CDropdownToggle> { 
//     placement?: string;
// }
// const ExtendedCDropdownToggle: React.FC<ExtendedCDropdownToggleProps> = (props) => {
//     const {...restProps} = props; 
//     return <CDropdownToggle {...restProps} />
// }
const AppHeaderDropdown = () => {
    return ((0, jsx_runtime_1.jsxs)(react_1.CDropdown, { variant: "nav-item", children: [(0, jsx_runtime_1.jsx)(react_1.CDropdownToggle, { className: "py-0 pe-0", caret: false }), (0, jsx_runtime_1.jsxs)(react_1.CDropdownMenu, { className: "pt-0", children: [(0, jsx_runtime_1.jsx)(react_1.CDropdownHeader, { className: "bg-body-secondary fw-semibold mb-2", children: "Account" }), (0, jsx_runtime_1.jsxs)(react_1.CDropdownItem, { href: "#", children: [(0, jsx_runtime_1.jsx)(icons_react_1.default, { icon: icons_1.cilBell, className: "me-2" }), "Updates", (0, jsx_runtime_1.jsx)(react_1.CBadge, { color: "info", className: "ms-2", children: "42" })] }), (0, jsx_runtime_1.jsxs)(react_1.CDropdownItem, { href: "#", children: [(0, jsx_runtime_1.jsx)(icons_react_1.default, { icon: icons_1.cilEnvelopeOpen, className: "me-2" }), "Messages", (0, jsx_runtime_1.jsx)(react_1.CBadge, { color: "success", className: "ms-2", children: "42" })] }), (0, jsx_runtime_1.jsxs)(react_1.CDropdownItem, { href: "#", children: [(0, jsx_runtime_1.jsx)(icons_react_1.default, { icon: icons_1.cilTask, className: "me-2" }), "Tasks", (0, jsx_runtime_1.jsx)(react_1.CBadge, { color: "danger", className: "ms-2", children: "42" })] }), (0, jsx_runtime_1.jsxs)(react_1.CDropdownItem, { href: "#", children: [(0, jsx_runtime_1.jsx)(icons_react_1.default, { icon: icons_1.cilCommentSquare, className: "me-2" }), "Comments", (0, jsx_runtime_1.jsx)(react_1.CBadge, { color: "warning", className: "ms-2", children: "42" })] }), (0, jsx_runtime_1.jsx)(react_1.CDropdownHeader, { className: "bg-body-secondary fw-semibold my-2", children: "Settings" }), (0, jsx_runtime_1.jsxs)(react_1.CDropdownItem, { href: "#", children: [(0, jsx_runtime_1.jsx)(icons_react_1.default, { icon: icons_1.cilUser, className: "me-2" }), "Profile"] }), (0, jsx_runtime_1.jsxs)(react_1.CDropdownItem, { href: "#", children: [(0, jsx_runtime_1.jsx)(icons_react_1.default, { icon: icons_1.cilSettings, className: "me-2" }), "Settings"] }), (0, jsx_runtime_1.jsxs)(react_1.CDropdownItem, { href: "#", children: [(0, jsx_runtime_1.jsx)(icons_react_1.default, { icon: icons_1.cilCreditCard, className: "me-2" }), "Payments", (0, jsx_runtime_1.jsx)(react_1.CBadge, { color: "secondary", className: "ms-2", children: "42" })] }), (0, jsx_runtime_1.jsxs)(react_1.CDropdownItem, { href: "#", children: [(0, jsx_runtime_1.jsx)(icons_react_1.default, { icon: icons_1.cilFile, className: "me-2" }), "Projects", (0, jsx_runtime_1.jsx)(react_1.CBadge, { color: "primary", className: "ms-2", children: "42" })] }), (0, jsx_runtime_1.jsx)(react_1.CDropdownDivider, {}), (0, jsx_runtime_1.jsxs)(react_1.CDropdownItem, { href: "#", children: [(0, jsx_runtime_1.jsx)(icons_react_1.default, { icon: icons_1.cilLockLocked, className: "me-2" }), "Lock Account"] })] })] }));
};
exports.default = AppHeaderDropdown;
