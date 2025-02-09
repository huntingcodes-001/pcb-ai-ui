// src/components/ComponentIndependent.js  
import React, { useState } from 'react';  
import {  
  TextField,  
  Button,  
  Box,  
  Typography,  
  Grid,  
  Paper,  
  CircularProgress,  
} from '@mui/material';  
import { useForm } from 'react-hook-form';  
import { useSnackbar } from './SnackbarContext';  
  
function ComponentIndependent() {  
  const { register, handleSubmit, formState: { errors } } = useForm();  
  const showSnackbar = useSnackbar();  
  const [loading, setLoading] = useState(false);  
  
  const onSubmit = (data) => {  
    const { purpose } = data;  
    setLoading(true);  
    // Simulate an API call with a timeout  
    setTimeout(() => {  
      setLoading(false);  
      console.log('Purpose:', purpose);  
      showSnackbar('PCB Generated Successfully!', 'success');  
    }, 2000);  
  };  
  
  return (  
    <Box sx={{ mt: 4 }}>  
      <Paper elevation={3} sx={{ p: 4 }}>  
        <Typography variant="h6" gutterBottom color="secondary">  
          Component Independent PCB Generation  
        </Typography>  
        <form onSubmit={handleSubmit(onSubmit)}>  
          <Grid container spacing={3}>  
            <Grid item xs={12}>  
              <TextField  
                label="Purpose"  
                variant="outlined"  
                fullWidth  
                {...register('purpose', { required: 'Purpose is required.' })}  
                error={!!errors.purpose}  
                helperText={errors.purpose ? errors.purpose.message : ''}  
              />  
            </Grid>  
            <Grid item xs={12} sx={{ textAlign: 'center' }}>  
              <Box sx={{ position: 'relative', display: 'inline-flex' }}>  
                <Button type="submit" variant="contained" color="primary" disabled={loading}>  
                  Generate  
                </Button>  
                {loading && (  
                  <CircularProgress  
                    size={24}  
                    sx={{  
                      color: 'primary.main',  
                      position: 'absolute',  
                      top: '50%',  
                      left: '50%',  
                      marginTop: '-12px',  
                      marginLeft: '-12px',  
                    }}  
                  />  
                )}  
              </Box>  
            </Grid>  
          </Grid>  
        </form>  
      </Paper>  
    </Box>  
  );  
}  
  
export default ComponentIndependent;  