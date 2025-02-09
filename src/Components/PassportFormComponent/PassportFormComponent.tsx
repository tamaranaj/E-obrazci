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

            <FormControlLabel value="3" control={<Radio sx={bgColor == true ? {color: 'black'}: {color: 'white'}} />} label={language=='mkd'? 'Промена на лични податоци': 'Ndryshimi i të dhënave personale'}  />

            <FormControlLabel value="4" control={<Radio sx={bgColor == true ? {color: 'black'}: {color: 'white'}} />} label= {language=='mkd'? 'Замена поради други причини (исполнетост или друго)': 'Zëvendësimi për arsye të tjera (përmbushje ose ndryshe)'} />
            <FormControlLabel value="5" control={<Radio sx={bgColor == true ? {color: 'black'}: {color: 'white'}} />} label= {language=='mkd'? 'Дупликат пасош (изгубен,исчезнат или украден)': 'Pasaportë e kopjuar (e humbur, e humbur ose e vjedhur)'} />

            <FormControlLabel value="6" control={<Radio sx={bgColor == true ? {color: 'black'}: {color: 'white'}} />} label= {language=='mkd'? 'Предвремена замена заради оштетеност на пасошот': 'Zëvendësimi i parakohshëm për shkak të dëmtimit të pasaportës'} />

            <FormControlLabel value="7" control={<Radio sx={bgColor == true ? {color: 'black'}: {color: 'white'}} />} label= {language=='mkd'? 'Издавање на пасош со ограничен рок на важење': 'Lëshimi i një pasaporte me një periudhë të kufizuar vlefshmërie'} />
          </RadioGroup>
        </FormControl>
          {!answered && <span className="errorMessage">{language == 'mkd'? 'Ова поле е задолжително.':"Kjo fushë është e nevojshme."}</span>}
      </fieldset>

         
          <ProcedureComponent handleChange={updatePassportDocument} state={passport.procedure}/>
          <FormDocLanguageComponent handleChange={updatePassportDocument} state={passport.cardLanguage}/>           
          <BilingualNameComponent handleChange={updatePassportDocument} state={passport.nameLanguage}/>

          <fieldset  style={bgColor == true ? {color: 'black'}: {color: 'white'}} className="reasons">
            <legend>{language=='mkd'? 'Барам податоците во образецот да бидат испишани на еден од наведените јазици и писмо:': 'Kërkoj që formulari të hartohet në një nga gjuhët dhe shkrimet e mëposhtme:'} </legend>
            
            
            <select id="named-select" name="formLanguage" onChange={updatePassportDocument} className="select" value={passport.formLanguage}>
              <option value={""}>{language=='mkd'? 'Ниту еден': 'Asnjë'}</option>
              <option value={"турски"}>{language=='mkd'? 'Турски': 'Turqisht'}</option>
              <option value={"влашки"}>{language=='mkd'? 'Влашки': 'Vllehët'}</option>
              <option value={"српски"}>{language=='mkd'? 'Српски': 'Serb'}</option>
              <option value={"ромски"}>{language=='mkd'? 'Ромски': 'Romët'}</option>
              <option value={"босански"}>{language=='mkd'? 'Босански': 'Boshnjake'}</option>
            </select>

            <span className="description">{language == 'mkd'? 'Ова поле не е задолжително.':'Kjo fushë është fakultative.'}</span>
        </fieldset>

        </div>
      
    </div>


  );
}
