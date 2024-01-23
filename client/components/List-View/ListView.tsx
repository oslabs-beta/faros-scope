import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number,
  ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();

  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

//*** data */
type MetricsItem = {
  name: string;
  cpuUsage: number;
  cpuUsagePct: number;
  memUsage: number;
  memUsagePct: number;
  type: string;
};

type ListViewProps = {
  metricsObject: MetricsItem[];
};
// export const ListView = ({ metricsObject }: ListViewProps) => {
export const ListView = ({ metricsObject }: ListViewProps) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const dataObj = metricsObject;

  const theme = useTheme();

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - dataObj.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      {dataObj ? (
        <TableContainer>
          <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
            <TableBody>
              {(rowsPerPage > 0
                ? dataObj.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage,
                  )
                : dataObj
              )?.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                    {`${row.cpuUsagePct?.toFixed(2)}%`}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                    {`${row.memUsagePct?.toFixed(2)}%`}
                  </TableCell>
                </TableRow>
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                  colSpan={3}
                  count={dataObj?.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      'aria-label': 'rows per page',
                    },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

// // ************** Non-pagination option**************
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import TableFooter from '@mui/material/TableFooter';
// // import TablePagination from '@mui/material/TablePagination';
// import './ListView.scss';

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
//   const dataObj = metricsObject;
//   console.log('LOOK HERE BOY --->', dataObj);

//   return (
//     <div>
//       <TableContainer
//         component="div"
//         style={{ maxHeight: 300, overflowY: 'auto', borderRadius: 9 }}
//       >
//         <Table
//           sx={{
//             minWidth: 650,
//             bgcolor: 'secondary.main',
//           }}
//           aria-label="custom pagination table"
//         >
//           <TableHead>
//             <TableRow
//               sx={{
//                 bgcolor: 'primary.light',
//                 color: 'primary.main',
//                 p: 24,
//               }}
//             >
//               <TableCell sx={{ fontSize: 14 }}>Name</TableCell>
//               <TableCell sx={{ fontSize: 14 }} align="right">
//                 CPU
//               </TableCell>
//               <TableCell sx={{ fontSize: 14 }} align="right">
//                 Memory
//               </TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {dataObj?.map((row) => (
//               <TableRow
//                 key={row.name}
//                 sx={{ '&:last-child td, &:last-child th': { border: 1 } }}
//               >
//                 <TableCell component="th" scope="row">
//                   {row.name}
//                 </TableCell>
//                 <TableCell align="right">
//                   {`${row.cpuUsagePct?.toFixed(2)}%`}
//                 </TableCell>
//                 <TableCell align="right">
//                   {`${row.memUsagePct?.toFixed(2)}%`}
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//           <TableFooter>
//             <TableRow>
//               {/* <TablePagination
//                 rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
//                 colSpan={3}
//                 count={rows.length}
//                 rowsPerPage={rowsPerPage}
//                 page={page}
//                 SelectProps={{
//                   inputProps: {
//                     'aria-label': 'rows per page',
//                   },
//                   native: true,
//                 }}
//                 onPageChange={handleChangePage}
//                 onRowsPerPageChange={handleChangeRowsPerPage}
//                 ActionsComponent={TablePaginationActions}
//               /> */}
//             </TableRow>
//           </TableFooter>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };
