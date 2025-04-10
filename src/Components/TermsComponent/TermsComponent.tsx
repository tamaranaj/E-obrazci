import Checkbox from '@mui/material/Checkbox';
import './TermsComponent.css'
import { useContext } from 'react';
import { GeneralContext } from '../../context/general.context';

type TermsProp ={
  info:string,
  error: string
}

export const TermsComponent = ({info, error}: TermsProp)=> {
    const {terms, updateSetTerms}= useContext(GeneralContext)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateSetTerms(event.target.checked);
  };

  return (
    <div className='termsContainer'>
        <div className='termsCheckbox'>
        <Checkbox
        checked={terms}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
    />
    <span className='terms'>{info}</span>
    </div>
    

    {!terms && <span className='error'>{error}</span> }
    
    
    </div>
    
  );
}
