// src/components/ComponentIndependent.js  
import React, { useState } from 'react';  
import { TextField, Button, Box, Typography } from '@mui/material';  
import { useSnackbar } from './SnackbarContext';  

function ComponentIndependent() {  
  const [purpose, setPurpose] = useState('');  
  const showSnackbar = useSnackbar();  

  const handleGenerate = () => {  
    if (!purpose) {  
      showSnackbar('Please enter the purpose.', 'error');  
      return;  
    }  
    // Handle PCB generation logic here  
    console.log('Purpose:', purpose);  
    showSnackbar('PCB Generated Successfully!', 'success');  
  };  

  return (  
    <Box sx={{ mt: 4 }}>  
      <Typography variant="h6" gutterBottom color="secondary">  
        Component Independent PCB Generation  
      </Typography>  
      <TextField  
        label="Purpose"  
        variant="outlined"  
        fullWidth  
        sx={{ mb: 3 }}  
        value={purpose}  
        onChange={(e) => setPurpose(e.target.value)}  
      />  
      <Button variant="contained" color="primary" onClick={handleGenerate}>  
        Generate  
      </Button>  
    </Box>  
  );  
}  

export default ComponentIndependent;  