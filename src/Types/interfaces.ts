export interface Passport extends IDCardDocument{
    formLanguage: string

}
export interface DriverLicense{
    reason: string,
    nameLanguage: string,
    procedure:string
}


export interface NecessaryDocuments{
    idCard: boolean,
    passport: boolean,
    driverLicense: boolean
}
export interface Parents{
    firstName: string,
    lastName:string,
    socialNumber:string,
    relation: string
}
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
    phone: string ,
    citizenship: string,
    previousAddress: string,
    city: string,
    parents: Parents[]
}

export interface IDCardDocument{
    reason: string,
    cardLanguage: string ,
    nameLanguage: string ,
    procedure: string
}

export interface SharedComponentProps{
    handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
    state: string
}
export interface DocumentLanguage{
    macedonian: boolean,
    albanian: boolean
}
