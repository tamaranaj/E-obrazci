import { createContext, ReactNode, useState } from "react";
import { IDCardDocument, NecessaryDocuments, PersonalDetailsID,Passport, DriverLicense } from "../Types/interfaces";


interface ContextDefault {
    personalDetailsID: PersonalDetailsID
    idCardDocument: IDCardDocument
    bgColor: boolean
    language: string,
    necessaryDocuments: NecessaryDocuments,
    passport: Passport,
    driverLicense: DriverLicense
    updatePersonalDetailsID(formResults: PersonalDetailsID): void,
    updateIDCardDocument(formResults: IDCardDocument): void,
    updatePassportDocument(formResults: Passport): void,
    changeBgColor: () => void,
    changeLanguage: () => void,
    addNecessaryDocs: (event: React.ChangeEvent<HTMLInputElement>) => void,
    updateDriverLicense: (formResults: DriverLicense) => void

}
const contextDefaultValues: ContextDefault = {
    personalDetailsID: {
        firstName:  '',
        lastName: '',
        marriedLastName:'',
        fatherName: '',
        motherName: '',
        birth: '',
        placeBirth: '',
        socialNumber: '',
        gender: '',
        address: '',
        phone: '',  
        citizenship: '',
        previousAddress: '',
       
    },
    idCardDocument:{
        reason:  '',
        cardLanguage: '',
        nameLanguage: '',
        procedure: ''
    },
    bgColor: true,
    language:'mkd',
    necessaryDocuments: {
        idCard: false,
        passport : false,
        driverLicense: false
    },
    passport: {
        reason:  '',
        cardLanguage: '',
        nameLanguage: '',
        formLanguage: '',
        procedure: ''
    },
    driverLicense: {
        reason: '',
        nameLanguage: '',
        procedure: ''
    },
    updatePersonalDetailsID: ()=>{},
    updateIDCardDocument: ()=>{},
    updatePassportDocument: ()=>{},
    changeBgColor: () => {},
    addNecessaryDocs: () => {},
    changeLanguage: ()=>{},
    updateDriverLicense: ()=>{}
}
export const GeneralContext = createContext(contextDefaultValues)

interface GeneralContextProviderProps{
    children: ReactNode
}

export const GeneralContextProvider = ({children}:  GeneralContextProviderProps)=>{

    const[personalDetailsID, setPersonalDetailsIDCard] = useState(contextDefaultValues.personalDetailsID)
    const [bgColor, setBgColor] = useState(contextDefaultValues.bgColor)
    const [language, setLanguage] = useState(contextDefaultValues.language)
    const [necessaryDocuments, setNecessaryDocuments] = useState(contextDefaultValues.necessaryDocuments)
    const [idCardDocument, setIDCardDocument] = useState(contextDefaultValues.idCardDocument)
    const [passport, setPassport] = useState(contextDefaultValues.passport)
    const[driverLicense, setDriverLicense] = useState(contextDefaultValues.driverLicense)
    
    
    const updateDriverLicense = (formResults: DriverLicense)=>{
        setDriverLicense(formResults)
    }
    
    const addNecessaryDocs = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNecessaryDocuments({
          ...necessaryDocuments,
          [event.target.name]: event.target.checked,
        });
      };
    const changeLanguage = ()=> {
        language == 'mkd'? setLanguage('alb') : setLanguage('mkd')
    }

    const changeBgColor = ()=>{
        setBgColor(!bgColor)
    }
    

    function updatePersonalDetailsID(formResults: PersonalDetailsID){
        setPersonalDetailsIDCard(formResults)
    }

    function updatePassportDocument(formResults: Passport){
        setPassport(formResults)
    }


    function updateIDCardDocument(formResults: IDCardDocument){
        setIDCardDocument(formResults)
    }

    
    return(
        <GeneralContext.Provider 
        value={{personalDetailsID,idCardDocument,bgColor,passport,necessaryDocuments, language,driverLicense,updateDriverLicense,updateIDCardDocument,updatePersonalDetailsID,changeBgColor,changeLanguage, addNecessaryDocs, updatePassportDocument  }}>
            {children}
        </GeneralContext.Provider>
    )

}
