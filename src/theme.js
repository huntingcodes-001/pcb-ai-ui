// src/theme.js  
import { createTheme } from '@mui/material/styles';  

const getDesignTokens = (mode) => ({  
  palette: {  
    mode,  
    ...(mode === 'light'  
      ? {  
          // palette values for light mode  
          primary: {  
            main: '#1976d2',  
          },  
          secondary: {  
            main: '#ff9800',  
          },  
          background: {  
            default: '#f5f5f5',  
            paper: '#ffffff',  
          },  
        }  
      : {  
          // palette values for dark mode  
          primary: {  
            main: '#90caf9',  
          },  
          secondary: {  
            main: '#ffb74d',  
          },  
          background: {  
            default: '#121212',  
            paper: '#1e1e1e',  
          },  
        }),  
  },  
  typography: {  
    fontFamily: 'Roboto, sans-serif',  
    h3: {  
      fontWeight: 700,  
    },  
    h4: {  
      fontWeight: 700,  
    },  
    h6: {  
      fontWeight: 600,  
    },  
  },  
});  

export default getDesignTokens;  