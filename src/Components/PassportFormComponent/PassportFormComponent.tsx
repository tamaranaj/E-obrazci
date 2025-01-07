import { useContext, useState } from "react";
import { GeneralContext } from "../../context/general.context";
import "./Passport.css";
import { BilingualNameComponent } from "../SharedComponents/BilingualNameComponent";
import { FormDocLanguageComponent } from "../SharedComponents/FormDocLanguageComponents ";
import { ProcedureComponent } from "../SharedComponents/ProcedureComponent";
import { FormControl, RadioGroup, FormControlLabel, Radio } from "@mui/material";


export const PassportForm = () => {

   const { updatePassportDocument,bgColor, language, passport } = useContext(GeneralContext);
 const[answered, setAnswered] = useState(false)
     const checkRadio = (event: React.ChangeEvent<HTMLInputElement> )=>{
         updatePassportDocument(event)
         setAnswered(true)
     }
  return (

    <div className="cardDetailsContainer" style={bgColor == true ? { color: 'black' } : { color: 'white' }}>

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
            <FormControlLabel value="1" control={<Radio sx={bgColor == true ? {color: 'black'}: {color: 'white'}} />} label={language=='mkd'? 'Прв пат': 'Herën e parë'}  />

            <FormControlLabel value="2" control={<Radio sx={bgColor == true ? {color: 'black'}: {color: 'white'}} />} label= {language=='mkd'? 'Редовна замена': 'Zëvendësimi i rregullt'} />

            <FormControlLabel value="3" control={<Radio sx={bgColor == true ? {color: 'black'}: {color: 'white'}} />} label={language=='mkd'? 'Промена на податоци (лични податоци, адреса и живеалиште)': 'Ndryshimi i të dhënave (të dhënat personale, adresa dhe vendbanimi)'}  />

            <FormControlLabel value="4" control={<Radio sx={bgColor == true ? {color: 'black'}: {color: 'white'}} />} label= {language=='mkd'? 'Замена поради други причини (исполнетост или друго)': 'Zëvendësimi për arsye të tjera (përmbushje ose ndryshe)'} />

            <FormControlLabel value="5" control={<Radio sx={bgColor == true ? {color: 'black'}: {color: 'white'}} />} label= {language=='mkd'? 'Предвремена замена заради оштетеност на пасошот': 'Zëvendësimi i parakohshëm për shkak të dëmtimit të pasaportës'} />

            <FormControlLabel value="6" control={<Radio sx={bgColor == true ? {color: 'black'}: {color: 'white'}} />} label= {language=='mkd'? 'Предвремена замена заради оштетеност на пасошот': 'Zëvendësimi i parakohshëm për shkak të dëmtimit të pasaportës'} />
          </RadioGroup>
        </FormControl>
          {!answered && <span className="errorMessage">{language == 'mkd'? 'Ова поле е задолжително.':"Kjo fushë është e nevojshme."}</span>}
      </fieldset>

         
          <ProcedureComponent handleChange={updatePassportDocument} state={passport.procedure}/>
            <FormDocLanguageComponent handleChange={updatePassportDocument} state={passport.cardLanguage}/>
            
            
          <BilingualNameComponent handleChange={updatePassportDocument} state={passport.nameLanguage}/>

        </div>
      
    </div>


  );
}
