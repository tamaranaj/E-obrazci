import { useContext, useState } from "react";
import { GeneralContext } from "../../context/general.context";
import "./IDCardForm.css";
import { ProcedureComponent } from "../SharedComponents/ProcedureComponent";
import { BilingualNameComponent } from "../SharedComponents/BilingualNameComponent";
import { FormDocLanguageComponent } from "../SharedComponents/FormDocLanguageComponents ";
import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";

export const IDCardForm = () => {

  const { updateIDCardDocument, bgColor ,language, idCardDocument} = useContext(GeneralContext);
 const[answered, setAnswered] = useState(false)
     const checkRadio = (event: React.ChangeEvent<HTMLInputElement> )=>{
         updateIDCardDocument(event)
         setAnswered(true)
     }

  return (
    
      <div className="cardDetailsContainer" style={bgColor == true ? {color: 'black'}: {color: 'white'}}>

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
            <FormControlLabel value="1" control={<Radio sx={bgColor == true ? {color: 'black', font:'20'}: {color: 'white', font: '20'}} />} label={language=='mkd'? 'Прв пат': 'Herën e parë'}  />

            <FormControlLabel value="2" control={<Radio sx={bgColor == true ? {color: 'black'}: {color: 'white'}} />} label= {language=='mkd'? 'Редовна замена': 'Zëvendësimi i rregullt'} />

            <FormControlLabel value="3" control={<Radio sx={bgColor == true ? {color: 'black'}: {color: 'white'}} />} label= {language=='mkd'? 'Промена на податоци (лични податоци, адреса и живеалиште)': 'Ndryshimi i të dhënave (të dhënat personale, adresa dhe vendbanimi)'} />

            <FormControlLabel value="4" control={<Radio sx={bgColor == true ? {color: 'black'}: {color: 'white'}} />} label= {language=='mkd'? 'Дупликат лична карта (изгубена или украдена)': 'ID dublikatë (e humbur ose e vjedhur)'}  />

            <FormControlLabel value="5" control={<Radio sx={bgColor == true ? {color: 'black'}: {color: 'white'}} />} label= {language=='mkd'? 'Предвремена замена заради оштетеност на личната карта': 'Ndërrimi i parakohshëm për shkak të dëmtimit të kartës së identitetit'} />
          </RadioGroup>
        </FormControl>

        {!answered && <span className='errorMessage'>{language == 'mkd'? 'Ова поле е задолжително.':"Kjo fushë është e nevojshme."}</span>}
      </fieldset>            
          
          <ProcedureComponent handleChange={updateIDCardDocument} state={idCardDocument.procedure}/>
            <FormDocLanguageComponent handleChange={updateIDCardDocument} state={idCardDocument.cardLanguage}/>
            <BilingualNameComponent handleChange={updateIDCardDocument} state={idCardDocument.nameLanguage}/>        
          

          </div>
      </div>

    
  );
};
