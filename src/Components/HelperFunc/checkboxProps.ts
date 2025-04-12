export const checkboxPropsMkd : CheckboxProps= {
    label: 'Одберете документи кои ви се потребни',
    next:'Понатаму',
    error: 'За да продолжите морате да одберете најмалку 1 документ',
    idCard: 'Лична карта',
    passport:'Патна исправа',
    driverLicense: 'Возачка дозвола'
}

export const checkboxPropsAlb: CheckboxProps = {
    label: 'Zgjidhni dokumentet që ju nevojiten',
    next:'Më tej',
    error: 'Për të vazhduar, duhet të zgjidhni të paktën 1 dokument',
    idCard: 'Karta e identitetit',
    passport:'Pasaporta',
    driverLicense: 'Patentë shoferi'
}
export interface CheckboxProps{
    label:string,
    idCard: string,
    passport:string,
    driverLicense: string,
    error: string,
    next: string
}