// src/pages/About.js  
import React from 'react';  
import { Container, Typography, Box, Paper } from '@mui/material';  
  
function About() {  
  return (  
    <Container maxWidth="md" sx={{ mt: 8, mb: 4 }}>  
      <Paper elevation={3} sx={{ p: 4 }}>  
        <Typography variant="h4" gutterBottom color="primary">  
          About PCB Pro  
        </Typography>  
        <Typography variant="body1" color="textSecondary" paragraph>  
          PCB Pro is designed to streamline the process of generating and improving printed circuit boards.  
          Leveraging intelligent algorithms and user-friendly interfaces, PCB Pro empowers engineers and hobbyists alike  
          to create optimized PCBs with ease and precision.  
        </Typography>  
        <Typography variant="body1" color="textSecondary" paragraph>  
          Our mission is to simplify electronics design, reducing the time and effort required to bring your ideas to life.  
          Whether you're a seasoned professional or just starting out, PCB Pro provides the tools you need to succeed.  
        </Typography>  
      </Paper>  
    </Container>  
  );  
}  
  
export default About;  