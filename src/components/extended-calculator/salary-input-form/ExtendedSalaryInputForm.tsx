import { Box, Button, Grid, Typography } from "@mui/material";
import { useState } from "react";

import { months } from "../../../data/months";
import InputField from "./InputField";
import { MonthlyRecord } from "../../../models/monthlyRecord";
import { generateTaxReport } from "../../../helpers/calculateTax";
import { inputTypes } from "../../../models/input-types";
import BonusAndTaxBenefitsAccordion from "./BonusAndTaxBenefitsAccordion";
interface Props {
  setResults: (results: MonthlyRecord[]) => void;
}

const ExtendedSalaryInputForm = ({setResults}: Props) => {
  const [isInputValid, setIsInputValid] = useState(false);
  const [enteredSalary, setEnteredSalary] = useState<number | null>(null);
  // const [inputTouched, setInputTouched] = useState(false);

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!enteredSalary) return;
    const results = generateTaxReport(enteredSalary);
    setResults(results);
  }

  const renderedInputFields = months.map((month) => {
    return(
      <Grid item xs={12} display='flex' justifyContent='center' flexDirection='column'>
        <InputField month={month} inputType={inputTypes.SALARY} key={month} />
        <BonusAndTaxBenefitsAccordion month={month} />
      </Grid>
    );
  })

  return(
    
          <Box display='flex' justifyContent='center'>
            <form
              onSubmit={handleSubmit}
              style={{
                width: '80%',
                marginTop: '1rem',
              }}
            >
              <Typography variant='h6'>
                Enter your salary
              </Typography>
              <Grid container spacing={2}>
                {renderedInputFields}
              </Grid>
              <Button
                disabled={!isInputValid}
                variant="contained"
                type='submit'
                sx={{ mt: 1 }}
                fullWidth
              >Calculate</Button>
            </form>
          </Box>
          
      
   
  );
}

export default ExtendedSalaryInputForm;