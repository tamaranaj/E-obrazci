import { useContext } from "react";
import { GeneralContext } from "../../context/general.context";
import "./IDCardForm.css";
import { ProcedureComponent } from "../SharedComponents/ProcedureComponent";
import { BilingualNameComponent } from "../SharedComponents/BilingualNameComponent";
import { FormDocLanguageComponent } from "../SharedComponents/FormDocLanguageComponents ";
import { Button, FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";

import { DocumentProps, LanguageForm } from "../HelperFunc/tabContainerProps";

interface IdCardFormProps{
  tabsProps: (newValue: string) => void
  idConfig: DocumentProps,
  languageFormProps: LanguageForm,
  errorRequired:string,
  notRequired:string
}

export const IDCardForm = ({tabsProps, idConfig,languageFormProps,errorRequired,notRequired}: IdCardFormProps) => {

  const { updateIDCardDocument,language, idCardDocument,documentLanguage,tabs} = useContext(GeneralContext);
     const checkRadio = (event: React.ChangeEvent<HTMLInputElement> )=>{
         updateIDCardDocument(event)
     }
     const index = tabs.indexOf('idCard')
      const handleNext  = ()=>{
        if(idCardDocument.reason ==='' || idCardDocument.procedure === ''){
          return
        }else{
          tabsProps(index === 0? '2': '3')
        }
      }
  return (
    
      <div className="cardDetailsContainer" >

          <div className="grid">
          <fieldset className="reasons"  >
          <legend>{idConfig.label}</legend>
        <FormControl>
          
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="reason"
            value={idCardDocument.reason}
            onChange={(event)=>checkRadio(event)}
            >
              {idConfig.reasons.map((reason, index)=>(
                <FormControlLabel value={index+1} key={`reason${index}`} control={<Radio/>} label={reason}  />
              ))}
          
          </RadioGroup>
        </FormControl>

        {idCardDocument.reason === '' && <span className='errorMessage'>{errorRequired}</span>}
      </fieldset>            
          
          <fieldset className="reasons">
            
          <ProcedureComponent handleChange={updateIDCardDocument} procedureConfig={idConfig.procedure} state={idCardDocument.procedure}/>
          {idCardDocument.procedure === '' && <span className="errorMessage">{errorRequired}</span>}
          </fieldset>
          
          {documentLanguage==='мк' && (<FormDocLanguageComponent label={languageFormProps.formDocLabel} notRequired={notRequired} handleChange={updateIDCardDocument} state={idCardDocument.cardLanguage}/>)}

          {documentLanguage==='мк' && (<BilingualNameComponent notRequired={notRequired} label={languageFormProps.bilingualNameLabel} handleChange={updateIDCardDocument} state={idCardDocument.nameLanguage}/>  )}
            
                  
          

          </div>
          {tabs.length > 1 && index+1!=tabs.length &&(<Button
                    variant="contained"
                    type='button'
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1, backgroundColor: '#1976D2', borderRadius: '10px', border: 'none', textShadow: '1px 1px 1px black' }}
                >
                    {language==='mkd'? 'Следно': 'Tjetra'}
                </Button>)}
          
      </div>

    
  );
};
