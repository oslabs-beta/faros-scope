import { DataGrid, GridToolbar, GridColDef } from '@mui/x-data-grid';
import { Typography, Box } from '@mui/material';

interface Props {
    title: string,
    columns: GridColDef[],
    isLoading: boolean,
}

const DataGridWithHeader = ({ title, columns, data, isLoading }: Props) => {
  return (
    <Box
      sx={{
        border: '1px solid #e0e0e0',
        borderRadius: '4px',
        display: 'flex',
        flexDirection: 'column',
        '& .MuiDataGrid-root': {
          border: 'none',
        },
        '& .MuiDataGrid-toolbarContainer': {
          borderTop: '1px solid #e0e0e0',
          borderBottom: '1px solid #e0e0e0',
        },
        '& .MuiDataGrid-columnHeaders': {
          backgroundColor: 'lightgray',
          borderRadius: 0,
        },
        '& .MuiTablePagination-selectLabel ': {
          margin: '0',
        },
        '& .MuiTablePagination-displayedRows': {
          margin: '0',
        },
      }}
    >
      <Typography
        style={{
          display: 'flex',
          alignItems: 'center',
          paddingLeft: '1rem',
          fontSize: '1.05rem',
          height: '10%',
          textAlign: 'center',
        }}
      >
        {title}
      </Typography>
      <DataGrid
        loading={isLoading || !data}
        rows={data}
        columns={columns}
        components={{ Toolbar: GridToolbar }}
      />
    </Box>
  );
};

export default DataGridWithHeader;
