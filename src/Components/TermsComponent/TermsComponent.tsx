import Checkbox from '@mui/material/Checkbox';
import './TermsComponent.css'
import { useContext } from 'react';
import { GeneralContext } from '../../context/general.context';

export const TermsComponent = ()=> {
    const {terms, updateSetTerms, language}= useContext(GeneralContext)
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
    {language==='mkd'? (<span style={{textAlign:'justify'}}>Подносителот на барањето е согласен неговите/нивните лични податоци да се корисатат во постапката за остварување на правото пред надлежните органи за прибавување на СИТЕ документи означени со ѕвезда(*) во барањето.</span>
    ) : (<span>Parashtruesi i kërkesës pajtohet të dhënat e tij/tyre personale të shfrityohen në procedurën për realiyimin e të drejtës para organeve kompetente për sigurimin e të GJITHA dokumenteve të nënviyuara me yll(*) nga kërkese.
    </span>)}
    </div>
    

    {!terms && language==='mkd'? <span className='error'>Ова поле е задолжително.</span> : !terms && language==='alb' &&
    <span className='error'>Kjo fushë është e detyrueshme.</span>}
    
    
    </div>
    
  );
}
