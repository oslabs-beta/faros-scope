import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useCustomTheme } from '../../hooks/useCustomTheme';

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
    width: 110,
    editable: true,
  },
  {
    field: 'cpuUsagePct',
    headerName: 'cpuUsagePct',
    type: 'number',
    width: 110,
    editable: true,
    valueGetter: (params) => {
      return params.value.toFixed(2);
    },
  },
  {
    field: 'memUsage',
    headerName: 'memUsage',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'memUsagePct',
    headerName: 'memUsagePct',
    type: 'number',
    width: 110,
    editable: true,
    valueGetter: (params) => {
      return params.value.toFixed(2);
    },
  },
];

export const ListView = ({ metricsObject }: ListViewProps) => {
  const metricsData = metricsObject;
  const { theme: customTheme } = useCustomTheme();
  let result = [];
  console.log(metricsData);

  if (metricsData) {
    metricsData.map((elm, idx) => {
      return (elm.id = idx);
    });
  }

  if (!metricsData) return <h1>Loading...</h1>;

  return (
    <Box sx={{ height: 400, width: '100%' }}>
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
      />
    </Box>
  );
};

// STICK TABLE VIEW
// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import { useCustomTheme } from '../../hooks/useCustomTheme';
// import { Box } from '@mui/material';

// // Types
// type MetricsItem = {
//   name: string;
//   cpuUsage: number;
//   cpuUsagePct: number;
//   memUsage: number;
//   memUsagePct: number;
//   type: string;
// };

// type ListViewProps = {
//   metricsObject: MetricsItem[];
// };

// interface Column {
//   id: 'name' | 'cpuUsagePct' | 'cpuUsage' | 'memUsage' | 'memUsagePct';
//   label: string;
//   minWidth?: number;
//   align?: 'right';
//   format?: (value: number) => string;
// }

// const columns: readonly Column[] = [
//   { id: 'name', label: 'Name', minWidth: 170 },
//   {
//     id: 'cpuUsagePct',
//     label: 'CPU Usage (%)',
//     align: 'right',
//     minWidth: 100,
//     format: (value: number) => value.toFixed(2),
//   },
//   {
//     id: 'cpuUsage',
//     label: 'Cpu Usage',
//     minWidth: 170,
//     align: 'right',
//     format: (value: number) => value.toLocaleString('en-US'),
//   },
//   {
//     id: 'memUsagePct',
//     label: 'Mem Usage (%)',
//     minWidth: 170,
//     align: 'right',
//     format: (value: number) => value.toFixed(2),
//   },
//   {
//     id: 'memUsage',
//     label: 'Mem Usage',
//     minWidth: 170,
//     align: 'right',
//     format: (value: number) => value.toLocaleString('en-US'),
//   },
// ];

// export const ListView = ({ metricsObject }: ListViewProps) => {
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);
//   const dataObj = metricsObject;
//   const { theme: customTheme } = useCustomTheme();

//   const handleChangePage = (event: unknown, newPage: number) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (
//     event: React.ChangeEvent<HTMLInputElement>,
//   ) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   if (!dataObj) return <p>Loading...</p>;

//   return (
//     <Box>
//       <h2>
//         {dataObj[0]?.type[0].toUpperCase().concat(dataObj[0].type.slice(1))}
//       </h2>
//       <TableContainer
//         sx={{
//           maxHeight: 440,
//           bgcolor: customTheme === 'dark' ? 'black' : '#E0E0E0',
//           borderRadius: '0.55rem',
//         }}
//       >
//         <Table stickyHeader aria-label="sticky table">
//           <TableHead>
//             <TableRow>
//               {/* <TableCell
//                 sx={{
//                   fontSize: 20,
//                   fontWeight: 'fontWeightBold',
//                   color: customTheme === 'dark' ? 'white' : 'black',
//                   bgcolor: customTheme === 'dark' ? 'black' : '#E0E0E0',
//                 }}
//               >
//                 {dataObj[0]?.type[0]
//                   .toUpperCase()
//                   .concat(dataObj[0].type.slice(1))}
//               </TableCell> */}
//             </TableRow>
//             <TableRow>
//               {columns.map((column) => (
//                 <TableCell
//                   key={column.id}
//                   align={column.align}
//                   style={{ minWidth: column.minWidth }}
//                   sx={{
//                     color: customTheme === 'dark' ? 'black' : 'white',
//                     bgcolor: customTheme === 'dark' ? '#E0E0E0' : '#A0A0A0',
//                   }}
//                 >
//                   {column.label}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {dataObj
//               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               .map((row) => {
//                 return (
//                   <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
//                     {columns.map((column) => {
//                       const value = row[column.id];
//                       const cpu = row.cpuUsage;
//                       return (
//                         <TableCell
//                           key={column.id}
//                           align={column.align}
//                           sx={{
//                             color: customTheme === 'dark' ? 'white' : 'black',
//                           }}
//                         >
//                           {column.format && typeof value === 'number'
//                             ? column.format(value)
//                             : value}
//                         </TableCell>
//                       );
//                     })}
//                   </TableRow>
//                 );
//               })}
//           </TableBody>
//         </Table>
//         <TablePagination
//           rowsPerPageOptions={[5, 10, 20]}
//           component="div"
//           count={dataObj?.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onPageChange={handleChangePage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//           sx={{
//             bgcolor: customTheme === 'dark' ? 'black' : '#E0E0E0',
//             color: customTheme === 'dark' ? 'white' : 'black',
//           }}
//         />
//       </TableContainer>
//     </Box>
//   );
// };

