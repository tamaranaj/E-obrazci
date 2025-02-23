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
import { PersonalInfoComponent } from '../PersonalInfoComponent/PersonalInfoComponent';
import { ChildrenComponent } from '../ChildrenComponent/ChildrenComponent';

export default function StepperComponent() {
  const { language, necessaryDocuments, idCardDocument,passport,driverLicense,resetContext } = useContext(GeneralContext)
  const [activeStep, setActiveStep] = useState(0);
  const [child,setChild] = useState(false)
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    console.log(activeStep)
  };

  const handleChild = (value:boolean)=>{
    setChild(value)
  }
  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

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
              <span>{language == 'mkd' ? 'Изберете на кој јазик да биде изготвено барањето' : 'Zgjidhni në cilën gjuhë duhet të përgatitet kërkesa'}</span>
            </StepLabel>
            <StepContent >
              <Typography component={'div'}>
              <DocumentLanguageComponent handleNext={handleNext} />
              </Typography>
            </StepContent>
          </Step>
        <Step >
            <StepLabel >
              <span>{language == 'mkd' ? 'Податоци за барањето' : 'Informacion rreth aplikimit'}</span>
            </StepLabel>
            <StepContent >
              <Typography component={'div'}>
                <ChildrenComponent handleNext={handleNext} handleSetChild={handleChild} />
              </Typography>
            </StepContent>
          </Step>
          <Step >
            <StepLabel >
              <span>{language == 'mkd' ? 'Изберете документ' : 'Zgjidhni një dokument'}</span>
            </StepLabel>
            <StepContent >
              <Typography component={'div'}>
              <CheckboxComponent handleNext={handleNext} child={child} />
              </Typography>
            </StepContent>
          </Step>

          <Step>
            <StepLabel sx={{ color: 'inherit' }}>
              <span>{language == 'mkd' ? 'Податоци за барањето' : 'Informacion rreth aplikimit'}</span>
            </StepLabel>
            <StepContent >
              <Typography component={'div'}>
                <TabContainer />
                <Button
                  variant="contained"
                  type='button'
                  onClick={handleNext}
                  disabled= {check(necessaryDocuments,idCardDocument,passport,driverLicense)}
                  sx={{ mt: 1, mr: 1, backgroundColor: '#1976D2', borderRadius: '10px', border: 'none', textShadow: '1px 1px 1px black' }}
                >
                  {language == 'mkd' ? 'Понатаму' : 'Më tej'}
                </Button>

              </Typography>
            </StepContent>
          </Step>
          <Step >
            <StepLabel >
              <span>{language == 'mkd' ? 'Внесете лични податоци за подносителот на барањето' : 'Futni të dhënat personale rreth kërkuesit'}</span>
            </StepLabel>
            <StepContent >
              <Typography component={'div'}>
                <PersonalInfoComponent handleNext={handleNext}/>              
              </Typography>
            </StepContent>
          </Step>

           

        </Stepper>
        {activeStep == 5 &&
          <Paper square elevation={0} sx={{ p: 3, backgroundColor: 'transparent' }} className='paper'>
            <Typography component={'section'}>
              <div>
                <p>{language == 'mkd' ? 'Сите чекори се завршени' : 'Të gjithë hapat kanë përfunduar'}</p>
              </div>

            </Typography>
            <DocumentComponent />
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              {language == 'mkd' ? 'Ново барање' : 'Kërkesë e re'}

            </Button>
          </Paper>}
          </Box>
      </div>
        
          

      
    </div>


  );
}
