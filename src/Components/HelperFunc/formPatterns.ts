export const mkdLetters = 'А-Ша-шЃѓЌќЅѕЏџЉљЊњЈј';

export const mkdPattern: FormRegexPatterns = {
    namePattern: new RegExp(`[${mkdLetters}]{2,30}`, 'g'),
    addressPattern: new RegExp(`^[${mkdLetters}0-9\\s,.'-/]{1,50}$`),
    socialNumber: new RegExp(/^[0-9]*$/),
    email: new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
    phone: new RegExp(/^\+?[0-9\s\-/]{9,20}$/)
};


export const albPatterns: FormRegexPatterns={
    namePattern: new RegExp(/[a-zA-Z]{2,30}/g),
    addressPattern: new RegExp(/^[A-Za-z0-9\\s,.'-/]{1,50}$/),
    socialNumber: new RegExp(/^[0-9]*$/),
    email: new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
    phone: new RegExp(/^\+?[0-9\s\-/]{9,20}$/)
}

export interface FormRegexPatterns{
    namePattern: RegExp,
    addressPattern: RegExp,
    socialNumber: RegExp,
    phone: RegExp,
    email: RegExp,
}
