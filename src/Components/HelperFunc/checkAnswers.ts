import { DriverLicense, IDCardDocument, NecessaryDocuments, Passport } from "../../Types/interfaces"

export const check=(necessaryDocuments: NecessaryDocuments, idCardDocument:IDCardDocument, passport: Passport, driverLicense:DriverLicense): boolean=>{
    if(necessaryDocuments.idCard && !necessaryDocuments.passport && !necessaryDocuments.driverLicense){
        if(idCardDocument.procedure!=='' && idCardDocument.reason!== ''){
            return false
        }else{
            return true
        }
        
    }
    else if(necessaryDocuments.passport && !necessaryDocuments.idCard && !necessaryDocuments.driverLicense){
        if(passport.procedure!=='' && passport.reason!== ''){
            return false
        }else{
            return true
        }
    }
    else if(necessaryDocuments.driverLicense && !necessaryDocuments.idCard && !necessaryDocuments.passport){
        if(driverLicense.procedure!=='' && driverLicense.reason!== ''){
            return false
        }else{
            return true
        }
    }
    else if(necessaryDocuments.driverLicense && necessaryDocuments.idCard && !necessaryDocuments.passport){
        if(driverLicense.reason!=='' && driverLicense.procedure!=='' &&idCardDocument.reason!=='' && idCardDocument.procedure!==''){
            return false
        }else{
            return true
        }
    }else if(necessaryDocuments.driverLicense && necessaryDocuments.passport && !necessaryDocuments.idCard){
        if(driverLicense.reason!=='' && driverLicense.procedure!=='' &&passport.reason!=='' && passport.procedure!==''){
            return false
        }else{
            return true
        }
    }
    else if(necessaryDocuments.passport && necessaryDocuments.idCard && !necessaryDocuments.driverLicense){
        if(passport.reason!=='' && passport.procedure!=='' &&idCardDocument.reason!=='' && idCardDocument.procedure!==''){
            return false
        }else{
            return true
        }
    }
    else if(necessaryDocuments.driverLicense && necessaryDocuments.idCard && necessaryDocuments.passport){
        if(driverLicense.reason!=='' && driverLicense.procedure!=='' &&idCardDocument.reason!=='' && idCardDocument.procedure!=='' && passport.reason!=='' && passport.procedure!==''){
            return false
        }else{
            return true
        }
    }else{
        return true
    }
    
}