// PREVIOUS TABLE VIEW

// import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableFooter from '@mui/material/TableFooter';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import TableHead from '@mui/material/TableHead';
// import IconButton from '@mui/material/IconButton';
// import FirstPageIcon from '@mui/icons-material/FirstPage';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// import LastPageIcon from '@mui/icons-material/LastPage';
// import { useCustomTheme } from '../../hooks/useCustomTheme';

// //type MetricsItem = {
// //   name: string;
// //   cpuUsage: number;
// //   cpuUsagePct: number;
// //   memUsage: number;
// //   memUsagePct: number;
// //   type: string;
// // };

// interface Column {
//   id: 'name' | 'CPU Usage (%)' | 'CPU Usage' | 'Mem Usage' | 'Mem Usage (%)';
//   label: string;
//   minWidth?: number;
//   align?: 'right';
//   format?: (value: number) => string;
// }

// const columns: readonly Column[] = [
//   { id: 'name', label: 'Name', minWidth: 170 },
//   {
//     id: 'CPU Usage (%)',
//     label: 'CPU Usage (%)',
//     align: 'right',
//     minWidth: 100,
//   },
//   {
//     id: 'CPU Usage',
//     label: 'CPU Usage',
//     minWidth: 170,
//     align: 'right',
//     format: (value: number) => value.toLocaleString('en-US'),
//   },
//   {
//     id: 'Mem Usage (%)',
//     label: 'Mem Usage (%)',
//     minWidth: 170,
//     align: 'right',
//     format: (value: number) => value.toFixed(2),
//   },
//   {
//     id: 'Mem Usage',
//     label: 'Mem Usage',
//     minWidth: 170,
//     align: 'right',
//     format: (value: number) => value.toLocaleString('en-US'),
//   },
// ];

// interface TablePaginationActionsProps {
//   count: number;
//   page: number;
//   rowsPerPage: number;
//   onPageChange: (
//     event: React.MouseEvent<HTMLButtonElement>,
//     newPage: number,
//   ) => void;
// }

// function TablePaginationActions(props: TablePaginationActionsProps) {
//   const theme = useTheme();

//   const { count, page, rowsPerPage, onPageChange } = props;

//   const handleFirstPageButtonClick = (
//     event: React.MouseEvent<HTMLButtonElement>,
//   ) => {
//     onPageChange(event, 0);
//   };

//   const handleBackButtonClick = (
//     event: React.MouseEvent<HTMLButtonElement>,
//   ) => {
//     onPageChange(event, page - 1);
//   };

//   const handleNextButtonClick = (
//     event: React.MouseEvent<HTMLButtonElement>,
//   ) => {
//     onPageChange(event, page + 1);
//   };

//   const handleLastPageButtonClick = (
//     event: React.MouseEvent<HTMLButtonElement>,
//   ) => {
//     onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
//   };

//   return (
//     <Box sx={{ flexShrink: 0, ml: 2.5 }}>
//       <IconButton
//         onClick={handleFirstPageButtonClick}
//         disabled={page === 0}
//         aria-label="first page"
//       >
//         {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
//       </IconButton>
//       <IconButton
//         onClick={handleBackButtonClick}
//         disabled={page === 0}
//         aria-label="previous page"
//       >
//         {theme.direction === 'rtl' ? (
//           <KeyboardArrowRight />
//         ) : (
//           <KeyboardArrowLeft />
//         )}
//       </IconButton>
//       <IconButton
//         onClick={handleNextButtonClick}
//         disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//         aria-label="next page"
//       >
//         {theme.direction === 'rtl' ? (
//           <KeyboardArrowLeft />
//         ) : (
//           <KeyboardArrowRight />
//         )}
//       </IconButton>
//       <IconButton
//         onClick={handleLastPageButtonClick}
//         disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//         aria-label="last page"
//       >
//         {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
//       </IconButton>
//     </Box>
//   );
// }

