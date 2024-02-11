"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListViewTable = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Box_1 = __importDefault(require("@mui/material/Box"));
const x_data_grid_1 = require("@mui/x-data-grid");
const material_1 = require("@mui/material");
const ListViewHeader_1 = require("../ListViewHeader");
const Paper_1 = __importDefault(require("@mui/material/Paper"));
const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'name',
        headerName: 'Name',
        width: 160,
        editable: true,
    },
    {
        field: 'cpuUsage',
        headerName: 'Cpu Usage',
        width: 130,
        editable: true,
    },
    {
        field: 'cpuUsagePct',
        headerName: 'CPU Usage (%)',
        type: 'number',
        width: 130,
        editable: true,
        valueGetter: (params) => {
            return params.value.toFixed(2);
        },
    },
    {
        field: 'memUsage',
        headerName: 'memUsage',
        type: 'number',
        width: 130,
        editable: true,
    },
    {
        field: 'memUsagePct',
        headerName: 'Mem Usage (%)',
        type: 'number',
        width: 130,
        editable: true,
        valueGetter: (params) => {
            return params.value.toFixed(2);
        },
    },
];
const ListViewTable = ({ metricsObject }) => {
    const metricsData = metricsObject;
    const theme = (0, material_1.useTheme)();
    if (metricsData) {
        metricsData.map((elm, idx) => {
            return (elm.id = idx);
        });
    }
    if (!metricsData)
        return (0, jsx_runtime_1.jsx)("h1", { children: "Loading..." });
    return ((0, jsx_runtime_1.jsxs)(Box_1.default, { children: [(0, jsx_runtime_1.jsx)(ListViewHeader_1.ListViewHeader, { title: metricsData[0].type }), (0, jsx_runtime_1.jsx)(Paper_1.default, { elevation: 5, children: (0, jsx_runtime_1.jsx)(x_data_grid_1.DataGrid, { rows: metricsData, columns: columns, initialState: {
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
exports.ListViewTable = ListViewTable;
