import { createTheme } from '@mui/material/styles';

/*Create global Theme*/
const MainTheme = createTheme({
  palette: {
    primary: {
      main: "#bd57d5",
    },
    secondary: {
      main: '#fff',
    },
  },
  /*overrides: {
    MuiButton: { 
      containedSecondary: {
        color: "#bd57d5"
      }
    },
  }*/
});

export default MainTheme;