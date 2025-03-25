import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useContext } from 'react';
import { GeneralContext } from '../../context/general.context';



interface DatePickerComponentProps{
  pickerLabel: string,
  hasError: boolean,
  errorMsg:string
}



export const DatePickerComponent = ({pickerLabel, hasError, errorMsg}: DatePickerComponentProps)=>{
  const {personalDetailsID,necessaryDocuments, haveChild, handleDate} = useContext(GeneralContext)
  const getFormattedDate = () => {
    if (necessaryDocuments.idCard && haveChild) {
        const date = new Date();
        const year = date.getFullYear() - 15;
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return dayjs(`${day}-${month}-${year}`);
    } else if (necessaryDocuments.passport && haveChild) {
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return dayjs(`${day}-${month}-${year}`);
    } else {
        const date = new Date();
        const year = date.getFullYear() - 18;
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return dayjs(`${day}-${month}-${year}`);
    }
};
  const min = dayjs('01-01-1930')

  const setDate = (value:Dayjs| null)=>{
    handleDate(value)
  }
 return (
  <div>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker
      
          label={pickerLabel}
          value={personalDetailsID.birth}
          name='birth'
          onChange={(value) => setDate(value)}
          format='DD/MM/YYYY'
          maxDate={getFormattedDate()}
          minDate={min}
        
        />
      </DemoContainer>
    </LocalizationProvider>
    {hasError && (<span className='errorMessage'>{errorMsg}</span>)}
  </div>
    
 
 )
}
