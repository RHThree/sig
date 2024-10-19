'use client';
import { createTheme } from '@mui/material/styles';
import '@fontsource/poppins/600.css'

const theme = createTheme({
  typography: {
    fontFamily: `'Poppins', sans-serif`,
  },
  palette: {
    primary: {
      main: '#db0000',
      dark: '#c12222'
    },
    secondary: {
      main: '#fff',
    },
  },
});

export default theme;
