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
}
type GenderFormsLabels = {
    label: string;
    male: string;
    female: string;
    ifFemale: string;
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
    gender: {label: 'Пол:' , male: 'Машки',female:'Женски', ifFemale: 'Дали сте во брак?', yes:'Да',no:  'Не' },
    contactBy:{how:'Како сакате да бидете контактирани:',email:'е-пошта', phone:'телефонски број'},
    marriedLastName: 'Презиме пред склучување на бракот',
    phoneNumber:'Број за контакт',
    email: 'Е-пошта',
    marriage: 'Дали сте во брак?',
    next: 'Понатаму'
}


export const albLabels: FormLabels = {
    firstName: 'Emri (p.sh. Aisha)',
    lastName:'',
    birth: 'Data e lindjes:',
    placeBirth: 'Vendi i lindjes (p.sh. Shkupi)',
    socialNumber: 'Numër identik (p.sh. 1234567890123)',
    fatherName:'Emri i babait (p.sh. Sasho)',
    motherName: 'Emri i nënës (p.sh. Marija)',
    address: 'Adresa e banimit (psh. Kosta Novakovic nr. 24)',
    city: 'Qyteti',
    previousAddress: 'Banesa dhe adresa e mëparshme',
    citizenship: 'Shtetësia (p.sh. Maqedonase)',
    nationality: 'Përkatësia nacionale (p.sh. maqedonase)',
    gender: {label: 'Gjinia:' , male: 'Mashkull',female:'Femër', ifFemale: 'Je i martuar?',yes:'Po',no:  'Nr'  },
    contactBy:{how:'Si dëshironi të kontaktoheni:',email:'e-mail', phone:'numrin e telefonit'},
    marriedLastName: 'Mbiemri para martesës (p.sh. Osmani)',
    phoneNumber:'Numri i kontaktit (p.sh. 071234567)',
    email: 'Adresën e emailit',
    marriage: 'Je i martuar?',
    next: 'Më tej'
}
