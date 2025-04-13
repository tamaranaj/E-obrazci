import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { ProcedureConfig } from "../HelperFunc/tabContainerProps";

interface ProcedureComponentProps{
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
    state: string,
    procedureConfig:ProcedureConfig

}

export const ProcedureComponent = ({handleChange, state, procedureConfig}: ProcedureComponentProps)=>{
    
    const checkRadio = (event: React.ChangeEvent<HTMLInputElement> )=>{
        handleChange(event)
    }
    return (

      <>
        <legend>{procedureConfig.label}</legend>
        <FormControl>
          
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="procedure"
            value={state}
            onChange={(event)=>checkRadio(event)}
            >
            <FormControlLabel value="редовна" control={<Radio/>} label={procedureConfig.regular}  />
            <FormControlLabel value="итна" control={<Radio/>} label= {procedureConfig.fast} />
          </RadioGroup>
        </FormControl>

      </>

         
          
    )
}
