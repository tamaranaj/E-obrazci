import './Stepper.css'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { DocumentComponent } from '../DocumentComponents/DocumentComponent';
import { GeneralContext } from '../../context/general.context';
import { useContext, useState } from 'react';
import { CheckboxComponent } from '../CheckboxComponent/CheckboxComponent';
import { TabContainer } from '../TabsComponent/TabContainer';
import { check } from '../HelperFunc/checkAnswers';
import { DocumentLanguageComponent } from '../DocumentLanguageComponent/DocumentLanguageComponent';
import { ChildrenComponent } from '../ChildrenComponent/ChildrenComponent';
import { StepperComponentProps } from '../../Types/interfaces';
import { PersonalInfoComponent } from '../PersonalInfoComponent/PersonalInfoComponent';

export default function StepperComponent({stepperLabels, formLabels,formErrorsMessages, formPlaceholders, patterns, childrenForm}: StepperComponentProps) {
  const { necessaryDocuments, idCardDocument,passport,driverLicense,resetContext } = useContext(GeneralContext)
  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    console.log(activeStep)
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
    resetContext()
  };

  return (
    <div className='stepperContainer'>
      
      <div className='stepper'>
        <Box >
      <Stepper activeStep={activeStep} orientation="vertical" >
        <Step >
            <StepLabel >
              <span>{stepperLabels.firstStep}</span>
            </StepLabel>
            <StepContent >
              <Typography component={'div'}>
              <DocumentLanguageComponent handleNext={handleNext} />
              </Typography>
            </StepContent>
          </Step>
        <Step >
            <StepLabel >
              <span>{stepperLabels.secondStep}</span>
            </StepLabel>
            <StepContent >
              <Typography component={'div'}>
                <ChildrenComponent handleNext={handleNext} errorsMessages={formErrorsMessages} formProps={childrenForm} patterns={patterns}/>
              </Typography>
            </StepContent>
          </Step>
          <Step >
            <StepLabel >
              <span>{stepperLabels.thirdStep}</span>
            </StepLabel>
            <StepContent >
              <Typography component={'div'}>
              <CheckboxComponent handleNext={handleNext} />
              </Typography>
            </StepContent>
          </Step>
          
          <Step>
            <StepLabel sx={{ color: 'inherit' }}>
              <span>{stepperLabels.sixthStep}</span>
            </StepLabel>
            <StepContent >
              <Typography component={'div'} sx={{width: '90%', display:'flex',flexDirection: "column", alignItems:'center'}}>
                <TabContainer />
                <div className="row">
                <Button
                  variant="contained"
                  type='button'
                  onClick={handleBack}
                  sx={{ mt: 1, mr: 1, backgroundColor: '#1976D2', borderRadius: '10px', border: 'none', textShadow: '1px 1px 1px black' }}
                >
                  {formLabels.back}
                </Button>
                </div>
                <Button
                  variant="contained"
                  type='button'
                  onClick={handleNext}
                  disabled= {check(necessaryDocuments,idCardDocument,passport,driverLicense)}
                  sx={{ mt: 1, mr: 1, backgroundColor: '#1976D2', borderRadius: '10px', border: 'none', textShadow: '1px 1px 1px black' }}
                >
                  {formLabels.next}
                </Button>

              </Typography>
            </StepContent>
          </Step>
          <Step >
            <StepLabel >
              <span>{stepperLabels.fourthStep}</span>
            </StepLabel>
            <StepContent >
              <Typography component={'div'}>
                <PersonalInfoComponent labels={formLabels} patterns={patterns} examples={formPlaceholders} errorsMessages={formErrorsMessages} handleNext={handleNext} handleBack={handleBack}/>
                
              </Typography>
            </StepContent>
          </Step>

           

        </Stepper>
        {activeStep == 5 &&
          <Paper square elevation={0} sx={{ p: 3, backgroundColor: 'transparent' }} className='paper'>
            <Typography component={'section'}>
              <div>
                <p>{stepperLabels.fifthStep}</p>
              </div>

            </Typography>
            <DocumentComponent />
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              {stepperLabels.newDocument}

            </Button>
          </Paper>}
          </Box>
      </div> 
    </div>
  );
}
