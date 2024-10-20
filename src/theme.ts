'use client';
import { createTheme } from '@mui/material/styles';
import '@fontsource/poppins/600.css';

const theme = createTheme({
  typography: {
    fontFamily: `'Poppins', sans-serif`,
    h1: {
      fontFamily: `'Poppins', sans-serif`, // Optional, can be omitted if same as global
      fontSize: '3rem', // Customize font size
      fontWeight: 700, // Bold
      lineHeight: 1.2, // Adjust line height
    },
    h2: {
      fontFamily: `'Poppins', sans-serif`, // Optional
      fontSize: '2.5rem',
      fontWeight: 600, // Semi-bold
      lineHeight: 1.3,
    },
    h3: {
      fontFamily: `'Poppins', sans-serif`, // Optional
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h4: {
      fontFamily: `'Poppins', sans-serif`, // Optional
      fontSize: '1.75rem',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    h5: {
      fontFamily: `'Poppins', sans-serif`, // Optional
      fontSize: '1.5rem',
      fontWeight: 500,
      lineHeight: 1.6,
    },
    h6: {
      fontFamily: `'Poppins', sans-serif`, // Optional
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.7,
    },
    body1: {
      fontFamily: `'Poppins', sans-serif`,
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.8,
    },
    body2: {
      fontFamily: `'Poppins', sans-serif`,
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.7,
    },
  },
  palette: {
    primary: {
      light: '#db0000',
      main: '#c12222',
      dark: '#a40000',
    },
    secondary: {
      main: '#fff',
      contrastText: '#000',
    },
    grey: {
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
    },
  },
});

export default theme;
