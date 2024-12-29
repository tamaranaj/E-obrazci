export interface Passport extends IDCardDocument{
    formLanguage: string

}



export interface NecessaryDocuments{
    idCard: boolean,
    passport: boolean,
    driverLicense: boolean
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
    
}

export interface IDCardDocument{
    reason: string,
    cardLanguage: string ,
    nameLanguage: string ,
    procedure: string
}
