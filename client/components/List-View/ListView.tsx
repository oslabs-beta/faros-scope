import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1b1b1b',
    },
    secondary: {
      main: '#ffffff',
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
    },
  },
});

// interface for incoming PODS Data
// interface podDataLV {
//   podNames: [];
// }

// TEMP STOR for incoming PROPS syntax
// { podNames }: podDataLV

export const ListView = ({ organizedData }) => {
  const dataObj = organizedData;

  return (
    <ThemeProvider theme={theme}>
      <TableContainer
        component="div"
        style={{ maxHeight: 300, overflowY: 'auto' }}
      >
        <Table
          sx={{
            minWidth: 650,
            bgcolor: 'secondary.main',
            color: 'primary.main',
          }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow
              sx={{
                '& > *': { bgcolor: 'secondary.main', color: 'primary.main' },
              }}
            >
              <TableCell>Name</TableCell>
              <TableCell align="right">CPU</TableCell>
              <TableCell align="right">Memory</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {organizedData?.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 1 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">
                  {`${row.metrics.cpuUsagePct?.toFixed(2)}%`}
                </TableCell>
                <TableCell align="right">
                  {`${row.metrics.memUsagePct?.toFixed(2)}%`}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
};
