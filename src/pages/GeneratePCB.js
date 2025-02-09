// src/pages/GeneratePCB.js  
import React, { useState } from 'react';  
import { Container, Typography, Button, Box, Grid, Card, CardContent } from '@mui/material';  
import { useNavigate } from 'react-router-dom';  
import BuildCircleIcon from '@mui/icons-material/BuildCircle';  
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';  
import ComponentSpecific from '../components/ComponentSpecific';  
import ComponentIndependent from '../components/ComponentIndependent';  

function GeneratePCB() {  
  const [option, setOption] = useState(null);  
  const navigate = useNavigate();  

  return (  
    <Container maxWidth="md" sx={{ mt: 8 }}>  
      <Typography variant="h4" gutterBottom color="primary">  
        Generate PCB  
      </Typography>  
      {!option && (  
        <Grid container spacing={4} sx={{ mt: 4 }}>  
          <Grid item xs={12} sm={6}>  
            <Card  
              elevation={3}  
              sx={{  
                cursor: 'pointer',  
                '&:hover': {  
                  boxShadow: 6,  
                },  
              }}  
              onClick={() => setOption('specific')}  
            >  
              <CardContent sx={{ textAlign: 'center' }}>  
                <BuildCircleIcon color="primary" sx={{ fontSize: 60, mb: 2 }} />  
                <Typography variant="h6">Component Specific</Typography>  
                <Typography variant="body2" color="textSecondary">  
                  Generate PCBs tailored with specific components.  
                </Typography>  
              </CardContent>  
            </Card>  
          </Grid>  
          <Grid item xs={12} sm={6}>  
            <Card  
              elevation={3}  
              sx={{  
                cursor: 'pointer',  
                '&:hover': {  
                  boxShadow: 6,  
                },  
              }}  
              onClick={() => setOption('independent')}  
            >  
              <CardContent sx={{ textAlign: 'center' }}>  
                <SwapHorizIcon color="secondary" sx={{ fontSize: 60, mb: 2 }} />  
                <Typography variant="h6">Component Independent</Typography>  
                <Typography variant="body2" color="textSecondary">  
                  Generate PCBs without predefined components.  
                </Typography>  
              </CardContent>  
            </Card>  
          </Grid>  
        </Grid>  
      )}  

      {option === 'specific' && <ComponentSpecific />}  
      {option === 'independent' && <ComponentIndependent />}  

      {option && (  
        <Box sx={{ mt: 4 }}>  
          <Button variant="outlined" onClick={() => setOption(null)}>  
            Back  
          </Button>  
        </Box>  
      )}  
    </Container>  
  );  
}  

export default GeneratePCB;  