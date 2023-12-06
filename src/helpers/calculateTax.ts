import { MonthlyRecord } from "../models/monthlyRecord";
const NON_TAXABLE_AMOUNT = 5000;

const getTaxRate: (amount: number) => number = (amount) => {
  if(amount < 36000) return 0.03;
  else if(amount >= 36000 && amount < 144000) return 0.1;
  else if(amount >= 144000 && amount < 300000) return 0.2;
  else if(amount >= 300000 && amount < 420000) return 0.25;
  else if(amount >= 420000 && amount < 660000) return 0.3;
  else if(amount >= 660000 && amount < 960000) return 0.35;
  else return 0.45;
}

const getTaxDeduction: (amount: number) => number = (amount) => {
  if(amount < 36000) return 0;
  else if(amount >= 36000 && amount < 144000) return 2520;
  else if(amount >= 144000 && amount < 300000) return 16920;
  else if(amount >= 300000 && amount < 420000) return 31920;
  else if(amount >= 420000 && amount < 660000) return 52920;
  else if(amount >= 660000 && amount < 960000) return 85920;
  else return 181920;
}

const getMonth: (monthAsNumber: number) => string = (monthAsNumber) => {
  switch(monthAsNumber){
    case 1: return "January";
    case 2: return "February";
    case 3: return "March";
    case 4: return "April";
    case 5: return "May";
    case 6: return "June";
    case 7: return "July";
    case 8: return "August";
    case 9: return "September";
    case 10: return "October";
    case 11: return "November";
    case 12: return "December";
    default: return "Loops are not developers strong suit";
  }
}

export const generateTaxReport: (salary: number) => MonthlyRecord[] = (salary) => {
  const report: MonthlyRecord[] = [];
  for(let i = 1; i < 13; i++){
    // console.log(i);
    // console.log(report);

    const previouslyPaidTax = i === 1 ? 0 : report[i-2].cumulativeTaxToDate;
    const cumulativeSalaryToDate = salary * i;
    const cumulativeNonTaxableAmountToDate = NON_TAXABLE_AMOUNT * i;
    const taxableAmountThisMonth = cumulativeSalaryToDate - cumulativeNonTaxableAmountToDate;

    const taxRate = getTaxRate(taxableAmountThisMonth);
    console.log(taxRate);
    const deductibleAmount = getTaxDeduction(taxableAmountThisMonth);
    console.log(deductibleAmount);

    const taxBeforeDeduction = (taxableAmountThisMonth) * taxRate;
    const cumulativeTaxToDate = taxBeforeDeduction - deductibleAmount;

    const taxDueThisMonth = cumulativeTaxToDate - previouslyPaidTax;
    const month = getMonth(i);
    const netSalaryThisMonth = salary - taxDueThisMonth;

    const monthlyReport = {
      month,
      currentMonthSalary: salary,
      nonTaxableAmountThisMonth: NON_TAXABLE_AMOUNT,
      cumulativeSalaryToDate,
      cumulativeNonTaxableAmountToDate,
      previouslyPaidTax,
      cumulativeTaxToDate, 
      taxDueThisMonth,
      netSalaryThisMonth,
      taxDeduction: deductibleAmount,
      taxBeforeDeduction,
      taxRate,
      taxableAmountThisMonth
    }
    report.push(monthlyReport);
    // console.log('pushed');
    // console.log(report);
  }


  return report;
}

export const calculateTotalNetSalary: (report: MonthlyRecord[]) => number = (report) =>{
  return report.reduce((total, month) => {
    return total + month.netSalaryThisMonth;
  }, 0);
}

export const calculateTotalTaxPaid: (report: MonthlyRecord[]) => number = (report) =>{
  return report.reduce((total, month) => {
    return total + month.taxDueThisMonth;
  }, 0);
}
