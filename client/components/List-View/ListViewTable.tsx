import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useTheme } from '@mui/material';
import { ListViewHeader } from '../ListViewHeader';
import Paper from '@mui/material/Paper';

// Types
type MetricsItem = {
  name: string;
  cpuUsage: number;
  cpuUsagePct: number;
  memUsage: number;
  memUsagePct: number;
  type: string;
  id?: number;
};

type ListViewProps = {
  metricsObject: MetricsItem[];
};

const columns: GridColDef[] = [
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

export const ListViewTable = ({ metricsObject }: ListViewProps) => {
  const metricsData = metricsObject;
  const theme = useTheme();
  console.log(theme);

  if (metricsData) {
    metricsData.map((elm, idx) => {
      return (elm.id = idx);
    });
  }

  if (!metricsData) return <h1>Loading...</h1>;

  return (
    <Box>
      <ListViewHeader title={metricsData[0].type} />
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
          rows={metricsData}
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
