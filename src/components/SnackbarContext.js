// src/components/SnackbarContext.js  
import React, { createContext, useState, useContext } from 'react';  
import Snackbar from '@mui/material/Snackbar';  
import MuiAlert from '@mui/material/Alert';  

const SnackbarContext = createContext();  

const Alert = React.forwardRef(function Alert(props, ref) {  
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;  
});  

export function SnackbarProvider({ children }) {  
  const [open, setOpen] = useState(false);  
  const [message, setMessage] = useState('');  
  const [severity, setSeverity] = useState('success');  

  const showSnackbar = (msg, sev = 'success') => {  
    setMessage(msg);  
    setSeverity(sev);  
    setOpen(true);  
  };  

  const handleClose = (event, reason) => {  
    if (reason === 'clickaway') {  
      return;  
    }  
    setOpen(false);  
  };  

  return (  
    <SnackbarContext.Provider value={showSnackbar}>  
      {children}  
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>  
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>  
          {message}  
        </Alert>  
      </Snackbar>  
    </SnackbarContext.Provider>  
  );  
}  

export function useSnackbar() {  
  return useContext(SnackbarContext);  
}  