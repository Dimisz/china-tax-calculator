import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { MonthlyRecord } from './models/monthlyRecord';
import { Grid, Typography, styled } from '@mui/material';
import { calculateTotalNetSalary, calculateTotalTaxPaid } from './helpers/calculateTax';


interface Props {
  results: MonthlyRecord[];
}

const Results = ({results}:Props) =>  {
  const TableRowStyled = styled(TableRow)`
  &:nth-of-type(odd) {
    background-color: #DDDDDD;
  }
  &:nth-of-type(even) {
    background-color: #999999;
  }
`;
if(results.length === 0) return;

  return (
    
      <Grid item display='flex' justifyContent='center' width='100%' xs={12} >
        <TableContainer component={Paper}>
          <Table stickyHeader aria-label="tax report" >
            <TableHead>
              <TableRowStyled>
                <TableCell align="justify"><Typography variant='body2' fontWeight={600}>Month</Typography></TableCell>
                <TableCell align="justify"><Typography variant='body2' fontWeight={600}>Salary Received</Typography></TableCell>
                <TableCell align="justify"><Typography variant='body2' fontWeight={600}>Nontaxable Amount</Typography></TableCell>

                <TableCell align="justify"><Typography variant='body2' fontWeight={600}>Accumulated Income</Typography></TableCell>
                <TableCell align="justify"><Typography variant='body2' fontWeight={600}>Accumulated Nontaxable Amount</Typography></TableCell>
                <TableCell align="justify"><Typography variant='body2' fontWeight={600}>Taxable amount</Typography></TableCell>
                <TableCell align="justify"><Typography variant='body2' fontWeight={600}>Tax rate applied</Typography></TableCell>
                <TableCell align="justify"><Typography variant='body2' fontWeight={600}>Cumulative tax before deduction</Typography></TableCell>
                <TableCell align="justify"><Typography variant='body2' fontWeight={600}>Tax deduction</Typography></TableCell>

                <TableCell align="justify"><Typography variant='body2' fontWeight={600}>Cumulative tax after deduction</Typography></TableCell>
                <TableCell align="justify"><Typography variant='body2' fontWeight={600}>Previously Paid Tax</Typography></TableCell>
                
                

                

                <TableCell align="justify"><Typography variant='body2' fontWeight={600}>Tax Due</Typography></TableCell>
                <TableCell align="justify"><Typography variant='body2' fontWeight={600}>Net Salary</Typography></TableCell>
              </TableRowStyled>
            </TableHead>
            <TableBody>
              {results.map((row) => (
                <TableRowStyled
                  key={row.month}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Typography variant='body2' fontWeight={600}>{row.month}</Typography>
                  </TableCell>
                  <TableCell align="justify">{row.currentMonthSalary.toLocaleString('en-US')}</TableCell>
                  <TableCell align="justify">{row.nonTaxableAmountThisMonth.toLocaleString('en-US')}</TableCell>

                  <TableCell align="justify">{row.cumulativeSalaryToDate.toLocaleString('en-US')}</TableCell>
                  <TableCell align="justify">{row.cumulativeNonTaxableAmountToDate.toLocaleString('en-US')}</TableCell>
                  <TableCell align="justify">{row.taxableAmountThisMonth.toLocaleString('en-US')}</TableCell>
                  <TableCell align="justify">{row.taxRate * 100}%</TableCell>
                  <TableCell align="justify">{row.taxBeforeDeduction.toLocaleString('en-US')}</TableCell>
                  <TableCell align="justify">{row.taxDeduction.toLocaleString('en-US')}</TableCell>
                  <TableCell align="justify">{row.cumulativeTaxToDate.toLocaleString('en-US')}</TableCell>
                  <TableCell align="justify">{row.previouslyPaidTax.toLocaleString('en-US')}</TableCell>
                  
                  

                  <TableCell align="justify">{row.taxDueThisMonth.toLocaleString('en-US')}</TableCell>
                  <TableCell align="justify">{row.netSalaryThisMonth.toLocaleString('en-US')}</TableCell>
                </TableRowStyled>
              ))}
              <TableRowStyled>
                <TableCell align="right" colSpan={Object.keys(results[0]).length - 1}>
                  <Typography variant='body2' fontWeight={600}>
                    Total net salary received
                  </Typography>
                </TableCell>
                <TableCell align="right">
                <Typography variant='body2' fontWeight={600}>
                  {calculateTotalNetSalary(results).toLocaleString('en-US')}
                </Typography>
                </TableCell>
              </TableRowStyled>
              <TableRowStyled>
                <TableCell align="right" colSpan={Object.keys(results[0]).length - 1 }>
                  <Typography variant='body2' fontWeight={600}>
                    Total tax paid
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant='body2' fontWeight={600}>
                    {calculateTotalTaxPaid(results).toLocaleString('en-US')}
                  </Typography>
                </TableCell>
              </TableRowStyled>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
   
  );
}

export default Results;