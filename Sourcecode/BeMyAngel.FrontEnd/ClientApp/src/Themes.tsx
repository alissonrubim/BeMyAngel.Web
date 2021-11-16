import { createMuiTheme } from '@material-ui/core';

/*Create global Theme*/
const MainTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#bd57d5",
    },
    secondary: {
      main: '#fff',
    },
  },
  overrides: {
    MuiButton: { 
      containedSecondary: {
        color: "#bd57d5"
      }
    },
  }
});

export default MainTheme;