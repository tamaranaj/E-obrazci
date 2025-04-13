export interface TabsConfig{
    idCard: string,
    passport:string,
    driverLicense:string,
    errorRequired:string,
    idCardProps:DocumentProps,
    passportProps: DocumentProps,
    driverLicenseProps:DocumentProps,
    languageFormProps: LanguageForm,
    notRequired: string,
   
    
}

export type DocumentProps={
label:string,
reasons: string[],
procedure: ProcedureConfig,
formLanguage?:string

}
export type ProcedureConfig={
label:string,
regular:string,
fast:string
}

export type LanguageForm={
    formDocLabel:string,
    bilingualNameLabel: string,    
}

export const tabsConfigMkd: TabsConfig = {
    idCard: 'Лична карта',
    passport:'Патна исправа',
    driverLicense:'Возачка дозвола',
    errorRequired:'Ова поле е задолжително.',
     idCardProps:{
        label: 'Причина за барање:',
        reasons:['Прв пат','Редовна замена', 'Промена на податоци (лични податоци, адреса и живеалиште)','Дупликат лична карта (изгубена или украдена)','Предвремена замена заради оштетеност на личната карта'],
        procedure:{
            label:'Барам личната карта да биде издадена во:',
            regular:'Редовна постапка',
            fast:'Итна постапка'
        }
     },
    passportProps: {
        label:'Причина за барање:',
        reasons:['Прв пат','Редовна замена','Промена на лични податоци','Замена поради други причини (исполнетост или друго)','Дупликат пасош (изгубен,исчезнат или украден)','Предвремена замена заради оштетеност на пасошот','Издавање на пасош со ограничен рок на важење'],
        procedure:{
            label:'Барам патната исправа да биде издадена во:',
            regular:'Редовна постапка',
            fast:'Итна постапка'
        },
        formLanguage:'Барам податоците во образецот да бидат испишани на еден од наведените јазици и писмо:'
    },
  
    driverLicenseProps:{
        label:'Причина за барање:',
        reasons:['Издавање на возачка дозвола за прв пат','Замена на странска со македонска возачка дозвола','Замена на возачка дозвола поради истек на рокот на важење','Замена на возачка дозвола поради губење, дотраеност или оштетеност','Замена поради промена на лично име на возачот','Замена поради заверка на нова категорија','Замена поради промена на живеалиште на возачот','Издавање на дупликат возачка','Замена поради запишување на ограничувања од здравствени причини','Замена поради запишување на забрана за управување со моторно возило','Продолжување на важност на возачка дозвола според пријавено престојувалиште, а по претходна најава за местото на поднесување на барањето'],
        procedure:{
            label:'Барам возачката дозвола да биде издадена во:',
            regular:'Редовна постапка',
            fast:'Итна постапка'
        },

    },
    languageFormProps: {
        formDocLabel:'Барам образецот да биде изготвен на еден од наведените јазици и писмо:',
        bilingualNameLabel:'Барам податоците за личното име во образецот да бидат испишани на еден од наведените јазици и писмо:',
        
    },
    notRequired: 'Ова поле не е задолжително.',
}

export const tabsConfigAlb: TabsConfig = {
    idCard: 'Karta e identitetit',
    passport:'Dokument rrugor',
    driverLicense:'Patentë shoferi',
    errorRequired:"Kjo fushë është e nevojshme.",
    idCardProps:{
        label:'Arsyeja e kërkesës:',
        reasons:['Herën e parë','Zëvendësimi i rregullt','Ndryshimi i të dhënave (të dhënat personale, adresa dhe vendbanimi)','ID dublikatë (e humbur ose e vjedhur)','Ndërrimi i parakohshëm për shkak të dëmtimit të kartës së identitetit'],
        procedure:{
            label:'Kërkoj që të lëshohet letërnjoftimi:',
            regular:'Procedurë e rregullt',
            fast:'Procedurë urgjente'
        }
    },
    passportProps: {
        label:'Arsyeja e kërkesës:',
        reasons:['Herën e parë','Zëvendësimi i rregullt','Ndryshimi i të dhënave personale','Zëvendësimi për arsye të tjera (përmbushje ose ndryshe)','Pasaportë e kopjuar (e humbur, e humbur ose e vjedhur)','Zëvendësimi i parakohshëm për shkak të dëmtimit të pasaportës','Lëshimi i një pasaporte me një periudhë të kufizuar vlefshmërie'],
        procedure:{
            label:'Kërkoj që dokumenti i udhëtimit të lëshohet në:',
            regular:'Procedurë e rregullt',
            fast:'Procedurë urgjente'
        },
        formLanguage:'Барам податоците во образецот да бидат испишани на еден од наведените јазици и писмо:'
    },
    driverLicenseProps:{
        label:'Arsyeja e kërkesës:',
        reasons:['Lëshimi i patentës së shoferit për herë të parë','Zëvendësimi i një të huaji me patentë shofer maqedonas','Ndërrimi i patentës së shoferit për shkak të skadencës','Ndërrimi i patentës së shoferit për shkak të humbjes, përkeqësimit ose dëmtimit',"Ndërrimi për shkak të ndryshimit të emrit personal të shoferit",'Zëvendësimi për shkak të certifikimit të një kategorie të re','Ndërrimi për shkak të ndryshimit të vendbanimit të shoferit','Lëshimi i një patentë shoferi dublikatë','Zëvendësimi për shkak të regjistrimit të kufizimeve për arsye shëndetësore','Zëvendësimi për shkak të regjistrimit të ndalimit të drejtimit të mjetit motorik','Vazhdimi i vlefshmërisë së patentës së shoferit sipas vendbanimit të regjistruar dhe pas njoftimit paraprak të vendit të paraqitjes së kërkesës.'],
        procedure:{
            label:'Kërkoj që patenta ime të lëshohet në:',
            regular:'Procedurë e rregullt',
            fast:'Procedurë urgjente'
        }
    },
    languageFormProps: {
        formDocLabel:'Барам образецот да биде изготвен на еден од наведените јазици и писмо:',
        bilingualNameLabel:'Барам податоците за личното име во образецот да бидат испишани на еден од наведените јазици и писмо:'},
    notRequired: 'Kjo fushë nuk kërkohet.',
}