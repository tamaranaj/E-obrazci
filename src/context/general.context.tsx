import { createContext, ReactNode, useState } from "react";
import { IDCardDocument, NecessaryDocuments, PersonalDetailsID,Passport, DriverLicense, Children } from "../Types/interfaces";


interface ContextDefault {
    personalDetailsID: PersonalDetailsID
    idCardDocument: IDCardDocument
    bgColor: boolean
    language: string,
    necessaryDocuments: NecessaryDocuments,
    passport: Passport,
    driverLicense: DriverLicense,
    child: Children,
    terms: boolean,
    updatePersonalDetailsID(formResults: PersonalDetailsID): void,
    updateIDCardDocument:(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
    updatePassportDocument:(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
    changeBgColor: () => void,
    changeLanguage: () => void,
    addNecessaryDocs: (event: React.ChangeEvent<HTMLInputElement>) => void,
    updateDriverLicense: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
    documentLanguage: string,
    updateDocumentLanguage: (value:string) => void,
    updateSetChild: (formValues: Children) => void,
    updateSetTerms: (value: boolean) => void,
    resetContext: () => void

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
        city: '',
        email:'',
        nationality:''
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
    documentLanguage:'',
    child: {
        parents:[]
    },
    terms:true,
    updatePersonalDetailsID: ()=>{},
    updateIDCardDocument: ()=>{},
    updatePassportDocument: ()=>{},
    changeBgColor: () => {},
    addNecessaryDocs: () => {},
    changeLanguage: ()=>{},
    updateDriverLicense: ()=>{},
   updateDocumentLanguage: ()=>{},
    resetContext: () => {},
    updateSetChild: ()=>{},
    updateSetTerms: ()=>{}
    
}
export const GeneralContext = createContext(contextDefaultValues)

interface GeneralContextProviderProps{
    children: ReactNode
}

export const GeneralContextProvider = ({children}:  GeneralContextProviderProps)=>{
    
    const[personalDetailsID, setPersonalDetailsIDCard] = useState(contextDefaultValues.personalDetailsID)
    const [bgColor, setBgColor] = useState(contextDefaultValues.bgColor)
    const [language, setLanguage] = useState(contextDefaultValues.language)
    const [documentLanguage, setDocumentLanguage] = useState(contextDefaultValues.documentLanguage)
    const [necessaryDocuments, setNecessaryDocuments] = useState(contextDefaultValues.necessaryDocuments)
    const [idCardDocument, setIDCardDocument] = useState(contextDefaultValues.idCardDocument)
    const [passport, setPassport] = useState(contextDefaultValues.passport)
    const[driverLicense, setDriverLicense] = useState(contextDefaultValues.driverLicense)
    const [child, setChild] = useState(contextDefaultValues.child)
    const [terms, setTerms] = useState(contextDefaultValues.terms)

    const updateSetTerms = (value: boolean)=>{
        setTerms(value)
    }

    const updateSetChild = (formValues: Children)=>{
        setChild(formValues)
    }

    const updateDriverLicense = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> )=>{
        setDriverLicense({
            ...driverLicense,
            [event.target.name]: event.target.value
        })

    }
    
    const addNecessaryDocs = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNecessaryDocuments({
          ...necessaryDocuments,
          [event.target.name]: event.target.checked,
        });
      };
    const updateDocumentLanguage = (value:string)=>{
        setDocumentLanguage(value)
        
    }
    const changeLanguage = ()=> {
        language == 'mkd'? setLanguage('alb') : setLanguage('mkd')
    }

    const changeBgColor = ()=>{
        setBgColor(!bgColor)
    }
    

    function updatePersonalDetailsID(formResults: PersonalDetailsID){
        setPersonalDetailsIDCard(formResults)
    }

    function updatePassportDocument(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>){
        setPassport({
            ...passport,
            [event.target.name]: event.target.value
        })

    }


    function updateIDCardDocument(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>){
        setIDCardDocument({
            ...idCardDocument,
            [event.target.name]: event.target.value
        })
    }
    const resetContext= ()=>{
        setPersonalDetailsIDCard(contextDefaultValues.personalDetailsID)
        setNecessaryDocuments(contextDefaultValues.necessaryDocuments)
        setIDCardDocument(contextDefaultValues.idCardDocument)
        setPassport(contextDefaultValues.passport)
        setDriverLicense(contextDefaultValues.driverLicense)
        setDocumentLanguage(contextDefaultValues.documentLanguage)
        setChild(contextDefaultValues.child)
        setTerms(contextDefaultValues.terms)

    }
    
    
    return(
        <GeneralContext.Provider 
        value={{personalDetailsID,idCardDocument,bgColor,passport,necessaryDocuments,language,driverLicense,documentLanguage,child,terms,updateSetTerms,updateSetChild,updateDocumentLanguage,updateDriverLicense,updateIDCardDocument,updatePersonalDetailsID,changeBgColor,changeLanguage, addNecessaryDocs, updatePassportDocument,resetContext  }}>
            {children}
        </GeneralContext.Provider>
    )

}
