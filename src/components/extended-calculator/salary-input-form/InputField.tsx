import { Grid, TextField, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import { inputTypes } from "../../../models/input-types";

interface Props {
  month: string;
  inputType: inputTypes;
}

const InputField = ({ month, inputType }: Props) => {
  const [isInputValid, setIsInputValid] = useState(false);
  const [enteredAmount, setEnteredAmount] = useState<number | null>(null);
  const [inputTouched, setInputTouched] = useState(false);

  const theme = useTheme();
  const greaterThanMd = useMediaQuery(theme.breakpoints.up("md"));

  const handleSalaryInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const amount = Number(e.target.value) || null;
    // console.log('inside handler');
    if(amount){
      setEnteredAmount(amount);
      setIsInputValid(true);
    }
    else {
      setIsInputValid(false);
    }
  }
  let id: string;
  let label: string;
  let xsLabel: string;

  switch(inputType){
    case inputTypes.SALARY:
      id = `salary-in-${month}`,
      label = `Salary received in ${month}`;
      xsLabel = month;
      break;
    case inputTypes.BONUS:
      id = `bonus-in-${month}`,
      label = `Bonus received in ${month}`;
      xsLabel = "Bonus";
      break;
    default:
      id = `tax-benfits-in-${month}`,
      label = `Tax benefits in ${month}`;
      xsLabel = "Tax benefits";
      break;
  }

  return(
    // <Grid item xs={6} md={6} display='flex' justifyContent='center'>

      <TextField
        onKeyDown={() => setInputTouched(true)}
        onChange={handleSalaryInputChange}
        helperText={isInputValid || !inputTouched ? '' : 'Enter a valid whole number without punctuation'}
        error={!isInputValid && inputTouched}
        id={id}
        label={greaterThanMd ? label : xsLabel}
        fullWidth
        autoComplete="salary"
        variant="outlined"
      />

    // </Grid>
    
  );
}

export default InputField;