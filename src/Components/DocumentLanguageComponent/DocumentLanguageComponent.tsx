import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { GeneralContext } from '../../context/general.context';
import { useContext } from 'react';
import { StepperProps } from '../../Types/interfaces';

export const DocumentLanguageComponent = ({handleNext}: StepperProps )=> {
  const {documentLanguage,language,updateDocumentLanguage} = useContext(GeneralContext)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateDocumentLanguage(event.target.value)
  };

  return (
    <>
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={documentLanguage}
        onChange={handleChange}
      
      >
        <FormControlLabel value='macedonian' control={<Radio  />} label={language==='mkd'?"Македонски":"Maqedonase"} />
        <FormControlLabel value='albanian' control={<Radio/>} label={language==='mkd'?"Албански":"Shqiptare"} />
      </RadioGroup>
    </FormControl>
    <div>
        <Button
          variant="contained"
          type='submit'
          disabled = {documentLanguage===''}
          onClick={handleNext}
          sx={{ mt: 1, mr: 1, backgroundColor: '#1976D2', borderRadius: '10px', border: 'none', textShadow: '1px 1px 1px black'}}
        >
          {language == 'mkd' ? 'Понатаму': 'Më tej'}
        </Button>
        </div>
    </>
    
  );
}
