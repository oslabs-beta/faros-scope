"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const material_1 = require("@mui/material");
const Box_1 = __importDefault(require("@mui/material/Box"));
const Table_1 = __importDefault(require("@mui/material/Table"));
const TableBody_1 = __importDefault(require("@mui/material/TableBody"));
const TableCell_1 = __importDefault(require("@mui/material/TableCell"));
const TableContainer_1 = __importDefault(require("@mui/material/TableContainer"));
const TableFooter_1 = __importDefault(require("@mui/material/TableFooter"));
const TablePagination_1 = __importDefault(require("@mui/material/TablePagination"));
const TableRow_1 = __importDefault(require("@mui/material/TableRow"));
const TableHead_1 = __importDefault(require("@mui/material/TableHead"));
const IconButton_1 = __importDefault(require("@mui/material/IconButton"));
const FirstPage_1 = __importDefault(require("@mui/icons-material/FirstPage"));
const KeyboardArrowLeft_1 = __importDefault(require("@mui/icons-material/KeyboardArrowLeft"));
const KeyboardArrowRight_1 = __importDefault(require("@mui/icons-material/KeyboardArrowRight"));
const LastPage_1 = __importDefault(require("@mui/icons-material/LastPage"));
const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    {
        id: 'CPU Usage (%)',
        label: 'CPU Usage (%)',
        align: 'right',
        minWidth: 100,
    },
    {
        id: 'CPU Usage',
        label: 'CPU Usage',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'Mem Usage (%)',
        label: 'Mem Usage (%)',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'Mem Usage',
        label: 'Mem Usage',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
];
function TablePaginationActions(props) {
    const theme = (0, material_1.useTheme)();
    const { count, page, rowsPerPage, onPageChange } = props;
    const handleFirstPageButtonClick = (event) => {
        onPageChange(event, 0);
    };
    const handleBackButtonClick = (event) => {
        onPageChange(event, page - 1);
    };
    const handleNextButtonClick = (event) => {
        onPageChange(event, page + 1);
    };
    const handleLastPageButtonClick = (event) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
    return ((0, jsx_runtime_1.jsxs)(Box_1.default, { sx: { flexShrink: 0, ml: 2.5 }, children: [(0, jsx_runtime_1.jsx)(IconButton_1.default, { onClick: handleFirstPageButtonClick, disabled: page === 0, "aria-label": "first page", children: theme.direction === 'rtl' ? (0, jsx_runtime_1.jsx)(LastPage_1.default, {}) : (0, jsx_runtime_1.jsx)(FirstPage_1.default, {}) }), (0, jsx_runtime_1.jsx)(IconButton_1.default, { onClick: handleBackButtonClick, disabled: page === 0, "aria-label": "previous page", children: theme.direction === 'rtl' ? ((0, jsx_runtime_1.jsx)(KeyboardArrowRight_1.default, {})) : ((0, jsx_runtime_1.jsx)(KeyboardArrowLeft_1.default, {})) }), (0, jsx_runtime_1.jsx)(IconButton_1.default, { onClick: handleNextButtonClick, disabled: page >= Math.ceil(count / rowsPerPage) - 1, "aria-label": "next page", children: theme.direction === 'rtl' ? ((0, jsx_runtime_1.jsx)(KeyboardArrowLeft_1.default, {})) : ((0, jsx_runtime_1.jsx)(KeyboardArrowRight_1.default, {})) }), (0, jsx_runtime_1.jsx)(IconButton_1.default, { onClick: handleLastPageButtonClick, disabled: page >= Math.ceil(count / rowsPerPage) - 1, "aria-label": "last page", children: theme.direction === 'rtl' ? (0, jsx_runtime_1.jsx)(FirstPage_1.default, {}) : (0, jsx_runtime_1.jsx)(LastPage_1.default, {}) })] }));
}
const ListView = ({ metricsObject }) => {
    var _a, _b;
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const dataObj = metricsObject;
    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - dataObj.length) : 0;
    const handleChangePage = (_event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    return ((0, jsx_runtime_1.jsx)("div", { children: dataObj ? ((0, jsx_runtime_1.jsx)(TableContainer_1.default, { children: (0, jsx_runtime_1.jsxs)(Table_1.default, { sx: { minWidth: 500, bgcolor: 'secondary.main' }, "aria-label": "custom pagination table", children: [(0, jsx_runtime_1.jsxs)(TableHead_1.default, { children: [(0, jsx_runtime_1.jsx)(TableRow_1.default, { children: (0, jsx_runtime_1.jsx)(TableCell_1.default, { sx: { fontSize: 20, fontWeight: 'fontWeightBold' }, children: (_a = dataObj[0]) === null || _a === void 0 ? void 0 : _a.type[0].toUpperCase().concat(dataObj[0].type.slice(1)) }) }), (0, jsx_runtime_1.jsx)(TableRow_1.default, { sx: { bgcolor: 'primary.light' }, children: columns.map((column) => ((0, jsx_runtime_1.jsx)(TableCell_1.default, { align: column.align, style: { minWidth: column.minWidth }, children: column.label }, column.id))) })] }), (0, jsx_runtime_1.jsxs)(TableBody_1.default, { children: [(_b = (rowsPerPage > 0
                                ? dataObj.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                : dataObj)) === null || _b === void 0 ? void 0 : _b.map((row) => {
                                var _a, _b;
                                return ((0, jsx_runtime_1.jsxs)(TableRow_1.default, { children: [(0, jsx_runtime_1.jsx)(TableCell_1.default, { component: "th", scope: "row", children: row.name }), (0, jsx_runtime_1.jsx)(TableCell_1.default, { style: { width: 160 }, align: "right", children: `${(_a = row.cpuUsagePct) === null || _a === void 0 ? void 0 : _a.toFixed(2)}%` }), (0, jsx_runtime_1.jsx)(TableCell_1.default, { style: { width: 160 }, align: "right", children: `${row.cpuUsage}` }), (0, jsx_runtime_1.jsx)(TableCell_1.default, { style: { width: 160 }, align: "right", children: `${(_b = row.memUsagePct) === null || _b === void 0 ? void 0 : _b.toFixed(2)}%` }), (0, jsx_runtime_1.jsx)(TableCell_1.default, { style: { width: 160 }, align: "right", children: `${row.memUsage}` })] }, row.name));
                            }), emptyRows > 0 && ((0, jsx_runtime_1.jsx)(TableRow_1.default, { style: { height: 53 * emptyRows }, children: (0, jsx_runtime_1.jsx)(TableCell_1.default, { colSpan: 6 }) }))] }), (0, jsx_runtime_1.jsx)(TableFooter_1.default, { children: (0, jsx_runtime_1.jsx)(TableRow_1.default, { children: (0, jsx_runtime_1.jsx)(TablePagination_1.default, { rowsPerPageOptions: [5, 10, 25, { label: 'All', value: -1 }], colSpan: 3, count: dataObj === null || dataObj === void 0 ? void 0 : dataObj.length, rowsPerPage: rowsPerPage, page: page, SelectProps: {
                                    inputProps: {
                                        'aria-label': 'rows per page',
                                    },
                                    native: true,
                                }, onPageChange: handleChangePage, onRowsPerPageChange: handleChangeRowsPerPage, ActionsComponent: TablePaginationActions }) }) })] }) })) : ((0, jsx_runtime_1.jsx)("p", { children: "Loading..." })) }));
};
exports.default = ListView;
