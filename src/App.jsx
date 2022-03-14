import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import Router from '@/routes';
import useTheme from '@/hooks/useTheme';

const App = () => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  );
};

export default App;
