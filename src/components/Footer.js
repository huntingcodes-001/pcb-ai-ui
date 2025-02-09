// src/components/Footer.js  
import React from 'react';  
import { Container, Typography, Link, Box, Grid } from '@mui/material';  
import FacebookIcon from '@mui/icons-material/Facebook';  
import TwitterIcon from '@mui/icons-material/Twitter';  
import LinkedInIcon from '@mui/icons-material/LinkedIn';  
  
function Footer() {  
  return (  
    <Box  
      component="footer"  
      sx={{  
        py: 6,  
        px: 2,  
        mt: 4, // Added margin-top for spacing  
        backgroundColor: (theme) =>  
          theme.palette.mode === 'light'  
            ? theme.palette.grey[200]  
            : theme.palette.grey[800],  
      }}  
    >  
      <Container maxWidth="md">  
        <Grid container spacing={4} justifyContent="space-between">  
          {/* About Section */}  
          <Grid item xs={12} sm={6}>  
            <Typography variant="h6" gutterBottom>  
              PCB Pro  
            </Typography>  
            <Typography variant="body2" color="textSecondary">  
              PCB Pro is your intelligent assistant for PCB generation and improvement.  
              Streamline your electronics projects with ease and precision.  
            </Typography>  
          </Grid>  
  
          {/* Links Section */}  
          <Grid item xs={12} sm={3}>  
            <Typography variant="h6" gutterBottom>  
              Quick Links  
            </Typography>  
            <Link href="/" variant="body2" color="textSecondary" underline="hover">  
              Home  
            </Link>  
            <br />  
            <Link href="/generate-pcb" variant="body2" color="textSecondary" underline="hover">  
              Generate PCB  
            </Link>  
            <br />  
            <Link href="/improve-pcb" variant="body2" color="textSecondary" underline="hover">  
              Improve PCB  
            </Link>  
          </Grid>  
  
          {/* Social Media Section */}  
          <Grid item xs={12} sm={3}>  
            <Typography variant="h6" gutterBottom>  
              Follow Us  
            </Typography>  
            <Box sx={{ display: 'flex', gap: 1 }}>  
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" color="inherit">  
                <FacebookIcon />  
              </Link>  
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" color="inherit">  
                <TwitterIcon />  
              </Link>  
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" color="inherit">  
                <LinkedInIcon />  
              </Link>  
            </Box>  
          </Grid>  
        </Grid>  
        {/* Additional Spacing Below Footer Content */}  
        <Box sx={{ mt: 4, textAlign: 'center' }}>  
          <Typography variant="body2" color="textSecondary">  
            © {new Date().getFullYear()} PCB Pro. All rights reserved.  
          </Typography>  
        </Box>  
      </Container>  
    </Box>  
  );  
}  
  
export default Footer;  