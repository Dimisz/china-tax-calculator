export interface MonthlyRecord {
  month: string;
  currentMonthSalary: number;
  nonTaxableAmountThisMonth: number;
  cumulativeSalaryToDate: number;
  cumulativeNonTaxableAmountToDate: number;
  previouslyPaidTax:number;
  cumulativeTaxToDate: number;
  taxDueThisMonth: number;
  netSalaryThisMonth: number;
}