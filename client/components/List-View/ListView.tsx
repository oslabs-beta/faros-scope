// ************** Non-pagination option**************
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter';
// import TablePagination from '@mui/material/TablePagination';
import './ListView.scss';

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

export const ListView = ({ metricsObject }: ListViewProps) => {
  const dataObj = metricsObject;
  console.log('LOOK HERE BOY --->', dataObj);

  return (
    <div>
      <TableContainer
        component="div"
        style={{ maxHeight: 300, overflowY: 'auto', borderRadius: 9 }}
      >
        <Table
          sx={{
            minWidth: 650,
            bgcolor: 'secondary.main',
          }}
          aria-label="custom pagination table"
        >
          <TableHead>
            <TableRow
              sx={{
                bgcolor: 'primary.light',
                color: 'primary.main',
                p: 24,
              }}
            >
              <TableCell sx={{ fontSize: 14 }}>Name</TableCell>
              <TableCell sx={{ fontSize: 14 }} align="right">
                CPU
              </TableCell>
              <TableCell sx={{ fontSize: 14 }} align="right">
                Memory
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataObj?.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 1 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">
                  {`${row.cpuUsagePct?.toFixed(2)}%`}
                </TableCell>
                <TableCell align="right">
                  {`${row.memUsagePct?.toFixed(2)}%`}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              {/* <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={3}
                count={rows.length}
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
              /> */}
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </div>
  );
};
