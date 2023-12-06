import { useState } from "react";
import Header from "./layout/Header"
import { Container, CssBaseline, Grid, ThemeProvider, createTheme } from "@mui/material";
import SalaryInputForm from "./SalaryForm";
import { MonthlyRecord } from "./models/monthlyRecord";
import ResultsTable from "./ResultsTable";
import Results from "./Results";
import ExtendedSalaryInputForm from "./components/extended-calculator/salary-input-form/ExtendedSalaryInputForm";
import InitialInputForm from "./components/prepopulated-form/InitialInputForm";
import { Outlet } from "react-router-dom";


const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [results, setResults] = useState<MonthlyRecord[]>([]);

  const toggleTheme = () => {
    setDarkMode((m) => !m);
  }

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      background: {
        default: darkMode ? '#121212' : '#eaeaea' 
      }
    }
  });

  
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header darkMode={darkMode} toggleTheme={toggleTheme} />
        <Container>
          <Outlet />
        </Container>
        {/* <InitialInputForm /> */}
        {/* <ExtendedSalaryInputForm setResults={setResults} /> */}
        {/* <SalaryInputForm setResults={setResults}/>
        <Results results={results} />  */}
          
        
      </ThemeProvider>
    </>
  )
}

export default App;
