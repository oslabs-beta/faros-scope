import { DataGrid, GridToolbar, GridColDef } from '@mui/x-data-grid';
import { Typography, Box } from '@mui/material';

interface Props {
  title: string;
  columns: GridColDef[];
  isLoading: boolean;
  data: [string: any][];
}

const DataGridWithHeader = ({ title, columns, data, isLoading }: Props) => {
  return (
    <Box
      sx={{
        border: '1px solid #2B2F3B',
        borderRadius: '4px',
        display: 'flex',
        flexDirection: 'column',
        '& .MuiDataGrid-root': {
          border: 'none',
          backgroundColor: 'rgb(42, 43, 46)'
        },
        '& .MuiDataGrid-toolbarContainer': {
          borderTop: '1px solid #e0e0e0',
          borderBottom: '1px solid #e0e0e0',
          height: '40px',
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
          fontWeight: 'bold',
          alignItems: 'center',
          marginLeft: '1rem',
          padding: '1.5rem',
          fontSize: '1.5rem',
          height: '36px',
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
        sx={{
          minHeight: '400px',
          maxHeight: '400px',
        }}
        columnHeaderHeight={40}

        // initialState={{
        //   pagination: {
        //     paginationModel: {
        //           pageSize: 7,
        //         },
        //     },
        // }}
        // pageSizeOptions:{[5, 10]}
        //   paginationModel={{pageSize: 5, page: 0}}
        //   rowsPerPageOptions={[5]}
      />
    </Box>
  );
};

export default DataGridWithHeader;
