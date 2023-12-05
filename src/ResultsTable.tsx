import { Grid } from "@mui/material";
import { MonthlyRecord } from "./models/monthlyRecord";

interface Props {
  results: MonthlyRecord[];
}

const ResultsTable = ({results}: Props) => {
  if(results.length < 0) return;
  const renderedResults = results.map((result) => {
    return(
      <Grid item display='flex' justifyContent='center' key={result.month}>
      <table>
        <thead>
          <tr>
            <th colSpan={2}>{result.month}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Salary this month</td>
            <td>{result.currentMonthSalary}</td>
          </tr>
          <tr>
            <td>Non-taxable amount this month</td>
            <td>{result.nonTaxableAmountThisMonth}</td>
          </tr>
          <tr>
            <td>Cumulative salary this year to date</td>
            <td>{result.cumulativeSalaryToDate}</td>
          </tr>
          <tr>
            <td>Cumulative non-taxable amount this year to date</td>
            <td>{result.cumulativeNonTaxableAmountToDate}</td>
          </tr>
          <tr>
            <td>Total tax paid previously this year</td>
            <td>{result.previouslyPaidTax}</td>
          </tr>
          <tr>
            <td>Cumulative payable tax to date</td>
            <td>{result.cumulativeTaxToDate}</td>
          </tr>
          <tr>
            <td>Tax due this Month</td>
            <td>{result.taxDueThisMonth}</td>
          </tr>
          <tr>
            <td>Net salary this Month</td>
            <td>{result.netSalaryThisMonth}</td>
          </tr>
        </tbody>
        
      </table>
      </Grid>
    )
  });

  return(
    <Grid container>
      {results.length > 0 && renderedResults}
    </Grid>
  );
}

export default ResultsTable;