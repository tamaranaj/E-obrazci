import { useContext } from "react";
import { GeneralContext } from "../../context/general.context";
import "./IDCardForm.css";
import { ProcedureComponent } from "../SharedComponents/ProcedureComponent";
import { BilingualNameComponent } from "../SharedComponents/BilingualNameComponent";
import { FormDocLanguageComponent } from "../SharedComponents/FormDocLanguageComponents ";
import { Button, FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { TabsComponentChildrenProps } from "../TabsComponent/TabContainer";


export const IDCardForm = ({tabsProps}: TabsComponentChildrenProps) => {

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
          <legend>{language=='mkd'? 'Причина за барање:':'Arsyeja e kërkesës:'}</legend>
        <FormControl>
          
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="reason"
            value={idCardDocument.reason}
            onChange={(event)=>checkRadio(event)}
            >
            <FormControlLabel value="1" control={<Radio/>} label={language=='mkd'? 'Прв пат': 'Herën e parë'}  />

            <FormControlLabel value="2" control={<Radio />} label= {language=='mkd'? 'Редовна замена': 'Zëvendësimi i rregullt'} />

            <FormControlLabel value="3" control={<Radio />} label= {language=='mkd'? 'Промена на податоци (лични податоци, адреса и живеалиште)': 'Ndryshimi i të dhënave (të dhënat personale, adresa dhe vendbanimi)'} />

            <FormControlLabel value="4" control={<Radio />} label= {language=='mkd'? 'Дупликат лична карта (изгубена или украдена)': 'ID dublikatë (e humbur ose e vjedhur)'}  />

            <FormControlLabel value="5" control={<Radio/>} label= {language=='mkd'? 'Предвремена замена заради оштетеност на личната карта': 'Ndërrimi i parakohshëm për shkak të dëmtimit të kartës së identitetit'} />
          </RadioGroup>
        </FormControl>

        {idCardDocument.reason === '' && <span className='errorMessage'>{language == 'mkd'? 'Ова поле е задолжително.':"Kjo fushë është e nevojshme."}</span>}
      </fieldset>            
          
          <fieldset className="reasons">
            
          <ProcedureComponent handleChange={updateIDCardDocument} state={idCardDocument.procedure}/>
          {idCardDocument.procedure === '' && <span className="errorMessage">{language == 'mkd'? 'Ова поле е задолжително.':"Kjo fushë është e nevojshme."}</span>}
          </fieldset>
          
          {documentLanguage==='macedonian' && (<FormDocLanguageComponent handleChange={updateIDCardDocument} state={idCardDocument.cardLanguage}/>)}

          {documentLanguage==='macedonian' && (<BilingualNameComponent handleChange={updateIDCardDocument} state={idCardDocument.nameLanguage}/>  )}
            
                  
          

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
