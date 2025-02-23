import { useContext, useState } from "react";
import { GeneralContext } from "../../context/general.context";
import "./Passport.css";
import { BilingualNameComponent } from "../SharedComponents/BilingualNameComponent";
import { FormDocLanguageComponent } from "../SharedComponents/FormDocLanguageComponents ";
import { ProcedureComponent } from "../SharedComponents/ProcedureComponent";
import { FormControl, RadioGroup, FormControlLabel, Radio } from "@mui/material";


export const PassportForm = () => {

   const { updatePassportDocument, language, passport,documentLanguage } = useContext(GeneralContext);
 const[answered, setAnswered] = useState(false)
     const checkRadio = (event: React.ChangeEvent<HTMLInputElement> )=>{
         updatePassportDocument(event)
         setAnswered(true)
     }
  return (

    <div className="cardDetailsContainer">

        <div className="grid">

        <fieldset className="reasons"  >
        <legend>{language == 'mkd' ? 'Причина за барање:' : 'Arsyeja e kërkesës:'}</legend>
        <FormControl>
          
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="reason"
            value={passport.reason}
            onChange={(event)=>checkRadio(event)}
            >
            <FormControlLabel value="1" control={<Radio/>} label={language=='mkd'? 'Прв пат': 'Herën e parë'}  />

            <FormControlLabel value="2" control={<Radio/>} label= {language=='mkd'? 'Редовна замена': 'Zëvendësimi i rregullt'} />

            <FormControlLabel value="3" control={<Radio/>} label={language=='mkd'? 'Промена на лични податоци': 'Ndryshimi i të dhënave personale'}  />

            <FormControlLabel value="4" control={<Radio/>} label= {language=='mkd'? 'Замена поради други причини (исполнетост или друго)': 'Zëvendësimi për arsye të tjera (përmbushje ose ndryshe)'} />
            <FormControlLabel value="5" control={<Radio/>} label= {language=='mkd'? 'Дупликат пасош (изгубен,исчезнат или украден)': 'Pasaportë e kopjuar (e humbur, e humbur ose e vjedhur)'} />

            <FormControlLabel value="6" control={<Radio/>} label= {language=='mkd'? 'Предвремена замена заради оштетеност на пасошот': 'Zëvendësimi i parakohshëm për shkak të dëmtimit të pasaportës'} />

            <FormControlLabel value="7" control={<Radio/>} label= {language=='mkd'? 'Издавање на пасош со ограничен рок на важење': 'Lëshimi i një pasaporte me një periudhë të kufizuar vlefshmërie'} />
          </RadioGroup>
        </FormControl>
          {!answered && <span className="errorMessage">{language == 'mkd'? 'Ова поле е задолжително.':"Kjo fushë është e nevojshme."}</span>}
      </fieldset>

         
          <ProcedureComponent handleChange={updatePassportDocument} state={passport.procedure}/>
          {documentLanguage==='macedonian' && (<FormDocLanguageComponent handleChange={updatePassportDocument} state={passport.cardLanguage}/>)}
          {documentLanguage==='macedonian' && (<BilingualNameComponent handleChange={updatePassportDocument} state={passport.nameLanguage}/>)}     
          
          {documentLanguage==='macedonian' && (<fieldset className="reasons">
            <legend>Барам податоците во образецот да бидат испишани на еден од наведените јазици и писмо:</legend>
            
            
            <select id="named-select" name="formLanguage" onChange={updatePassportDocument} className="select" value={passport.formLanguage}>
              <option value={""}>Ниту еден</option>
              <option value={"турски"}>Tурски</option>
              <option value={"влашки"}>Влашки</option>
              <option value={"српски"}>Српски</option>
              <option value={"ромски"}>Ромски</option>
              <option value={"босански"}>Босански</option>
            </select>

            <span className="description">Ова поле не е задолжително.</span>
            </fieldset>)
          }     

        </div>
      
    </div>


  );
}
