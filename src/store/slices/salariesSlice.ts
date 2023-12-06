import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SalariesState {
  salaries: number[];
  bonuses: number[];
}

const initialState: SalariesState = {
  salaries: [],
  bonuses: []
};


export const salariesSlice = createSlice({
  name: 'salaries',
  initialState,
  reducers: {
    populateSalary(state, action: PayloadAction<number>){
      const populatedSalaries = new Array(12).fill(action.payload);
      return {...state, salaries: populatedSalaries};
    },
    changeSalary(state, action: PayloadAction<{index: number, newSalary: number}>){
      const updatedSalaries = [...state.salaries];
      console.log('from store');
      console.log(updatedSalaries);

      updatedSalaries[action.payload.index] = action.payload.newSalary;
      
      console.log(action.payload.newSalary);
      return {...state, salaries: updatedSalaries};
    }
  }
})