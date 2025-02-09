// src/index.js  
import React, { useState, useMemo, useEffect } from 'react';  
import { createRoot } from 'react-dom/client'; // Import createRoot  
import App from './App';  
import { ThemeProvider, createTheme } from '@mui/material/styles';  
import CssBaseline from '@mui/material/CssBaseline';  
import getDesignTokens from './theme';  
  
function Main() {  
  const [mode, setMode] = useState('light');  
  
  // Load theme preference from localStorage  
  useEffect(() => {  
    const savedMode = localStorage.getItem('preferred-theme');  
    if (savedMode) {  
      setMode(savedMode);  
    }  
  }, []);  
  
  const colorMode = useMemo(  
    () => ({  
      toggleColorMode: () => {  
        setMode((prevMode) => {  
          const newMode = prevMode === 'light' ? 'dark' : 'light';  
          localStorage.setItem('preferred-theme', newMode);  
          return newMode;  
        });  
      },  
    }),  
    []  
  );  
  
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);  
  
  return (  
    <ThemeProvider theme={theme}>  
      <CssBaseline />  
      <App colorMode={colorMode} />  
    </ThemeProvider>  
  );  
}  
  
const container = document.getElementById('root'); // Get the root element  
const root = createRoot(container); // Create a root  
root.render( // Use root.render  
  <React.StrictMode>  
    <Main />  
  </React.StrictMode>  
);  