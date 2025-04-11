import { createContext, ReactNode, useState } from "react";
import {
    IDCardDocument,
    NecessaryDocuments,
    PersonalDetailsID,
    Passport,
    DriverLicense,
    Children,
    Parents,
} from "../Types/interfaces";
import { Dayjs } from "dayjs";

interface ContextDefault {
    personalDetailsID: PersonalDetailsID;
    idCardDocument: IDCardDocument;
    language: string;
    necessaryDocuments: NecessaryDocuments;
    passport: Passport;
    driverLicense: DriverLicense;
    child: Children;
    terms: boolean;
    documentLanguage: string|null;
    tabs: string[];
    haveChild: string;
    married: null | string;
    contact: string | null;
    phone: boolean;
    email: boolean;
    setParentToDefault: () => void;
    updatePersonalDetailsID(formResults: PersonalDetailsID): void;
    updateIDCardDocument: (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => void;
    updatePassportDocument: (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => void;
    changeLanguage: () => void;
    addNecessaryDocs: (event: React.ChangeEvent<HTMLInputElement>) => void;
    updateDriverLicense: (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => void;
    updateDocumentLanguage: (value: string) => void;
    updateSetChild: (index: number, field: keyof Parents, value: string) => void;
    updateSetTerms: (value: boolean) => void;
    resetContext: () => void;
    handleHaveChild: (value: string) => void;
    personalInfo: (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    handleDate: (value: Dayjs | null) => void;
    addParent: () => void;
    removeParent: (index: number) => void;
    handleSetMarried: (value: null | string) => void;
    handleSetContact: (value: string) => void;
}
const contextDefaultValues: ContextDefault = {
    personalDetailsID: {
        firstName: "",
        lastName: "",
        marriedLastName: "",
        fatherName: "",
        motherName: "",
        birth: null,
        placeBirth: "",
        socialNumber: "",
        gender: null,
        address: "",
        phone: "",
        citizenship: "",
        previousAddress: "",
        city: "",
        email: "",
        nationality: "",
    },
    idCardDocument: {
        reason: "",
        cardLanguage: "",
        nameLanguage: "",
        procedure: "",
    },
    language: "mkd",
    necessaryDocuments: {
        idCard: false,
        passport: false,
        driverLicense: false,
    },
    passport: {
        reason: "",
        cardLanguage: "",
        nameLanguage: "",
        formLanguage: "",
        procedure: "",
    },
    driverLicense: {
        reason: "",
        nameLanguage: "",
        procedure: "",
    },
    documentLanguage: null,
    child: {
        parents: [{ firstName: "", lastName: "", relation: "", socialNumber: "" }],
    },
    terms: true,
    tabs: [],
    haveChild: 'no',
    married: null,
    contact: null,
    phone: false,
    email: false,
    addParent: () => { },
    removeParent: () => { },
    updatePersonalDetailsID: () => { },
    updateIDCardDocument: () => { },
    updatePassportDocument: () => { },
    addNecessaryDocs: () => { },
    changeLanguage: () => { },
    updateDriverLicense: () => { },
    updateDocumentLanguage: () => { },
    resetContext: () => { },
    updateSetChild: () => { },
    updateSetTerms: () => { },
    handleHaveChild: () => { },
    personalInfo: () => { },
    handleDate: () => { },
    handleSetMarried: () => { },
    handleSetContact: () => { },
    setParentToDefault:()=>{}
};
export const GeneralContext = createContext(contextDefaultValues);

interface GeneralContextProviderProps {
    children: ReactNode;
}

export const GeneralContextProvider = ({
    children,
}: GeneralContextProviderProps) => {
    const [personalDetailsID, setPersonalDetailsIDCard] = useState(
        contextDefaultValues.personalDetailsID
    );
    const [language, setLanguage] = useState(contextDefaultValues.language);
    const [documentLanguage, setDocumentLanguage] = useState(
        contextDefaultValues.documentLanguage
    );
    const [necessaryDocuments, setNecessaryDocuments] = useState(
        contextDefaultValues.necessaryDocuments
    );
    const [idCardDocument, setIDCardDocument] = useState(
        contextDefaultValues.idCardDocument
    );
    const [passport, setPassport] = useState(contextDefaultValues.passport);
    const [driverLicense, setDriverLicense] = useState(
        contextDefaultValues.driverLicense
    );
    const [child, setChild] = useState(contextDefaultValues.child);
    const [terms, setTerms] = useState(contextDefaultValues.terms);
    const [tabs, setTabs] = useState(contextDefaultValues.tabs);
    const [haveChild, setHaveChild] = useState(contextDefaultValues.haveChild);
    const [married, setMarried] = useState(contextDefaultValues.married);
    const [contact, setContact] = useState(contextDefaultValues.contact);
    const [email, setEmail] = useState(contextDefaultValues.email);
    const [phone, setPhone] = useState(contextDefaultValues.phone);

    const handleSetMarried = (value: null | string) => {
        console.log("married", value, typeof value);
        setMarried(value);
    };

    const handleSetContact = (value: string) => {
        setContact(value);
        console.log(contact);
        if (value === "email") {
            setEmail(true);
            setPhone(false);
        }
        if (value === "phone") {
            setEmail(false);
            setPhone(true);
        }
    };

    const updateSetTerms = (value: boolean) => {
        setTerms(value);
    };
    const addParent = () => {
        setChild((prevChild) => ({
            ...prevChild,
            parents: [
                ...prevChild.parents,
                { firstName: "", lastName: "", socialNumber: "", relation: "" },
            ],
        }));

        
    };
    const setParentToDefault = ()=>{
        setChild(contextDefaultValues.child)
    }
    const removeParent = (index: number) => {
        setChild((prevChild) => {
            const updatedParents = [...prevChild.parents];
            updatedParents.splice(index, 1); 
            return {
                ...prevChild,
                parents: updatedParents,
            };
        });
    };
    const updateSetChild = (
        index: number,
        field: keyof Parents,
        value: string
    ) => {
        const updatedParents = [...child.parents];
        updatedParents[index][field] = value;

        setChild((prev) => ({
            ...prev,
            parents: updatedParents,
        }));
    };

    const updateDriverLicense = (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setDriverLicense({
            ...driverLicense,
            [event.target.name]: event.target.value,
        });
    };

    const handleHaveChild = (value: string) => {
        setHaveChild(value);
    };

    const addNecessaryDocs = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNecessaryDocuments({
            ...necessaryDocuments,
            [event.target.name]: event.target.checked,
        });
        if (event.target.checked == true) {
            let check = tabs.includes(event.target.name);
            if (!check) {
                setTabs([...tabs, event.target.name]);
            }
        } else {
            const filterTabs = tabs.filter((item) => item !== event.target.name);
            setTabs(filterTabs);
        }
    };
    const updateDocumentLanguage = (value: string) => {
        setDocumentLanguage(value);
    };
    const changeLanguage = () => {
        language == "mkd" ? setLanguage("alb") : setLanguage("mkd");
    };

    function updatePersonalDetailsID(formResults: PersonalDetailsID) {
        setPersonalDetailsIDCard(formResults);
    }

    const personalInfo = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setPersonalDetailsIDCard({
            ...personalDetailsID,
            [event.target.name]: event.target.value,
        });
    };

    function updatePassportDocument(
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) {
        setPassport({
            ...passport,
            [event.target.name]: event.target.value,
        });
    }

    const handleDate = (value: Dayjs | null) => {
        console.log("value", value);
        setPersonalDetailsIDCard({
            ...personalDetailsID,
            birth: value,
        });
    };

    function updateIDCardDocument(
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) {
        setIDCardDocument({
            ...idCardDocument,
            [event.target.name]: event.target.value,
        });
    }
    const resetContext = () => {
        setPersonalDetailsIDCard(contextDefaultValues.personalDetailsID);
        setNecessaryDocuments(contextDefaultValues.necessaryDocuments);
        setIDCardDocument(contextDefaultValues.idCardDocument);
        setPassport(contextDefaultValues.passport);
        setDriverLicense(contextDefaultValues.driverLicense);
        setDocumentLanguage(contextDefaultValues.documentLanguage);
        setChild(contextDefaultValues.child);
        setTerms(contextDefaultValues.terms);
        setTabs(contextDefaultValues.tabs);
        setHaveChild(contextDefaultValues.haveChild);
        setMarried(contextDefaultValues.married);
        setContact(contextDefaultValues.contact);
        setEmail(contextDefaultValues.email);
        setPhone(contextDefaultValues.phone);
    };

    return (
        <GeneralContext.Provider
            value={{
                personalDetailsID,
                tabs,
                haveChild,
                idCardDocument,
                passport,
                necessaryDocuments,
                language,
                driverLicense,
                documentLanguage,
                child,
                terms,
                married,
                email,
                phone,
                contact,
                setParentToDefault,
                addParent,
                removeParent,
                handleSetContact,
                handleSetMarried,
                updateSetTerms,
                updateSetChild,
                updateDocumentLanguage,
                updateDriverLicense,
                updateIDCardDocument,
                updatePersonalDetailsID,
                changeLanguage,
                addNecessaryDocs,
                updatePassportDocument,
                handleHaveChild,
                personalInfo,
                handleDate,
                resetContext,
            }}
        >
            {children}
        </GeneralContext.Provider>
    );
};
