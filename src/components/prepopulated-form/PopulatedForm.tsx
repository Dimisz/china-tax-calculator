import { Button, Grid, TextField } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store";
import PopulatedInputField from "./PopulatedInputField";

const PopulatedForm = () => {
  const salaries = useAppSelector((state) => state.salaries.salaries);
  const dispatch = useAppDispatch();

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // if(!enteredSalary) return;
    // dispatch(populateSalary(enteredSalary));
    // const results = generateTaxReport(enteredSalary);
    // setResults(results);
    console.log('updated salaries');
    console.log(salaries);
  }

  const populatedSalaries = salaries.map((salary, i) => {
    return(
      <PopulatedInputField index={i} key={i} />
    )
  })
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
            <Grid container spacing={2}>
              {populatedSalaries}
            </Grid>
            <Button
              // disabled={!isInputValid}
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

export default PopulatedForm;