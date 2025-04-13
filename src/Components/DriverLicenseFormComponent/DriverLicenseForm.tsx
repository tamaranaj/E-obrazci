import { useContext } from 'react'
import './DriverLicenseForm.css'
import { GeneralContext } from '../../context/general.context'
import { BilingualNameComponent } from '../SharedComponents/BilingualNameComponent'
import { ProcedureComponent } from '../SharedComponents/ProcedureComponent'
import { Button, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'

import { DocumentProps, LanguageForm } from '../HelperFunc/tabContainerProps'

interface DriverLicenseFormComponentProps{
  tabsProps: (newValue: string) => void
   dLicenseConfig: DocumentProps,
      languageFormProps: LanguageForm,
      errorRequired:string,
      notRequired:string,
      next:string
}

export const DriverLicenseForm = ({tabsProps, notRequired,next,errorRequired,dLicenseConfig,languageFormProps}: DriverLicenseFormComponentProps) => {
    const { driverLicense, updateDriverLicense,documentLanguage,tabs } = useContext(GeneralContext)
    const index = tabs.indexOf('driverLicense')
    const checkRadio = (event: React.ChangeEvent<HTMLInputElement> )=>{
        updateDriverLicense(event)
  
    }
    const handleNext  = ()=>{
      if(driverLicense.reason ==='' || driverLicense.procedure ===''){
        return
      }else{

        tabsProps(index === 0? '2': '3')
      }
    }
    return (
        <div className='dlWrapper'>
           <fieldset className="reasons"  >
           <legend>{dLicenseConfig.label}</legend>
        <FormControl>
          
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="reason"
            value={driverLicense.reason}
            onChange={(event)=>checkRadio(event)}
            >

            {dLicenseConfig.reasons.map((item,index)=>(

              <FormControlLabel value={index+1} className="formRadioLabel" control={<Radio/>} label={item} key={`dLicense${index}`} />
            ))}

            
          </RadioGroup>
        </FormControl>

        {driverLicense.reason ==='' && <span className='errorMessage'>{errorRequired}</span>}
        </fieldset>
        
      <fieldset className="reasons">
      <ProcedureComponent procedureConfig={dLicenseConfig.procedure} handleChange={updateDriverLicense} state={driverLicense.procedure}/>
      {driverLicense.procedure ==='' && <span className="errorMessage">{errorRequired}</span>}
      </fieldset>
    

        {documentLanguage==='мк' && (<BilingualNameComponent notRequired={notRequired} label={languageFormProps.bilingualNameLabel} handleChange={updateDriverLicense} state={driverLicense.nameLanguage}/> )}
          
        {tabs.length > 1 && index+1!=tabs.length &&(<Button
                    variant="contained"
                    type='button'
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1, backgroundColor: '#1976D2', borderRadius: '10px', border: 'none', textShadow: '1px 1px 1px black', }}
                >
                    {next}
                </Button>)}
                 
        </div>
    )
}
