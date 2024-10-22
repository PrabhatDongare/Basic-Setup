import React from 'react';
import { Box, Button, styled, Typography, ThemeProvider, createTheme } from '@mui/material';

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Custom primary color
    },
    secondary: {
      main: '#dc004e', // Custom secondary color
    },
    customColor: {
      main: '#ff9800', // Adding a custom color
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif', // Custom font family
    h6: {
      fontSize: '1.25rem', // Custom heading size
    },
  },
});

// Custom styled button
const Btn = styled(Button)({
    backgroundColor: "red",
    color: "white",
    '&:hover': {
        backgroundColor: "darkred"
    }
});

const Testing = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Btn variant="contained">Custom Red Button</Btn>
        <Button variant="contained" color="primary">Default MUI Button</Button>
        <Button variant="contained" color="customColor">Custom Theme Button</Button>
        <Typography>This is just to check text</Typography>
      </Box>
    </ThemeProvider>
  )
}

export default Testing;
