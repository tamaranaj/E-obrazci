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
import { ChildrenComponent } from '../ChildrenComponent/ChildrenComponent';
import { StepperComponentProps } from '../../Types/interfaces';
import { PersonalInfoComponent } from '../PersonalInfoComponent/PersonalInfoComponent';
import { useNavigate } from 'react-router-dom';

export default function StepperComponent({ stepperLabels, formLabels, formErrorsMessages, formPlaceholders, patterns, childrenForm, termsInfo, checkboxProps, tabsConfig }: StepperComponentProps) {

  const { necessaryDocuments, idCardDocument, passport, terms,driverLicense,visitedTabs,handleVisitedTabs, resetContext } = useContext(GeneralContext)
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate()
  const handleBackHome=()=>{
    navigate('/')
  }
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    handleVisitedTabs(activeStep+1)
    console.log('active step',activeStep)
  };

  const handleReset = () => {
    resetContext()
    setActiveStep(0);
    
  };

  const handleOpenClickedTab = (step:number)=>{
    if(!terms)return
    if(Object.values(necessaryDocuments).every(i=> i===false))return
    let test = visitedTabs.includes(step)
    
    if(test){
      setActiveStep(step);
    }
    
  }

  return (
    <div className='stepperContainer'>

      <div className='stepper'>
        <Box >
          <Stepper activeStep={activeStep} orientation="vertical" >
            <Step >
              <StepLabel style={{cursor: 'pointer'}} sx={activeStep===0?{bgcolor:'#6f9ecd'}: {bgcolor:'white'}}  onClick={()=>handleOpenClickedTab(0)}>
                <span>{stepperLabels.thirdStep}</span>
              </StepLabel>
              <StepContent >
                <Typography component={'div'}>
                  <CheckboxComponent handleNext={handleNext} checkboxProps={checkboxProps} />
                </Typography>
              </StepContent>
            </Step>
            <Step >
              <StepLabel  style={{cursor: 'pointer'}} sx={activeStep===1?{bgcolor:'#6f9ecd'}: {bgcolor:'white'}} onClick={()=>handleOpenClickedTab(1)}>
                <span>{stepperLabels.secondStep}</span>
              </StepLabel>
              <StepContent >
                <Typography component={'div'}>
                  <ChildrenComponent handleNext={handleNext} termsInfo={termsInfo} errorsMessages={formErrorsMessages} formProps={childrenForm} patterns={patterns} />
                </Typography>
              </StepContent>
            </Step>

            <Step>
              <StepLabel  style={{cursor: 'pointer'}} sx={activeStep===2?{bgcolor:'#6f9ecd'}: {bgcolor:'white'}} onClick={()=>handleOpenClickedTab(2)}>
                <span>{stepperLabels.sixthStep}</span>
              </StepLabel>
              <StepContent >
                <Typography component={'div'} sx={{ width: '90%', display: 'flex', flexDirection: "column", alignItems: 'center' }}>
                  <TabContainer tabsConfig={tabsConfig} />
                  
                  <Button
                    variant="contained"
                    type='button'
                    onClick={handleNext}
                    disabled={check(necessaryDocuments, idCardDocument, passport, driverLicense)}
                    sx={{ mt: 1, mr: 1, backgroundColor: '#1976D2', borderRadius: '10px', border: 'none', textShadow: '1px 1px 1px black' }}
                  >
                    {formLabels.next}
                  </Button>

                </Typography>
              </StepContent>
            </Step>
            <Step >
              <StepLabel  style={{cursor: 'pointer'}} sx={activeStep===3?{bgcolor:'#6f9ecd'}: {bgcolor:'white'}} onClick={()=>handleOpenClickedTab(3)}>
                <span>{stepperLabels.fourthStep}</span>
              </StepLabel>
              <StepContent >
                <Typography component={'div'}>
                  <PersonalInfoComponent labels={formLabels} patterns={patterns} examples={formPlaceholders} errorsMessages={formErrorsMessages} handleNext={handleNext}  />

                </Typography>
              </StepContent>
            </Step>



          </Stepper>
          {activeStep == 4 &&
            <Paper square elevation={0} sx={{ p: 3, backgroundColor: 'transparent' }} className='paper' onClick={()=>handleOpenClickedTab(4)}>
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

      <div className='relative'><button className='absolute' onClick={handleBackHome}>Home</button></div>
    </div>
  );
}
