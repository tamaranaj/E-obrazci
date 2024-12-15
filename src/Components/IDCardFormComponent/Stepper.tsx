import './Stepper.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { FormCreate } from './Form';
import { PersonalDetailsForm } from './PersonalDetailsForm';
import { IDCardDocument } from './IDCardDocument';

export default function StepperComponent() {
  const [activeStep, setActiveStep] = React.useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 800 }}>
        <Stepper activeStep={activeStep} orientation="vertical">
       
       <Step>
         <StepLabel>
           First step
         </StepLabel>
         <StepContent>
           <Typography><PersonalDetailsForm handleNext={handleNext}/></Typography>
         </StepContent>
       </Step>
       

       <Step>
         <StepLabel>
           Last step
         </StepLabel>
         <StepContent>
           <Typography><FormCreate handleNext={handleNext} handleBack={handleBack}/></Typography>
         </StepContent>
       </Step>
       

      </Stepper>
      {activeStep === 2 && (
        <Paper square elevation={0} sx={{ p: 3 }} className='paper'>
          <Typography>All steps completed - you&apos;re finished</Typography>
           <IDCardDocument />
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
      
    </Box>
    
  );
}
