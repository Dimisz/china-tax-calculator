import { useState } from "react";
import Header from "./layout/Header"
import { Container, CssBaseline, Grid, ThemeProvider, createTheme } from "@mui/material";
import SalaryInputForm from "./SalaryForm";
import { MonthlyRecord } from "./models/monthlyRecord";
import ResultsTable from "./ResultsTable";
import Results from "./Results";


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
        <Container sx={{ m: 1 }}>
          <Grid
            container
            display='flex'
            justifyContent='space-between'
            xs={12} 
            lg={10}
            spacing={1}
            textAlign='center'
          >
            <SalaryInputForm setResults={setResults} />
            <Results results={results} />
          </Grid>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App;
