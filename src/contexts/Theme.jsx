import React from 'react';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import { ptBR } from '@mui/material/locale';

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

export const ThemeColorProvider = ({ children }) => {
  const [mode, setMode] = React.useState('light');

  React.useEffect(() => {
    const storageTheme = localStorage.getItem('@App:theme');
    if (storageTheme) {
      storageTheme === 'light' ? setMode('light') : setMode('dark');
    } else {
      localStorage.setItem('@App:theme', 'light');
    }
  }, []);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        const storageTheme = localStorage.getItem('@App:theme');
        localStorage.setItem(
          '@App:theme',
          storageTheme === 'light' ? 'dark' : 'light'
        );
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme(
        {
          palette: {
            mode,
          },
        },
        ptBR
      ),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export function ThemeColorContext() {
  const context = React.useContext(ColorModeContext);
  return context;
}
