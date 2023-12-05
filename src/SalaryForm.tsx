import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { generateTaxReport } from "./helpers/calculateTax";
import { MonthlyRecord } from "./models/monthlyRecord";
interface Props {
  setResults: (results: MonthlyRecord[]) => void;
}

const SalaryInputForm = ({setResults}: Props) => {
  const [isInputValid, setIsInputValid] = useState(false);
  const [enteredSalary, setEnteredSalary] = useState<number | null>(null);
  const [inputTouched, setInputTouched] = useState(false);

  const handleSalaryInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const salary = Number(e.target.value) || null;
    // console.log('inside handler');
    if(salary){
      setEnteredSalary(salary);
      setIsInputValid(true);
    }
    else {
      setIsInputValid(false);
    }
  }

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!enteredSalary) return;
    const results = generateTaxReport(enteredSalary);
    setResults(results);
  }

  return(
    
      <Grid item display='flex' justifyContent='center' width='100%'>
        {/* <Paper sx={{ width: '80%', mt: '2rem'}} > */}
          <form 
            onSubmit={handleSubmit}
            style={{
              width: '100%',
              marginTop: '1rem'
            }}
          >
            <TextField
              onFocus={() => setInputTouched(true)}
              onChange={handleSalaryInputChange}
              helperText={isInputValid || !inputTouched ? '' : 'Enter a valid whole number without punctuation'}
              error={!isInputValid && inputTouched}
        
              id="monthly-salary"
              label="Salary per month"
              fullWidth
              autoComplete="salary"
              variant="outlined"
            />
            <Button
              disabled={!isInputValid}
              variant="contained"
              type='submit'
              sx={{ mt: 1 }}
              fullWidth
            >Calculate</Button>
          </form>
        {/* </Paper> */}
      </Grid>
   
  );
}

export default SalaryInputForm;