import { DarkMode, LightMode } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

interface Props {
  darkMode: boolean;
  toggleTheme: () => void;
}

const Header = ({darkMode, toggleTheme}: Props) => {
  return(
    <AppBar position='sticky'>
      <Toolbar>
        <IconButton
          size='large'
          onClick={toggleTheme}
          sx={{marginRight: 'auto'}}
        >
          { darkMode
            ?
            <LightMode titleAccess="Switch to light mode"/>
            :
            <DarkMode titleAccess="Switch to dark mode"/>
          }
        </IconButton>
        <Typography align="center" variant='h5'>
          Tax Calculator
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header;