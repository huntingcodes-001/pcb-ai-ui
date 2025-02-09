// src/components/ComponentSpecific.js  
import React, { useState } from 'react';  
import { TextField, Button, Box, Typography } from '@mui/material';  
import { useSnackbar } from './SnackbarContext';  

function ComponentSpecific() {  
  const [purpose, setPurpose] = useState('');  
  const [components, setComponents] = useState('');  
  const showSnackbar = useSnackbar();  

  const handleGenerate = () => {  
    if (!purpose || !components) {  
      showSnackbar('Please fill in all fields.', 'error');  
      return;  
    }  
    // Handle PCB generation logic here  
    console.log('Purpose:', purpose);  
    console.log('Components:', components.split(',').map((c) => c.trim()));  
    showSnackbar('PCB Generated Successfully!', 'success');  
  };  

  return (  
    <Box sx={{ mt: 4 }}>  
      <Typography variant="h6" gutterBottom color="secondary">  
        Component Specific PCB Generation  
      </Typography>  
      <TextField  
        label="Purpose"  
        variant="outlined"  
        fullWidth  
        sx={{ mb: 3 }}  
        value={purpose}  
        onChange={(e) => setPurpose(e.target.value)}  
      />  
      <TextField  
        label="List of Components (comma separated)"  
        variant="outlined"  
        fullWidth  
        sx={{ mb: 3 }}  
        value={components}  
        onChange={(e) => setComponents(e.target.value)}  
      />  
      <Button variant="contained" color="primary" onClick={handleGenerate}>  
        Generate  
      </Button>  
    </Box>  
  );  
}  

export default ComponentSpecific;  