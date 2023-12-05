import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { MonthlyRecord } from './models/monthlyRecord';
import { Grid } from '@mui/material';


interface Props {
  results: MonthlyRecord[];
}

const Results = ({results}:Props) =>  {
  return (
    
      <Grid item display='flex' justifyContent='center' width='100%'>
        <TableContainer component={Paper}>
          <Table aria-label="tax report">
            <TableHead>
              <TableRow>
                <TableCell>Month</TableCell>
                <TableCell align="right">Salary Received</TableCell>
                <TableCell align="right">Tax Due</TableCell>
                <TableCell align="right">Net Salary</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {results.map((row) => (
                <TableRow
                  key={row.month}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.month}
                  </TableCell>
                  <TableCell align="right">{row.currentMonthSalary}</TableCell>
                  <TableCell align="right">{row.taxDueThisMonth}</TableCell>
                  <TableCell align="right">{row.netSalaryThisMonth}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
   
  );
}

export default Results;