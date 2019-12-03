import { createMuiTheme } from '@material-ui/core';

const createTheme = () =>
  createMuiTheme({
    typography: {
      fontFamily: 'CentraleSans, tahoma, sans-serif',
      button: {
        textTransform: 'none',
        fontSize: 16,
      },
    },
    palette: { primary: { main: '#1474A4' }, secondary: { main: '#BFE2EB' } },
  });

export default createTheme;
