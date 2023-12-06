import { Grid, TextField, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import { changeSalary, useAppDispatch, useAppSelector } from "../../store";
import { getMonth } from "../../helpers/getMonth";

interface Props{
  index: number;
}

const PopulatedInputField = ({index}: Props) => {
  const salaries = useAppSelector((state) => state.salaries.salaries);
  const dispatch = useAppDispatch();

  const [isInputValid, setIsInputValid] = useState(true);

  const theme = useTheme();
  const greaterThanMd = useMediaQuery(theme.breakpoints.up("md"));

  const handleSalaryInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const amount = Number(e.target.value) || null;
    // console.log('inside handler');
    if(amount){
      dispatch(changeSalary({index: index, newSalary: amount}));
      setIsInputValid(true);
    }
    else {
      setIsInputValid(false);
    }
  }

  const currentMonth = getMonth(index);
  return(
    <Grid item xs={6} md={6} display='flex' justifyContent='center'>

      <TextField
        value={salaries[index]}
        onChange={handleSalaryInputChange}
        helperText={!isInputValid ? 'Enter a valid whole number without punctuation' : ''}
        error={!isInputValid}
        id={currentMonth}
        label={currentMonth}
        fullWidth
        autoComplete={`salary in ${currentMonth}`}
        variant="outlined"
        
      />
      </Grid>
  );
    
    
}

export default PopulatedInputField;