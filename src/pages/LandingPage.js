// src/pages/LandingPage.js  
import React from 'react';  
import { Container, Typography, Button, Box, Grid, Paper } from '@mui/material';  
import { useNavigate } from 'react-router-dom';  
import ComputerIcon from '@mui/icons-material/Computer';  
import BuildIcon from '@mui/icons-material/Build';  
import { styled } from '@mui/material/styles';  
  
const StyledPaper = styled(Paper)(({ theme }) => ({  
  padding: theme.spacing(4),  
  textAlign: 'center',  
  position: 'relative',  
  overflow: 'hidden',  
}));  
  
const StyledIllustration = styled('img')(({ theme }) => ({  
  width: '100%',  
  height: 'auto',  
  marginTop: theme.spacing(4),  
  borderRadius: theme.shape.borderRadius,  
}));  
  
function LandingPage() {  
  const navigate = useNavigate();  
  
  return (  
    <Container maxWidth="lg" sx={{ mt: 8, mb: 4 }}>  
      <StyledPaper elevation={3}>  
        <Grid container spacing={4} alignItems="center">  
          <Grid item xs={12} md={6}>  
            <Typography variant="h3" gutterBottom color="primary">  
              Welcome to PCB Pro  
            </Typography>  
            <Typography variant="h6" color="textSecondary" gutterBottom>  
              Your intelligent assistant for PCB Generation and Improvement  
            </Typography>  
            <Box sx={{ mt: 4 }}>  
              <Grid container spacing={2}>  
                <Grid item xs={12} sm={6}>  
                  <Button  
                    variant="contained"  
                    color="primary"  
                    size="large"  
                    fullWidth  
                    startIcon={<ComputerIcon />}  
                    onClick={() => navigate('/generate-pcb')}  
                  >  
                    Generate PCB  
                  </Button>  
                </Grid>  
                <Grid item xs={12} sm={6}>  
                  <Button  
                    variant="outlined"  
                    color="secondary"  
                    size="large"  
                    fullWidth  
                    startIcon={<BuildIcon />}  
                    onClick={() => navigate('/improve-pcb')}  
                  >  
                    Improve PCB  
                  </Button>  
                </Grid>  
              </Grid>  
            </Box>  
          </Grid>  
          <Grid item xs={12} md={6}>  
            <StyledIllustration  
              src="/images/zak.jpg" // Ensure this path is correct  
              alt="PCB Illustration"  
            />  
          </Grid>  
        </Grid>  
      </StyledPaper>  
    </Container>  
  );  
}  
  
export default LandingPage;  