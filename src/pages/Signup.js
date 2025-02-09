// src/pages/Signup.js  
import React, { useState } from 'react';  
import {  
  Container,  
  Typography,  
  Box,  
  Paper,  
  TextField,  
  Button,  
  Grid,  
} from '@mui/material';  
import { useForm } from 'react-hook-form';  
import { createUserWithEmailAndPassword } from 'firebase/auth';  
import { auth } from '../firebase';  
import { useNavigate, Link } from 'react-router-dom';  
import { useSnackbar } from '../components/SnackbarContext';  
  
function Signup() {  
  const { register, handleSubmit, formState: { errors }, reset } = useForm();  
  const showSnackbar = useSnackbar();  
  const navigate = useNavigate();  
  const [loading, setLoading] = useState(false);  
  
  const onSubmit = async (data) => {  
    const { email, password } = data;  
    setLoading(true);  
    try {  
      await createUserWithEmailAndPassword(auth, email, password);  
      showSnackbar('Signup successful! Welcome!', 'success');  
      reset();  
      navigate('/');  
    } catch (error) {  
      console.error(error);  
      showSnackbar(error.message, 'error');  
    }  
    setLoading(false);  
  };  
  
  return (  
    <Container maxWidth="sm" sx={{ mt: 8, mb: 4 }}>  
      <Paper elevation={3} sx={{ p: 4 }}>  
        <Typography variant="h4" gutterBottom color="primary" align="center">  
          Sign Up  
        </Typography>  
        <form onSubmit={handleSubmit(onSubmit)}>  
          <Grid container spacing={3}>  
            <Grid item xs={12}>  
              <TextField  
                label="Email"  
                variant="outlined"  
                fullWidth  
                {...register('email', {  
                  required: 'Email is required.',  
                  pattern: {  
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,  
                    message: 'Enter a valid email address.',  
                  },  
                })}  
                error={!!errors.email}  
                helperText={errors.email ? errors.email.message : ''}  
              />  
            </Grid>  
            <Grid item xs={12}>  
              <TextField  
                label="Password"  
                type="password"  
                variant="outlined"  
                fullWidth  
                {...register('password', {  
                  required: 'Password is required.',  
                  minLength: {  
                    value: 6,  
                    message: 'Password must be at least 6 characters.',  
                  },  
                })}  
                error={!!errors.password}  
                helperText={errors.password ? errors.password.message : ''}  
              />  
            </Grid>  
            <Grid item xs={12} sx={{ textAlign: 'center' }}>  
              <Button type="submit" variant="contained" color="primary" disabled={loading}>  
                {loading ? 'Signing Up...' : 'Sign Up'}  
              </Button>  
            </Grid>  
            <Grid item xs={12} sx={{ textAlign: 'center' }}>  
              <Typography variant="body2">  
                Already have an account? <Link to="/login">Log In</Link>  
              </Typography>  
            </Grid>  
          </Grid>  
        </form>  
      </Paper>  
    </Container>  
  );  
}  
  
export default Signup;  