import { useContext } from "react"
import { GeneralContext } from "../../context/general.context"
import { SharedComponentProps } from "../../Types/interfaces"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';


export const ProcedureComponent = ({handleChange, state}: SharedComponentProps)=>{
    const{language} = useContext(GeneralContext)
    
    const checkRadio = (event: React.ChangeEvent<HTMLInputElement> )=>{
        handleChange(event)
    }
    return (

      <>
        <legend>{language=='mkd'? 'Барам личната карта да биде издадена во:': 'Kërkoj që të lëshohet letërnjoftimi:'}</legend>
        <FormControl>
          
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="procedure"
            value={state}
            onChange={(event)=>checkRadio(event)}
            >
            <FormControlLabel value="редовна" control={<Radio/>} label={language=='mkd'? 'Редовна постапка': 'Procedurë e rregullt'}  />
            <FormControlLabel value="итна" control={<Radio/>} label= {language=='mkd'? 'Итна постапка': 'Procedurë urgjente'} />
          </RadioGroup>
        </FormControl>

      </>

         
          
    )
}
