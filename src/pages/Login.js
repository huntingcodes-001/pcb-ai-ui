// src/pages/Login.js  
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
import { signInWithEmailAndPassword } from 'firebase/auth';  
import { auth } from '../firebase';  
import { useNavigate, Link } from 'react-router-dom';  
import { useSnackbar } from '../components/SnackbarContext';  
  
function Login() {  
  const { register, handleSubmit, formState: { errors }, reset } = useForm();  
  const showSnackbar = useSnackbar();  
  const navigate = useNavigate();  
  const [loading, setLoading] = useState(false);  
  
  const onSubmit = async (data) => {  
    const { email, password } = data;  
    setLoading(true);  
    try {  
      await signInWithEmailAndPassword(auth, email, password);  
      showSnackbar('Login successful!', 'success');  
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
          Log In  
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
                })}  
                error={!!errors.password}  
                helperText={errors.password ? errors.password.message : ''}  
              />  
            </Grid>  
            <Grid item xs={12} sx={{ textAlign: 'center' }}>  
              <Button type="submit" variant="contained" color="primary" disabled={loading}>  
                {loading ? 'Logging In...' : 'Log In'}  
              </Button>  
            </Grid>  
            <Grid item xs={12} sx={{ textAlign: 'center' }}>  
              <Typography variant="body2">  
                Don't have an account? <Link to="/signup">Sign Up</Link>  
              </Typography>  
            </Grid>  
          </Grid>  
        </form>  
      </Paper>  
    </Container>  
  );  
}  
  
export default Login;  