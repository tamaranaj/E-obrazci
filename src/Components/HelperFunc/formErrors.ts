export interface FormErrors{
    required: string,
    invalid: string,
    maxLength:string,
    minLength:string
    
}


export const formErrorsMkd: FormErrors = {
    required: 'Ова поле е задолжително.',
    invalid: 'Внесените податоци не се валидни.',
    maxLength: 'Внесовте повеќе карактери од дозволеното.',
    minLength:'Внесовте помалце карактери од дозволеното.'
    
}

export const formErrorsAlb: FormErrors = {
    required: 'Kjo fushë është e detyrueshme.',
    invalid: 'Të dhënat e futura nuk janë të vlefshme',
    maxLength:'Ke futur më shumë karaktere se sa lejohet.',
    minLength:'Ke futur më pak karaktere se sa lejohet.'
}
