// src/pages/Contact.js  
import React from 'react';  
import { Container, Typography, Box, Paper, TextField, Button, Grid } from '@mui/material';  
import { useForm } from 'react-hook-form';  
import { useSnackbar } from '../components/SnackbarContext';  
  
function Contact() {  
  const { register, handleSubmit, formState: { errors }, reset } = useForm();  
  const showSnackbar = useSnackbar();  
  
  const onSubmit = (data) => {  
    // Handle form submission, e.g., send to API  
    console.log('Contact Form Data:', data);  
    showSnackbar('Message sent successfully!', 'success');  
    reset();  
  };  
  
  return (  
    <Container maxWidth="md" sx={{ mt: 8, mb: 4 }}>  
      <Paper elevation={3} sx={{ p: 4 }}>  
        <Typography variant="h4" gutterBottom color="primary">  
          Contact Us  
        </Typography>  
        <form onSubmit={handleSubmit(onSubmit)}>  
          <Grid container spacing={3}>  
            <Grid item xs={12} sm={6}>  
              <TextField  
                label="Name"  
                variant="outlined"  
                fullWidth  
                {...register('name', { required: 'Name is required.' })}  
                error={!!errors.name}  
                helperText={errors.name ? errors.name.message : ''}  
              />  
            </Grid>  
            <Grid item xs={12} sm={6}>  
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
                label="Message"  
                variant="outlined"  
                fullWidth  
                multiline  
                rows={4}  
                {...register('message', { required: 'Message is required.' })}  
                error={!!errors.message}  
                helperText={errors.message ? errors.message.message : ''}  
              />  
            </Grid>  
            <Grid item xs={12} sx={{ textAlign: 'center' }}>  
              <Button type="submit" variant="contained" color="primary">  
                Send Message  
              </Button>  
            </Grid>  
          </Grid>  
        </form>  
      </Paper>  
    </Container>  
  );  
}  
  
export default Contact;  