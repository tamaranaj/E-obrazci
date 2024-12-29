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
import { IDCardForm } from '../IDCardFormComponent/IDCardForm';
import { PersonalDetailsForm } from '../IDCardFormComponent/PersonalDetailsForm';
import { IDCardDocument } from '../DocumentComponents/IDCardDocument';
import { GeneralContext } from '../../context/general.context';
import { useContext } from 'react';
import { CheckboxComponent } from '../CheckboxComponent/CheckboxComponent';

export default function StepperComponent() {
  const {bgColor, language} = useContext(GeneralContext)
  const [activeStep, setActiveStep] = React.useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className='stepperContainer'>
        <Box >
        <Stepper activeStep={activeStep} orientation="vertical" >

        <Step >
         <StepLabel >
           <span style={bgColor == true ? {color: 'black'} : {color:'white'}}>{language == 'mkd'? 'Изберете документ': 'Zgjidhni një dokument'}</span>
         </StepLabel>
         <StepContent >
           <Typography component={'div'}>
           
           <CheckboxComponent handleNext={handleNext}/>
            </Typography>
         </StepContent>
       </Step>
       
       <Step >
         <StepLabel >
           <span style={bgColor == true ? {color: 'black'} : {color:'white'}}>{language == 'mkd' ? 'Податоци за поднесителот на барањето': 'Informacion rreth aplikantit'}</span>
         </StepLabel>
         <StepContent >
           <Typography component={'div'}>
           
           <PersonalDetailsForm handleNext={handleNext}/>
            </Typography>
         </StepContent>
       </Step>
       

       <Step>
         <StepLabel sx={{color: 'inherit'}}>
         <span style={bgColor == true ? {color: 'black'} : {color:'white'}}>Втор чекор</span>
         </StepLabel>
         <StepContent >
           <Typography component={'div'}>
           <IDCardForm handleNext={handleNext}/>
            </Typography>
         </StepContent>
       </Step>
       

      </Stepper>
      {activeStep === 2 && (
        <Paper square elevation={0} sx={{ p: 3 , backgroundColor:'transparent'}} className='paper'>
          <Typography component={'section'}>
            <div>
              <p style={bgColor == true ? {color: 'black'} : {color:'white'}}>Сите чекори се завршени - Вашето барање е подготвено</p>
            </div>
            
            </Typography>
           <IDCardDocument />
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Ново барање
          </Button>
        </Paper>
      )}
      
    </Box>
    </div>
    
    
  );
}
