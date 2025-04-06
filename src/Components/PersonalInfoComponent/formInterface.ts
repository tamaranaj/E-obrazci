import { Dayjs } from "dayjs";


export interface FormData{
        firstName: string,
        lastName: string ,
        marriedLastName: string ,
        fatherName: string,
        motherName: string ,
        placeBirth: string ,
        socialNumber: string,
        address: string, 
        phone: string ,
        citizenship: string,
        previousAddress: string,
        city: string,
        email:string,
        nationality:string,
        birth:Dayjs| null,
        gender: string | null
        married: string | null,
        contact: string| null
        
       
}
