import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import { GeneralContext } from '../../context/general.context';
import { useContext } from 'react';
import Button from '@mui/material/Button';
import { CheckboxProps } from '../HelperFunc/checkboxProps';
import './CheckboxComponent.css'
export interface CheckboxComponentProps{
  handleNext: ()=>void,
  checkboxProps: CheckboxProps
  
}
export const CheckboxComponent = ({handleNext,checkboxProps}: CheckboxComponentProps )=> {
  const{necessaryDocuments,addNecessaryDocs} = useContext(GeneralContext)
  const { idCard, passport, driverLicense } = necessaryDocuments;
  const error = ![idCard, passport, driverLicense].some((v) =>v)
  console.log(error)

  return (
    <div className="checkboxContainer" >
      <Box >
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard" required
        error={error}>
        <FormLabel component="legend">{checkboxProps.label}</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={idCard} onChange={addNecessaryDocs} name="idCard" />
            }
            label={checkboxProps.idCard}
          />
          <FormControlLabel
            control={
              <Checkbox checked={passport} onChange={addNecessaryDocs} name="passport" />
            }
            label={checkboxProps.passport}
          />
          <FormControlLabel
            control={
              <Checkbox checked={driverLicense} onChange={addNecessaryDocs} name="driverLicense" />
            }
            label={checkboxProps.driverLicense}
          />
        </FormGroup>
        <FormHelperText>{error && checkboxProps.error}</FormHelperText>
      </FormControl>

        <div>
        <Button
          variant="contained"
          type='submit'
          disabled = {error}
          onClick={handleNext}
          sx={{ mt: 1, mr: 1, backgroundColor: '#1976D2', borderRadius: '10px', border: 'none', textShadow: '1px 1px 1px black'}}
        >
          {checkboxProps.next}
        </Button>
        </div>

    </Box>
      
    </div>
    

    
  );
}
