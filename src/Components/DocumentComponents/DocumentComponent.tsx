import { useContext } from 'react';
import { GeneralContext } from '../../context/general.context';
import Button from '@mui/material/Button';
import { generatePassportDocument } from './PassportDocument';
import { generateIdCardDocument } from './IdCardDocument';


export const DocumentComponent = () => {
  const{personalDetailsID,idCardDocument,passport, necessaryDocuments,language} = useContext(GeneralContext)
  let date= `${new Date().getDate()} - ${new Date().getMonth() + 1} - ${new Date().getFullYear()}`
  const handleCreateDocuments = ()=>{
    if(necessaryDocuments.idCard===true){
      generateIdCardDocument(idCardDocument,personalDetailsID,date)
    }
    if(necessaryDocuments.passport===true){
      generatePassportDocument(personalDetailsID,passport,date)
    }
  }
  
  return(
    <Button onClick={handleCreateDocuments} sx={{ mt: 1, mr: 1 }}>
      {language =='mkd'? 'Сними го барањето': 'Regjistroni kërkesën'}
    
    </Button>
   
  )
};
