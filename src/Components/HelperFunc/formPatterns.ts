export const mkdPattern: FormRegexPatterns={
    namePattern: new RegExp(/[а-шА-Ш]{2,30}/g),
    addressPattern: new RegExp(/^[А-Ша-ш][А-Ша-ш0-9\s,.'-/]{5,50}$/) ,
    
}


export const albPatterns: FormRegexPatterns={
    namePattern: new RegExp(/[a-zA-Z]{2,50}/g),
    addressPattern: new RegExp(/^[A-Za-z][A-Za-z0-9\s,.'-/]{5,50}$/)
}

export interface FormRegexPatterns{
    namePattern: RegExp,
    addressPattern: RegExp
}
