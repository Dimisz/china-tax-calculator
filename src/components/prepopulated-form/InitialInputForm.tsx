import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { populateSalary, useAppDispatch, useAppSelector } from "../../store";
import { Link } from "react-router-dom";

const InitialInputForm = () => {
  const salaries = useAppSelector((state) => state.salaries);
  const dispatch = useAppDispatch();

  const [isInputValid, setIsInputValid] = useState(false);
  // const [enteredSalary, setEnteredSalary] = useState<number | null>(null);
  const [inputTouched, setInputTouched] = useState(false);

  const handleSalaryInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const salary = Number(e.target.value) || null;
    // console.log('inside handler');
    if(salary){
      dispatch(populateSalary(salary));
      setIsInputValid(true);
    }
    else {
      setIsInputValid(false);
    }
  }

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // if(!enteredSalary) return;
    // dispatch(populateSalary(enteredSalary));
    // const results = generateTaxReport(enteredSalary);
    // setResults(results);
    console.log('salaries');
    console.log(salaries);
  }

  return(
    
      <Grid item display='flex' justifyContent='center' xs={12} >
        {/* <Paper sx={{ width: '80%', mt: '2rem'}} > */}
          <form 
            onSubmit={handleSubmit}
            style={{
              width: '80%',
              marginTop: '1rem'
            }}
          >
            <TextField
              onKeyDown={() => setInputTouched(true)}
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
              component={Link} to={'/salaries-by-month'}
              disabled={!isInputValid}
              variant="contained"
              type='submit'
              sx={{ mt: 1 }}
              fullWidth
            >Next</Button>
          </form>
        {/* </Paper> */}
      </Grid>
  );
}

export default InitialInputForm;