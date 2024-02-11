"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollapsiblePanel = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const Accordion_1 = __importDefault(require("@mui/material/Accordion"));
const AccordionDetails_1 = __importDefault(require("@mui/material/AccordionDetails"));
const ExpandMore_1 = __importDefault(require("@mui/icons-material/ExpandMore"));
const ArrowForwardIosSharp_1 = __importDefault(require("@mui/icons-material/ArrowForwardIosSharp"));
const AccordionSummary_1 = __importDefault(require("@mui/material/AccordionSummary"));
const styles_1 = require("@mui/material/styles");
const AccordionSummary = (0, styles_1.styled)((props) => ((0, jsx_runtime_1.jsx)(AccordionSummary_1.default, Object.assign({ expandIcon: (0, jsx_runtime_1.jsx)(ArrowForwardIosSharp_1.default, { sx: { fontSize: "0.9rem" } }) }, props))))(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark"
        ? "rgba(26, 10, 10, 0.05)"
        : "rgba(0, 0, 0, .03)",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
        transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
        marginLeft: theme.spacing(1),
    },
}));
const CollapsiblePanel = ({ title, children }) => {
    return ((0, jsx_runtime_1.jsx)(material_1.Box, { children: (0, jsx_runtime_1.jsxs)(Accordion_1.default, { sx: {
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }, children: [(0, jsx_runtime_1.jsx)(AccordionSummary, { expandIcon: (0, jsx_runtime_1.jsx)(ExpandMore_1.default, {}), "aria-controls": title.replace(/\s+/g, "") + "-content", id: title.replace(/\s+/g, "") + "-header", sx: {
                        fontSize: "1.15rem",
                        "& .MuiAccordionSummary.Mui-expanded": {
                            margin: "20px 0 0px 20px",
                        },
                    }, children: title }), (0, jsx_runtime_1.jsx)(AccordionDetails_1.default, { sx: {
                        display: "grid",
                        // gridTemplateColumns: '1fr 1fr',
                        gridTemplateRows: "auto 1fr",
                        gap: "1rem",
                    }, children: children })] }) }));
};
exports.CollapsiblePanel = CollapsiblePanel;
