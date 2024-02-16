"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClusterView = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const Accordion_1 = __importDefault(require("@mui/material/Accordion"));
const AccordionDetails_1 = __importDefault(require("@mui/material/AccordionDetails"));
const AccordionSummary_1 = __importDefault(require("@mui/material/AccordionSummary"));
const ExpandMore_1 = __importDefault(require("@mui/icons-material/ExpandMore"));
const VISIBLE_FIELDS = ['name', 'rating', 'country', 'dateCreated', 'isAdmin'];
const ClusterView = () => {
    return ((0, jsx_runtime_1.jsx)("div", { className: "cluster-view", children: (0, jsx_runtime_1.jsx)(material_1.Box, { children: (0, jsx_runtime_1.jsxs)(Accordion_1.default, { children: [(0, jsx_runtime_1.jsx)(AccordionSummary_1.default, { expandIcon: (0, jsx_runtime_1.jsx)(ExpandMore_1.default, {}), "aria-controls": "panel1-content", id: "panel1-header", children: "Accodion1" }), (0, jsx_runtime_1.jsx)(AccordionDetails_1.default, {})] }) }) }));
};
exports.ClusterView = ClusterView;
