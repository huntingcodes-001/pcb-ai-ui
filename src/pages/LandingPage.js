import React from 'react';
import { Container, Typography, Button, Box, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ComputerIcon from '@mui/icons-material/Computer';
import BuildIcon from '@mui/icons-material/Build';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <img
            src="zlogo192.png" 
            alt="PCB Illustration"
            style={{ width: '100%', height: 'auto' }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" gutterBottom color="primary">
            Welcome to PCB Pro
          </Typography>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            Your intelligent assistant for PCB Generation and Improvement
          </Typography>
          <Box sx={{ mt: 6 }}>
            <Grid container spacing={4} justifyContent="center">
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
      </Grid>
    </Container>
  );
}

export default LandingPage;