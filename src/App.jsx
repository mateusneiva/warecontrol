import React from 'react';
import Router from './router';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeColorProvider } from './contexts/Theme';
import { RowsProvider } from './contexts/Table';

const App = () => {
  return (
    <RowsProvider>
      <ThemeColorProvider>
        <CssBaseline />
        <Router />
      </ThemeColorProvider>
    </RowsProvider>
  );
};

export default App;
