import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { PersonalDetailsProps } from '../PersonalDetailsFormComponent/PersonalDetailsForm';
import Button from '@mui/material/Button';
import { GeneralContext } from '../../context/general.context';

export const DocumentLanguageComponent = ({handleNext}: PersonalDetailsProps )=> {
    const {documentLanguage,language,bgColor,updateDocumentLanguage} = React.useContext(GeneralContext)
 

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateDocumentLanguage(event.target.value)
    
  };

  return (
    <>
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group" >{language==='mkd'? 'Изберете на кој јазик сакате да биде изготвено барањето': 'Zgjidhni gjuhën në të cilën dëshironi të përgatitet kërkesa'}</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={documentLanguage}
        onChange={handleChange}
        sx={bgColor ? {color: 'black'} : {color:'white'}}
      >
        <FormControlLabel value='macedonian' sx={bgColor ? {color: 'black'} : {color:'white'}}  control={<Radio  />} label="Македонски" />
        <FormControlLabel value='albanian' sx={bgColor ? {color: 'black'} : {color:'white'}} control={<Radio/>} label="Албански" />
      </RadioGroup>
    </FormControl>
    <div>
        <Button
          variant="contained"
          type='submit'
          disabled = {documentLanguage===''}
          onClick={handleNext}
          sx={{ mt: 1, mr: 1, backgroundColor: '#1976D2', borderRadius: '10px', border: 'none', textShadow: '1px 1px 1px black'}}
        >Понатаму
          {/* {language == 'mkd' ? 'Понатаму': 'Më tej'} */}
        </Button>
        </div>
    </>
    
  );
}
