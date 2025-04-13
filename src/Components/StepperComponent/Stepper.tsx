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
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
export default function StepperComponent({ stepperLabels, formLabels, formErrorsMessages, formPlaceholders, patterns, childrenForm, termsInfo, checkboxProps, tabsConfig, savePdf }: StepperComponentProps) {

  const { necessaryDocuments, idCardDocument, passport, terms, driverLicense, visitedTabs, handleVisitedTabs } = useContext(GeneralContext)
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate()
  const handleBackHome = () => {
    navigate('/')
  }
  const resetApp = () => {
    window.location.href = "/"
  }
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    handleVisitedTabs(activeStep + 1)
    console.log('active step', activeStep)
  };


  const handleOpenClickedTab = (step: number) => {
    if (!terms) return
    if (Object.values(necessaryDocuments).every(i => i === false)) return
    let test = visitedTabs.includes(step)

    if (test) {
      setActiveStep(step);
    }

  }

  return (
    <>
      <div className='stepperContainer'>

        <div className='stepper'>
          <Box >
            <Stepper activeStep={activeStep} orientation="vertical" >
              <Step >
                <StepLabel style={{ cursor: 'pointer' }} sx={activeStep === 0 ? { bgcolor: '#3c5668', height:'40px' ,padding: '15px',borderRadius: '10px'} : { bgcolor: 'white',color:'black' }} onClick={() => handleOpenClickedTab(0)}>
                  <span style={activeStep === 0 ? { color: 'white' } : { color:'black' }}>{stepperLabels.thirdStep}</span>
                </StepLabel>
                <StepContent >
                  <Typography component={'div'} className='stepDiv' >
                    <CheckboxComponent handleNext={handleNext} checkboxProps={checkboxProps} />
                  </Typography>
                </StepContent>
              </Step>
              <Step >
                <StepLabel style={{ cursor: 'pointer' }} sx={activeStep === 1 ? { bgcolor: '#3c5668', height:'40px' ,padding: '15px',borderRadius: '10px'} : { bgcolor: 'white',color:'black' }} onClick={() => handleOpenClickedTab(1)}>
                  <span style={activeStep === 1 ? { color: 'white' } : { color:'black' }}>{stepperLabels.secondStep}</span>
                </StepLabel>
                <StepContent >
                  <Typography component={'div'} className='stepDiv'>
                    <ChildrenComponent handleNext={handleNext} termsInfo={termsInfo} errorsMessages={formErrorsMessages} formProps={childrenForm} patterns={patterns} />
                  </Typography>
                </StepContent>
              </Step>

              <Step>
                <StepLabel style={{ cursor: 'pointer' }} sx={activeStep === 2 ? { bgcolor: '#3c5668', height:'40px' ,padding: '15px',borderRadius: '10px'} : { bgcolor: 'white',color:'black' }} onClick={() => handleOpenClickedTab(2)}>
                  <span style={activeStep === 2 ? { color: 'white' } : { color:'black' }}>{stepperLabels.sixthStep}</span>
                </StepLabel>
                <StepContent >
                  <Typography component={'div'} className='stepDiv'>
                    <TabContainer tabsConfig={tabsConfig} next={formLabels.next}/>

                    {!check(necessaryDocuments, idCardDocument, passport, driverLicense) && (
                      <div style={{display:'flex',justifyContent:'center', width: '90%'}}>
                      <Button
                      variant="contained"
                      type='button'
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1, backgroundColor: '#1976D2', borderRadius: '10px', border: 'none', textShadow: '1px 1px 1px black' }}
                    >
                      {formLabels.next}
                    </Button>
                      </div>
                      
                    )}
                    

                  </Typography>
                </StepContent>
              </Step>
              <Step >
                <StepLabel style={{ cursor: 'pointer' }} sx={activeStep === 3 ? { bgcolor: '#3c5668', height:'40px' ,padding: '15px',borderRadius: '10px'} : { bgcolor: 'white',color:'black' }} onClick={() => handleOpenClickedTab(3)}>
                  <span style={activeStep === 3 ? { color: 'white' } : { color:'black' }}>{stepperLabels.fourthStep}</span>
                </StepLabel>
                <StepContent >
                  <Typography component={'div'} className='stepDiv'>
                    <PersonalInfoComponent labels={formLabels} patterns={patterns} examples={formPlaceholders} errorsMessages={formErrorsMessages} handleNext={handleNext} />

                  </Typography>
                </StepContent>
              </Step>

            </Stepper>
            {activeStep == 4 &&
              <Paper  square elevation={0} sx={{ p: 3, backgroundColor: 'transparent' }} className='stepDiv' onClick={() => handleOpenClickedTab(4)}>
                <Typography component={'section'}>
                  <div>
                    <p>{stepperLabels.fifthStep}</p>
                  </div>

                </Typography>
                <DocumentComponent savePdf={savePdf} />
                <Button variant='contained' onClick={resetApp} sx={{ mt: 1, mr: 1, backgroundColor: '#1976D2', borderRadius: '10px', border: 'none', textShadow: '1px 1px 1px black' }}>
                  {stepperLabels.newDocument}

                </Button>
              </Paper>}
          </Box>
        </div>

        {activeStep != 4 && (<div className='fixed'><IconButton aria-label="home" size="large" className='absolute' onClick={handleBackHome}>
          <HomeIcon fontSize="inherit" sx={{ fontSize: 40, color: '#1976D2' }} />
        </IconButton></div>)}

      </div>

      
    </>
  );
}
