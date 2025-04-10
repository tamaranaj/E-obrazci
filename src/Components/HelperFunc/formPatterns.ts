export const mkdPattern: FormRegexPatterns={
    namePattern: new RegExp(/[а-шА-Ш]{2,30}/g),
    addressPattern: new RegExp(/^[А-Ша-ш][А-Ша-ш0-9\s,.'-/]{5,50}$/) ,
    numbers: new RegExp(/^[0-9]*$/),
    email: new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
}


export const albPatterns: FormRegexPatterns={
    namePattern: new RegExp(/[a-zA-Z]{2,50}/g),
    addressPattern: new RegExp(/^[A-Za-z][A-Za-z0-9\s,.'-/]{5,50}$/),
    numbers: new RegExp(/^[0-9]*$/),
    email: new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
}

export interface FormRegexPatterns{
    namePattern: RegExp,
    addressPattern: RegExp,
    numbers: RegExp
    email: RegExp
}
