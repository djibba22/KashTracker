import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#619b8a",
    },
    secondary: {
      main: "#247BA0",
    },
    warning:{
      main:"#FFE066"
    },
    danger:{
      main:"#F25F5C"
    },
    body:{
      main:"#50514F"
    }
  },
});

export default theme;