import { createMuiTheme } from '@material-ui/core';

/*Create global Theme*/
const MainTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#7c54f7",
    },
    secondary: {
      main: '#fff',
    },
  },
  overrides: {
    MuiButton: { //https://material-ui.com/pt/api/button/
      containedSecondary: {
        color: "#7c54f7"
      }
    },
  }
});

export default MainTheme;