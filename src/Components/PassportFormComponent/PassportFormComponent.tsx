import { useContext } from "react";
import { GeneralContext } from "../../context/general.context";
import { BilingualNameComponent } from "../SharedComponents/BilingualNameComponent";
import { FormDocLanguageComponent } from "../SharedComponents/FormDocLanguageComponents ";
import { ProcedureComponent } from "../SharedComponents/ProcedureComponent";
import { FormControl, RadioGroup, FormControlLabel, Radio, Button } from "@mui/material";
import { DocumentProps, LanguageForm } from "../HelperFunc/tabContainerProps";

interface PassportFormProps{
  tabsProps: (newValue: string) => void
   passportConfig: DocumentProps,
    languageFormProps: LanguageForm,
    errorRequired:string,
    notRequired:string
}

export const PassportForm = ({tabsProps,passportConfig,errorRequired,notRequired,languageFormProps}: PassportFormProps) => {

   const { updatePassportDocument, language, passport,documentLanguage, tabs } = useContext(GeneralContext);
 const index = tabs.indexOf('passport')
     const checkRadio = (event: React.ChangeEvent<HTMLInputElement> )=>{
         updatePassportDocument(event)
     }

     const handleNext  = ()=>{
      if(passport.reason ==='' || passport.procedure === ''){
        return
      }else{
        tabsProps(index === 0? '2': '3')
      }
    }
  return (

    <div className="cardDetailsContainer">

        <div className="grid">

        <fieldset className="reasons"  >
        <legend>{passportConfig.label}</legend>
        <FormControl>
          
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="reason"
            value={passport.reason}
            onChange={(event)=>checkRadio(event)}
            >
              {passportConfig.reasons.map((item,index)=>(
                  <FormControlLabel value={index+1} key={`passport${index}`} control={<Radio/>} label={item}  />

              ))}
            
          </RadioGroup>
        </FormControl>

          {passport.reason ==='' && <span className="errorMessage">{errorRequired}</span>}
      </fieldset>

         <fieldset className="reasons">
         <ProcedureComponent procedureConfig={passportConfig.procedure} handleChange={updatePassportDocument} state={passport.procedure}/>
         {passport.procedure ==='' && <span className="errorMessage">{errorRequired}</span>}
         </fieldset>
          
          {documentLanguage==='мк' && (<FormDocLanguageComponent notRequired={notRequired} label={languageFormProps.formDocLabel} handleChange={updatePassportDocument} state={passport.cardLanguage}/>)}

          {documentLanguage==='мк' && (<BilingualNameComponent notRequired={notRequired} label={languageFormProps.bilingualNameLabel} handleChange={updatePassportDocument} state={passport.nameLanguage}/>)}     
          
          {documentLanguage==='мк' && (<fieldset className="reasons">
            <legend>{passportConfig?.formLanguage}</legend>
            
            
            <select id="named-select" name="formLanguage" onChange={updatePassportDocument} className="select" value={passport.formLanguage}>
              <option value={""}>Ниту еден</option>
              <option value={"турски"}>Tурски</option>
              <option value={"влашки"}>Влашки</option>
              <option value={"српски"}>Српски</option>
              <option value={"ромски"}>Ромски</option>
              <option value={"босански"}>Босански</option>
            </select>

            <span className="description">{notRequired}</span>
            </fieldset>)
          }     

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
}
