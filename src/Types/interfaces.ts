import { Dayjs } from "dayjs"

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
    birth: Dayjs | null,
    placeBirth: string ,
    socialNumber: string,
    gender: string ,
    address: string, 
    phone: string ,
    citizenship: string,
    previousAddress: string,
    city: string,
    email:string,
    nationality:string
    // parents: Parents[]
}
export interface Children{
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
export interface StepperProps {
    handleNext: () => void
  }

  import { TextFieldProps } from "@mui/material/TextField";

export type DatePickerInputProps = {
  inputRef: React.Ref<HTMLInputElement>;
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
  // other props related to DatePicker integration
} & TextFieldProps;


export interface ErrorsTypes{
    invalid: boolean
    required: boolean
}


export interface FormErrorsStates{
    firstName: ErrorsTypes,
    lastName: ErrorsTypes,
    marriedLastName: ErrorsTypes,
    fatherName: ErrorsTypes,
    motherName: ErrorsTypes,
    birth: ErrorsTypes,
    placeBirth: ErrorsTypes,
    socialNumber: ErrorsTypes,
    gender:ErrorsTypes,
    address: ErrorsTypes,
    phone: ErrorsTypes,
    citizenship: ErrorsTypes,
    previousAddress: ErrorsTypes,
    city: ErrorsTypes,
    email: ErrorsTypes,
    nationality: ErrorsTypes,
}
