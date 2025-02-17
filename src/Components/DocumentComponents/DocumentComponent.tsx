import { useContext } from 'react';
import { GeneralContext } from '../../context/general.context';
import Button from '@mui/material/Button';
import { generatePassportDocumentMKD } from './PassportDocumentMKD';
import { generateIdCardDocumentMKD } from './IdCardDocumentMKD';
import { generateDriverLicenseDocumentMKD } from './DriverLicenseDocumentMKD';
import { generateIDCardALB } from './IdCardDocumentALB';
import { generatePassportDocumentALB } from './PassportDocumentALB';
import { generateDriverLicenseALB } from './DriverLicenseDocumentALB';


export const DocumentComponent = () => {
  const{personalDetailsID,idCardDocument,passport,driverLicense, necessaryDocuments,documentLanguage,language} = useContext(GeneralContext)
  const handleCreateDocuments = ()=>{
    if(necessaryDocuments.idCard===true && documentLanguage==='macedonian'){
      generateIdCardDocumentMKD(idCardDocument,personalDetailsID)
    }else if(necessaryDocuments.idCard===true && documentLanguage==='albanian'){
      generateIDCardALB(idCardDocument, personalDetailsID)
    }
    if(necessaryDocuments.passport===true && documentLanguage==='macedonian'){
      generatePassportDocumentMKD(personalDetailsID,passport)
    }else if(necessaryDocuments.passport===true && documentLanguage==='albanian'){
      generatePassportDocumentALB(personalDetailsID, passport)
    }
    if(necessaryDocuments.driverLicense===true && documentLanguage==='macedonian'){
      generateDriverLicenseDocumentMKD(personalDetailsID,driverLicense)
    }else if(necessaryDocuments.driverLicense===true && documentLanguage==='albanian'){
      generateDriverLicenseALB(driverLicense, personalDetailsID)
    }
  }
  
  return(
    <Button onClick={handleCreateDocuments} sx={{ mt: 1, mr: 1 }}>
      {language =='mkd'? 'Сними го барањето': 'Regjistroni kërkesën'}
    
    </Button>
   
  )
};
