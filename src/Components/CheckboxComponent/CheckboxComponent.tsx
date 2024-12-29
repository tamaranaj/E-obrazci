import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import { GeneralContext } from '../../context/general.context';
import { useContext } from 'react';
import { PersonalDetailsProps } from '../IDCardFormComponent/PersonalDetailsForm';
import Button from '@mui/material/Button';

export const CheckboxComponent = ({handleNext}: PersonalDetailsProps )=> {

    const{language, bgColor, necessaryDocuments, addNecessaryDocs} = useContext(GeneralContext)
  const { idCard, passport, driverLicense } = necessaryDocuments;
  const error = [idCard, passport, driverLicense].filter((v) => v).length < 1;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard" required
        error={error}>
        <FormLabel component="legend" sx={bgColor ? {color: 'black'} : {color:'white'}}>{language == 'mkd'? 'Одберете документи кои ви се потребни': 'Zgjidhni dokumentet që ju nevojiten'}</FormLabel>
        <FormGroup>
          <FormControlLabel
            sx={bgColor ? {color: 'black'} : {color:'white'}}
            control={
              <Checkbox checked={idCard} onChange={addNecessaryDocs} name="idCard" />
            }
            label={language == 'mkd' ? 'Лична карта' : 'Karta e identitetit'}
          />
          <FormControlLabel
          sx={bgColor ? {color: 'black'} : {color:'white'}}
            control={
              <Checkbox checked={passport} onChange={addNecessaryDocs} name="passport" />
            }
            label={language == 'mkd' ? 'Патна исправа' : 'Pasaporta'}
          />
          <FormControlLabel
          sx={bgColor ? {color: 'black'} : {color:'white'}}
            control={
              <Checkbox checked={driverLicense} onChange={addNecessaryDocs} name="driverLicense" />
            }
            label={language == 'mkd' ? 'Возачка дозвола' : 'Patentë shoferi'}
          />
        </FormGroup>
        <FormHelperText>{error && (language == 'mkd'?'За да продолжите морате да одберете најмалку 1 документ' : 'Për të vazhduar, duhet të zgjidhni të paktën 1 dokument')}</FormHelperText>
      </FormControl>

        <div>
        <Button
          variant="contained"
          type='submit'
          disabled = {error}
          onClick={handleNext}
          sx={{ mt: 1, mr: 1, backgroundColor: '#1976D2', borderRadius: '10px', border: 'none', textShadow: '1px 1px 1px black'}}
        >
          {language == 'mkd' ? 'Понатаму': 'Më tej'}
        </Button>
        </div>

    </Box>

    
  );
}
