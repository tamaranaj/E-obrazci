import { createContext, ReactNode, useState } from "react";

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
    updatePersonalDetailsID(formResults: PersonalDetailsID): void,
    updateIDCardDocument(formResults: IDCardDocument): void
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
    updatePersonalDetailsID: ()=>{},
    updateIDCardDocument: ()=>{},
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
        value={{personalDetailsID,idCardDocument,updateIDCardDocument,updatePersonalDetailsID  }}>
            {children}
        </GeneralContext.Provider>
    )

}
