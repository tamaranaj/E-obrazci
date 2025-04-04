import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useContext } from 'react';
import { GeneralContext } from '../../context/general.context';
// import { useForm } from 'react-hook-form';



interface DatePickerComponentProps{
  pickerLabel: string,
  errorMsg:string,
  handleHasBirth: (value: boolean) => void
}




export const DatePickerComponent = ({pickerLabel, errorMsg, handleHasBirth}: DatePickerComponentProps)=>{
  const {personalDetailsID,necessaryDocuments, haveChild, handleDate, errorBirth} = useContext(GeneralContext)
const getFormattedDate = (): Dayjs => {
  const date = new Date();
  let yearOffset = 0;
  if (necessaryDocuments.idCard && haveChild) {
    yearOffset = 15;
  } else if (necessaryDocuments.passport && haveChild) {
    yearOffset = 0;
  } else {
    yearOffset = 18;
  }
  let year = date.getFullYear() - yearOffset;
  let month = String(date.getMonth() + 1).padStart(2, '0');
  let day = String(date.getDate()).padStart(2, '0');
  return dayjs(`${year}-${month}-${day}`);  
};
  const min = dayjs('01-01-1930')
  const max = getFormattedDate()
  const setDate = (value:Dayjs| null)=>{
    if(value ===null){
      handleHasBirth(true)
    }
    handleHasBirth(false)
    handleDate(value)
    
  }
 return (
  <div className='column'>
    <LocalizationProvider  dateAdapter={AdapterDayjs}>
      <DemoContainer  components={['DatePicker']}>
        <DatePicker
      
          label={pickerLabel}
          value={personalDetailsID.birth}
          name='birth'
          onChange={(value) => setDate(value)}
          format='DD/MM/YYYY'
          maxDate={max}
          minDate={min}
        
        />
      </DemoContainer>
    </LocalizationProvider>
    {errorBirth && (<span className='errorMessage'>{errorMsg}</span>)}
  </div>
    
 
 )
}
