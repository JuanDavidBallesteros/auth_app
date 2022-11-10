import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#000',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#fff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
  },
  typography: {
    fontFamily: [
      'Quicksand',
      'Roboto',
      'sans-serif'
    ].join(','),
  }
});

export default theme