"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NameSpaceTable = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Box_1 = __importDefault(require("@mui/material/Box"));
const x_data_grid_1 = require("@mui/x-data-grid");
const material_1 = require("@mui/material");
const ListViewHeader_1 = require("../ListViewHeader");
const Paper_1 = __importDefault(require("@mui/material/Paper"));
const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    {
        field: 'name',
        headerName: 'Name',
        width: 160,
        flex: 1,
        editable: true,
    },
    {
        field: 'CPU',
        headerName: 'CPU (%)',
        width: 130,
        flex: 1,
        editable: true,
        valueGetter: (params) => {
            return params.value.toFixed(5);
        },
    },
    {
        field: 'MEM',
        headerName: 'MEM (bytes)',
        type: 'number',
        width: 130,
        flex: 1,
        editable: true,
        // valueGetter: (params) => {
        //   return params.value.toFixed(2);
        // },
    },
];
//export const ListViewTable = ({ metricsObject }: ListViewProps) => {
const NameSpaceTable = ({ cUsageMetrics }) => {
    const theme = (0, material_1.useTheme)();
    // console.log('INSIDE NAMESPACE', cUsageMetrics);
    if (!cUsageMetrics)
        return (0, jsx_runtime_1.jsx)("h1", { children: "Loading..." });
    return ((0, jsx_runtime_1.jsxs)(Box_1.default, { children: [(0, jsx_runtime_1.jsx)(ListViewHeader_1.ListViewHeader, { title: cUsageMetrics[0].type }), (0, jsx_runtime_1.jsx)(Paper_1.default, { elevation: 5, children: (0, jsx_runtime_1.jsx)(x_data_grid_1.DataGrid, { rows: cUsageMetrics, columns: columns, initialState: {
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }, pageSizeOptions: [5], checkboxSelection: true, disableRowSelectionOnClick: true, sx: {
                        fontSize: 16,
                        '& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows, & .MuiTablePagination-select, & .MuiInputBase-input': {
                            // Targeting specific elements within the pagination for finer control
                            fontSize: '1rem',
                            borderRadius: '.55em',
                        },
                    } }) })] }));
};
exports.NameSpaceTable = NameSpaceTable;
