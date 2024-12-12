import { createContext, ReactNode, useState } from "react";

interface DocumentProps {
    reason: string,
    firstName: string,
    lastName: string ,
    cardLanguage: string ,
    nameLanguage: string ,
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


interface ContextDefault {
    props: DocumentProps,
    updateProps(formResults: DocumentProps): void
}
const contextDefaultValues: ContextDefault = {
    props: {
        reason:  '',
        firstName:  '',
        lastName: '',
        cardLanguage: '',
        nameLanguage: '',
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
    updateProps: ()=>{}
}
export const GeneralContext = createContext(contextDefaultValues)

interface GeneralContextProviderProps{
    children: ReactNode
}

export const GeneralContextProvider = ({children}:  GeneralContextProviderProps)=>{

    const[props, setProps] = useState({
        reason:  '',
        firstName:  '',
        lastName: '',
        cardLanguage: '',
        nameLanguage: '',
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

    function updateProps(formResults: DocumentProps){
        setProps(formResults)
    }
    return(
        <GeneralContext.Provider value={{props, updateProps}}>
            {children}
        </GeneralContext.Provider>
    )

}
