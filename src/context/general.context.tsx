import { createContext, ReactNode, useEffect, useState } from "react";
import { set } from "react-hook-form";

export interface PersonalDetailsID{
    firstName: string,
    lastName: string ,
    marriedLastName: string ,
    fatherName: string,
    motherName: string ,
    birth: string,
    placeBirth: string ,
    socialNumber: string,
    gender: string ,
    address: string, 
    phone: string 
}

export interface IDCardDocument{
    reason: string,
    cardLanguage: string ,
    nameLanguage: string ,
}


interface ContextDefault {
    personalDetailsID: PersonalDetailsID
    idCardDocument: IDCardDocument
    bgColor: boolean
    updatePersonalDetailsID(formResults: PersonalDetailsID): void,
    updateIDCardDocument(formResults: IDCardDocument): void,
    changeBgColor: () => void,
    language: string,
    changeLanguage: () => void

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
        phone: ''
    },
    idCardDocument:{
        reason:  '',
        cardLanguage: '',
        nameLanguage: '',
    },
    bgColor: true,
    updatePersonalDetailsID: ()=>{},
    updateIDCardDocument: ()=>{},
    changeBgColor: () => {},
    language:'mkd',
    changeLanguage: ()=>{}
}
export const GeneralContext = createContext(contextDefaultValues)

interface GeneralContextProviderProps{
    children: ReactNode
}

export const GeneralContextProvider = ({children}:  GeneralContextProviderProps)=>{

    const[personalDetailsID, setPersonalDetailsIDCard] = useState({
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
        phone: ''
    })
    const [bgColor, setBgColor] = useState(true)
    const [language, setLanguage] = useState('mkd')

    const changeLanguage = ()=> {
        language == 'mkd'? setLanguage('alb') : setLanguage('mkd')
    }

    const changeBgColor = ()=>{
        setBgColor(!bgColor)
    }
    const [idCardDocument, setIDCardDocument] = useState({
        reason: '',
        nameLanguage: '',
        cardLanguage: ''
    })

    function updatePersonalDetailsID(formResults: PersonalDetailsID){
        setPersonalDetailsIDCard(formResults)
    }

    function updateIDCardDocument(formResults: IDCardDocument){
        setIDCardDocument(formResults)
    }

    
    return(
        <GeneralContext.Provider 
        value={{personalDetailsID,idCardDocument,bgColor,updateIDCardDocument,updatePersonalDetailsID,changeBgColor, language, changeLanguage  }}>
            {children}
        </GeneralContext.Provider>
    )

}
