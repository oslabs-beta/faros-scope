import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useTheme } from '@mui/material';
import { ListViewHeader } from '../ListViewHeader';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';

// Types
type usageData = {
  name: string;
  CPU: number;
  MEM: number;
  id?: number;
};

type cUsageMetrics = {
  [key: string]: any;
};

const columns: GridColDef[] = [
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
export const NameSpaceTable = ({ cUsageMetrics }: cUsageMetrics) => {
  const theme = useTheme();
  // console.log('INSIDE NAMESPACE', cUsageMetrics);
  if (!cUsageMetrics) return <h1>Loading...</h1>;

  return (
    <Box>
      <ListViewHeader title={cUsageMetrics[0].type} />
      <Paper elevation={5}>
        {/* <Box
          sx={{
            height: '100%',
            width: '100%',
            border: 2,
            borderRadius: '.55em',
            // p: 10,
            // BELOW IS WHERE WE CAN PROVIDE BACKGROUND TO BOX
          }}
        > */}

        <DataGrid
          rows={cUsageMetrics}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
          sx={{
            fontSize: 16,
            '& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows, & .MuiTablePagination-select, & .MuiInputBase-input':
              {
                // Targeting specific elements within the pagination for finer control
                fontSize: '1rem', // Adjust the font size
                borderRadius: '.55em',
              },
          }}
          // sx={{
          //   fontSize: 16,
          // }}
        />
        {/* </Box> */}
      </Paper>
    </Box>
  );
};
