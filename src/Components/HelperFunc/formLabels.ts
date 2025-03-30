export interface FormLabels{
    firstName: string,
    lastName :string,
    birth: string,
    placeBirth: string,
    socialNumber: string,
    fatherName:string,
    motherName: string,
    address: string,
    city:string,
    previousAddress: string,
    citizenship: string,
    nationality: string,
    gender: GenderFormsLabels
    contactBy:ContactFormLabels,
    marriedLastName: string,
    phoneNumber:string,
    email: string,
    marriage: string,
    next: string,
    back: string
}
type GenderFormsLabels = {
    label: string;
    male: string;
    female: string,
    yes: string;
    no: string;
}
type ContactFormLabels={
    how: string;
    email: string;
    phone: string;
}


export const mkdLabels: FormLabels = {
    firstName: 'Име',
    lastName :'Презиме',
    birth: 'Дата на раѓање:',
    placeBirth: 'Место на раѓање',
    socialNumber: 'Матичен број',
    fatherName:'Име на татко',
    motherName: 'Име на мајка',
    address: 'Aдреса на живеење',
    city: 'Град',
    previousAddress: 'Претходно живеалиште и адреса',
    citizenship: 'Државјанство',
    nationality: 'Национална припадност',
    gender: {label: 'Пол:' , male: 'Машки',female:'Женски', yes:'Да',no:  'Не' },
    contactBy:{how:'Како сакате да бидете контактирани:',email:'е-пошта', phone:'телефонски број'},
    marriedLastName: 'Презиме пред склучување на бракот',
    phoneNumber:'Број за контакт',
    email: 'Е-пошта',
    marriage: 'Дали сте во брак:',
    next: 'Понатаму',
    back: 'Назад'
}


export const albLabels: FormLabels = {
    firstName: 'Emri',
    lastName:'Mbiemri',
    birth: 'Data e lindjes:',
    placeBirth: 'Vendi i lindjes',
    socialNumber: 'Numër identik',
    fatherName:'Emri i babait',
    motherName: 'Emri i nënës',
    address: 'Adresa e banimit',
    city: 'Qyteti',
    previousAddress: 'Banesa dhe adresa e mëparshme',
    citizenship: 'Shtetësia',
    nationality: 'Përkatësia nacionale',
    gender: {label: 'Gjinia:' , male: 'Mashkull',female:'Femër',yes:'Po',no:  'Nr'  },
    contactBy:{how:'Si dëshironi të kontaktoheni:',email:'e-mail', phone:'numrin e telefonit'},
    marriedLastName: 'Mbiemri para martesës',
    phoneNumber:'Numri i kontaktit',
    email: 'Adresën e emailit',
    marriage: 'Je i martuar:',
    next: 'Më tej',
    back: 'Mbrapa'
}
