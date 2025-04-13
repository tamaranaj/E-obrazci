import { useContext } from 'react';
import { GeneralContext } from '../../context/general.context';
import Button from '@mui/material/Button';
import { generatePassportDocumentMKD } from './PassportDocumentMKD';
import { generateIdCardDocumentMKD } from './IdCardDocumentMKD';
import { generateDriverLicenseDocumentMKD } from './DriverLicenseDocumentMKD';
import { generateIDCardALB } from './IdCardDocumentALB';
import { generatePassportDocumentALB } from './PassportDocumentALB';
import { generateDriverLicenseALB } from './DriverLicenseDocumentALB';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
type DocumentComponentProps = {
  savePdf:string
}

export const DocumentComponent = ({savePdf}: DocumentComponentProps) => {
  const{personalDetailsID,idCardDocument,child,passport,driverLicense, necessaryDocuments,documentLanguage} = useContext(GeneralContext)
  const handleCreateDocuments = ()=>{
    if(necessaryDocuments.idCard===true && documentLanguage==='мк'){
      generateIdCardDocumentMKD(idCardDocument,personalDetailsID,child)
    }else if(necessaryDocuments.idCard===true && documentLanguage==='ал'){
      generateIDCardALB(idCardDocument, personalDetailsID,child)
    }
    if(necessaryDocuments.passport===true && documentLanguage==='мк'){
      generatePassportDocumentMKD(personalDetailsID,passport,child)
    }else if(necessaryDocuments.passport===true && documentLanguage==='ал'){
      generatePassportDocumentALB(personalDetailsID, passport,child)
    }
    if(necessaryDocuments.driverLicense===true && documentLanguage==='мк'){
      generateDriverLicenseDocumentMKD(personalDetailsID,driverLicense)
    }else if(necessaryDocuments.driverLicense===true && documentLanguage==='ал'){
      generateDriverLicenseALB(driverLicense, personalDetailsID)
    }
  }
  
  return(
    <Button variant='contained' onClick={handleCreateDocuments} sx={{ mt: 1, mr: 1, backgroundColor: '#1976D2', borderRadius: '10px', border: 'none', textShadow: '1px 1px 1px black' }}><FileDownloadIcon/>
      {savePdf}
    
    </Button>
   
  )
};
