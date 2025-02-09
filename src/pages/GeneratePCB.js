// src/pages/GeneratePCB.js  
import React, { useState } from 'react';  
import {  
  Container,  
  Typography,  
  Box,  
  Stepper,  
  Step,  
  StepLabel,  
  Button,  
  Paper,  
} from '@mui/material';  
import BuildCircleIcon from '@mui/icons-material/BuildCircle';  
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';  
import ComponentSpecific from '../components/ComponentSpecific';  
import ComponentIndependent from '../components/ComponentIndependent';  
  
const steps = ['Select Option', 'Provide Details', 'Generate PCB'];  
  
function GeneratePCB() {  
  const [activeStep, setActiveStep] = useState(0);  
  const [selectedOption, setSelectedOption] = useState(null);  
  
  const handleNext = () => {  
    setActiveStep((prev) => prev + 1);  
  };  
  
  const handleBack = () => {  
    setActiveStep((prev) => prev - 1);  
  };  
  
  const handleOptionSelect = (option) => {  
    setSelectedOption(option);  
    handleNext();  
  };  
  
  const renderStepContent = () => {  
    switch (activeStep) {  
      case 0:  
        return (  
          <Box sx={{ mt: 4 }}>  
            <Button  
              variant="contained"  
              color="primary"  
              size="large"  
              fullWidth  
              startIcon={<BuildCircleIcon />}  
              onClick={() => handleOptionSelect('specific')}  
              sx={{ mb: 2 }}  
            >  
              Component Specific  
            </Button>  
            <Button  
              variant="outlined"  
              color="secondary"  
              size="large"  
              fullWidth  
              startIcon={<SwapHorizIcon />}  
              onClick={() => handleOptionSelect('independent')}  
            >  
              Component Independent  
            </Button>  
          </Box>  
        );  
      case 1:  
        return selectedOption === 'specific' ? (  
          <ComponentSpecific />  
        ) : (  
          <ComponentIndependent />  
        );  
      case 2:  
        return (  
          <Typography variant="h6" sx={{ mt: 2 }}>  
            PCB Generation Complete! Check the console for details.  
          </Typography>  
        );  
      default:  
        return 'Unknown step';  
    }  
  };  
  
  return (  
    <Container maxWidth="md" sx={{ mt: 8 }}>  
      <Typography variant="h4" gutterBottom color="primary">  
        Generate PCB  
      </Typography>  
      <Stepper activeStep={activeStep} alternativeLabel sx={{ mt: 4 }}>  
        {steps.map((label) => (  
          <Step key={label}>  
            <StepLabel>{label}</StepLabel>  
          </Step>  
        ))}  
      </Stepper>  
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>  
        {renderStepContent()}  
        {activeStep > 0 && activeStep < steps.length && (  
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>  
            <Button disabled={activeStep === 0} onClick={handleBack}>  
              Back  
            </Button>  
            <Button variant="contained" onClick={handleNext}>  
              Next  
            </Button>  
          </Box>  
        )}  
      </Paper>  
    </Container>  
  );  
}  
  
export default GeneratePCB;  