// //*** Data Types  ***/
// type MetricsItem = {
//   name: string;
//   cpuUsage: number;
//   cpuUsagePct: number;
//   memUsage: number;
//   memUsagePct: number;
//   type: string;
// };

// type ListViewProps = {
//   metricsObject: MetricsItem[];
// };

// export const ListView = ({ metricsObject }: ListViewProps) => {
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);
//   const dataObj = metricsObject;
//   const { theme: customTheme } = useCustomTheme();

//   // Avoid a layout jump when reaching the last page with empty rows.
//   const emptyRows =
//     page > 0 ? Math.max(0, (1 + page) * rowsPerPage - dataObj.length) : 0;

//   const handleChangePage = (
//     event: React.MouseEvent<HTMLButtonElement> | null,
//     newPage: number,
//   ) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (
//     event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//   ) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   return (
//     <>
//       {dataObj ? (
//         <TableContainer>
//           <Table
//             sx={{
//               minWidth: 500,
//               bgcolor: customTheme === 'dark' ? 'black' : 'white',
//               color: customTheme === 'dark' ? 'white' : 'black',
//               borderRadius: '0.55rem',
//             }}
//             stickyHeader
//             aria-label="sticky table"
//           >
//             <TableHead>
//               <TableRow>
//                 <TableCell
//                   sx={{
//                     fontSize: 20,
//                     fontWeight: 'fontWeightBold',
//                     color: customTheme === 'dark' ? 'white' : 'black',
//                   }}
//                 >
//                   {dataObj[0]?.type[0]
//                     .toUpperCase()
//                     .concat(dataObj[0].type.slice(1))}
//                 </TableCell>
//               </TableRow>
//               <TableRow
//                 sx={{
//                   bgcolor: customTheme === 'dark' ? '#41474a' : 'lightgrey',
//                 }}
//               >
//                 {columns.map((column) => (
//                   <TableCell
//                     key={column.id}
//                     align={column.align}
//                     style={{ minWidth: column.minWidth }}
//                   >
//                     {column.label}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {(rowsPerPage > 0
//                 ? dataObj.slice(
//                     page * rowsPerPage,
//                     page * rowsPerPage + rowsPerPage,
//                   )
//                 : dataObj
//               )?.map((row) => (
//                 <TableRow key={row.name}>
//                   <TableCell
//                     component="th"
//                     scope="row"
//                     sx={{ color: customTheme === 'dark' ? 'white' : 'black' }}
//                   >
//                     {row.name}
//                   </TableCell>
//                   <TableCell
//                     style={{ width: 160 }}
//                     align="right"
//                     sx={{ color: customTheme === 'dark' ? 'white' : 'black' }}
//                   >
//                     {`${row.cpuUsagePct?.toFixed(2)}%`}
//                   </TableCell>
//                   <TableCell
//                     style={{ width: 160 }}
//                     align="right"
//                     sx={{ color: customTheme === 'dark' ? 'white' : 'black' }}
//                   >
//                     {`${row.cpuUsage}`}
//                   </TableCell>
//                   <TableCell
//                     style={{ width: 160 }}
//                     align="right"
//                     sx={{ color: customTheme === 'dark' ? 'white' : 'black' }}
//                   >
//                     {`${row.memUsagePct?.toFixed(2)}%`}
//                   </TableCell>
//                   <TableCell
//                     style={{ width: 160 }}
//                     align="right"
//                     sx={{ color: customTheme === 'dark' ? 'white' : 'black' }}
//                   >
//                     {`${row.memUsage}`}
//                   </TableCell>
//                 </TableRow>
//               ))}
//               {emptyRows > 0 && (
//                 <TableRow style={{ height: 53 * emptyRows }}>
//                   <TableCell colSpan={6} />
//                 </TableRow>
//               )}
//             </TableBody>
//             <TableFooter>
//               <TableRow>
//                 <TablePagination
//                   rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
//                   colSpan={3}
//                   count={dataObj?.length}
//                   rowsPerPage={rowsPerPage}
//                   page={page}
//                   SelectProps={{
//                     inputProps: {
//                       'aria-label': 'rows per page',
//                     },
//                     native: true,
//                   }}
//                   onPageChange={handleChangePage}
//                   onRowsPerPageChange={handleChangeRowsPerPage}
//                   ActionsComponent={TablePaginationActions}
//                   sx={{ color: customTheme === 'dark' ? 'white' : 'black' }}
//                 />
//               </TableRow>
//             </TableFooter>
//           </Table>
//         </TableContainer>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </>
//   );
// };
