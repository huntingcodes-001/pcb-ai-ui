// src/pages/ImprovePCB.js  
import React, { useState } from 'react';  
import {  
  Container,  
  Typography,  
  Box,  
  Button,  
  Checkbox,  
  FormControlLabel,  
  FormGroup,  
  Grid,  
  Paper,  
} from '@mui/material';  
import UploadFileIcon from '@mui/icons-material/UploadFile';  
import { useSnackbar } from '../components/SnackbarContext';  
  
function ImprovePCB() {  
  const [file, setFile] = useState(null);  
  const [checks, setChecks] = useState({  
    size: false,  
    power: false,  
    performance: false,  
    cost: false,  
    compliance: false,  
  });  
  const showSnackbar = useSnackbar();  
  
  const handleFileChange = (e) => {  
    setFile(e.target.files[0]);  
  };  
  
  const handleCheckChange = (event) => {  
    setChecks({  
      ...checks,  
      [event.target.name]: event.target.checked,  
    });  
  };  
  
  const handleImprove = () => {  
    if (!file) {  
      showSnackbar('Please upload a PCB file.', 'error');  
      return;  
    }  
    // Handle PCB improvement logic here  
    console.log('Attached File:', file);  
    console.log('Selected Parameters:', checks);  
    showSnackbar('PCB Improvement Processed Successfully!', 'success');  
  };  
  
  return (  
    <Container maxWidth="md" sx={{ mt: 8 }}>  
      <Typography variant="h4" gutterBottom color="primary">  
        Improve PCB  
      </Typography>  
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>  
        <Grid container spacing={4}>  
          <Grid item xs={12} sm={6}>  
            <Button  
              variant="contained"  
              component="label"  
              startIcon={<UploadFileIcon />}  
              fullWidth  
            >  
              Upload PCB File  
              <input type="file" hidden onChange={handleFileChange} />  
            </Button>  
            {file && (  
              <Typography variant="body1" sx={{ mt: 2 }}>  
                Selected File: <strong>{file.name}</strong>  
              </Typography>  
            )}  
          </Grid>  
          <Grid item xs={12} sm={6}>  
            <Typography variant="h6" gutterBottom>  
              Parameters  
            </Typography>  
            <FormGroup>  
              {Object.keys(checks).map((key) => (  
                <FormControlLabel  
                  control={  
                    <Checkbox  
                      checked={checks[key]}  
                      onChange={handleCheckChange}  
                      name={key}  
                      color="primary"  
                    />  
                  }  
                  label={key.charAt(0).toUpperCase() + key.slice(1)}  
                  key={key}  
                />  
              ))}  
            </FormGroup>  
          </Grid>  
        </Grid>  
        <Box sx={{ mt: 4, textAlign: 'center' }}>  
          <Button  
            variant="contained"  
            color="primary"  
            size="large"  
            onClick={handleImprove}  
            disabled={!file}  
          >  
            Improve PCB  
          </Button>  
        </Box>  
      </Paper>  
    </Container>  
  );  
}  
  
export default ImprovePCB;  