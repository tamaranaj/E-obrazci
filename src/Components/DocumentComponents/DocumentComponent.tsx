import { useContext } from 'react';
import { GeneralContext } from '../../context/general.context';
import Button from '@mui/material/Button';
import { generatePassportDocumentMKD } from './PassportDocumentMKD';
import { generateIdCardDocumentMKD } from './IdCardDocumentMKD';
import { generateDriverLicenseDocumentMKD } from './DriverLicenseDocumentMKD';
import { generateIDCardALB } from './IdCardDocumentALB';
import { generatePassportDocumentALB } from './PassportDocumentALB';


export const DocumentComponent = () => {
  const{personalDetailsID,idCardDocument,passport,driverLicense, necessaryDocuments,language} = useContext(GeneralContext)
  let date= `${new Date().getDate()}.${new Date().getMonth() + 1}.${new Date().getFullYear()}`
  const handleCreateDocuments = ()=>{
    if(necessaryDocuments.idCard===true && language==='mkd'){
      generateIdCardDocumentMKD(idCardDocument,personalDetailsID,date)
    }else if(necessaryDocuments.idCard===true && language==='alb'){
      generateIDCardALB(idCardDocument, personalDetailsID, date)
    }
    if(necessaryDocuments.passport===true && language==='mkd'){
      generatePassportDocumentMKD(personalDetailsID,passport,date)
    }else if(necessaryDocuments.passport===true && language==='alb'){
      generatePassportDocumentALB(personalDetailsID, passport)
    }
    if(necessaryDocuments.driverLicense===true){
      generateDriverLicenseDocumentMKD(personalDetailsID,driverLicense, date)
    }
  }
  
  return(
    <Button onClick={handleCreateDocuments} sx={{ mt: 1, mr: 1 }}>
      {language =='mkd'? 'Сними го барањето': 'Regjistroni kërkesën'}
    
    </Button>
   
  )
};
