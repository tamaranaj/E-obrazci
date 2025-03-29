import { useContext, useState } from "react";
import { GeneralContext } from "../../context/general.context";
import TextField from "@mui/material/TextField";
import { FormLabels } from "../HelperFunc/formLabels";
import { FormPlaceholder } from "../HelperFunc/formPlaceholders";
import { useLocation } from "react-router-dom";
import { DatePickerComponent } from "./DatePickerComponent";
import { FormErrorsStates, PersonalDetailsID } from "../../Types/interfaces";
import { FormErrors } from "../HelperFunc/formErrors";
import { Dayjs } from "dayjs";

interface TestComponentProps {
  labels: FormLabels;
  examples: FormPlaceholder;
  errors: FormErrors;
}

export const TestComponent = ({
  labels,
  examples,
  errors,
}: TestComponentProps) => {
  const location = useLocation();
  const currentPath = location.pathname.includes("мк");

  const {
    updatePersonalDetailsID,
    necessaryDocuments,
    idCardDocument,
    personalDetailsID,
    personalInfo,
  } = useContext(GeneralContext);
  const [married, setMarried] = useState<boolean | undefined>(undefined);
  const [email, setEmail] = useState<boolean | undefined>(undefined);
  const [phone, setPhone] = useState<boolean | undefined>(undefined);
  const [areErrors, setAreErrors] = useState<FormErrorsStates>({
    firstName: { invalid: false, required: false },
    lastName: { invalid: false, required: false },
    marriedLastName: { invalid: false, required: false },
    fatherName: { invalid: false, required: false },
    motherName: { invalid: false, required: false },
    birth: { invalid: false, required: false },
    placeBirth: { invalid: false, required: false },
    socialNumber: { invalid: false, required: false },
    gender: { invalid: false, required: false },
    address: { invalid: false, required: false },
    phone: { invalid: false, required: false },
    citizenship: { invalid: false, required: false },
    previousAddress: { invalid: false, required: false },
    city: { invalid: false, required: false },
    email: { invalid: false, required: false },
    nationality: { invalid: false, required: false },
  });
  const [errorMarried, setErrorMarried] = useState(false);
  const [errorContact, setErrorContact] = useState(false);
  const [gender, setGender] = useState<boolean | undefined>(undefined);

  const handleMarried = (value: string) => {
    if (value == "true") {
      setMarried(true);
    } else {
      setMarried(false);
    }
  };
  const handleContact = (value: string) => {
    if (value === "email") {
      setEmail(true);
      setPhone(false);
    }
    if (value === "phone") {
      setEmail(false);
      setPhone(true);
    }
  };
  const checkErrors = (prop:keyof PersonalDetailsID  )=>{
    console.log( personalDetailsID[prop])
    if(!personalDetailsID[prop] || personalDetailsID[prop]===''){
      console.log(areErrors)
    setAreErrors({
          ...areErrors,
          [prop]: { required: true, invalid:false },
        });
    }
    // const hasRequiredProp = Object.values(personalDetailsID).some((value: string|null | Dayjs)=>{if()});
    // return hasRequiredProp
    //tuka treba da proveram dali nekoe properti nema vrednost i koe properti..ako nema treba vo areErrors da mu setiram za required true
    //treba da vidam ako nekoe pole ne treba da se popolni da si produzuva, primer ako e setirano za phone, email moze da e prazno i obratno, isto i ako e masko mominsko da e dozvoleno da e prazno, a isto i za previous address da go proveri samo ako idCardDocument.reason === "3"
  }
  const handleSetValue = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    pattern: RegExp
  ) => {
    personalInfo(event);
    if (pattern.test(event.target.value)) {
      setAreErrors({
        ...areErrors,
        [event.target.name]: { required: false, invalid:false},
      });
    } else {
      setAreErrors({
        ...areErrors,
        [event.target.name]: { required: false,invalid: true },
      });
     
      
    }
  };

  const submitForm = (event: React.FormEvent<HTMLFormElement> ) => {
    event.preventDefault()
    console.log(personalDetailsID)
    let properties  = Object.keys(personalDetailsID)
    properties.forEach(element => {
      checkErrors(element as keyof PersonalDetailsID)
    });
      if (gender && married === undefined){
        setErrorMarried(true)
        return
      } 
      if(phone===undefined && email===undefined){
        setErrorContact(true)
        return
      }
      console.log(personalDetailsID)
      setErrorContact(false)
      setErrorMarried(false)
    //   updatePersonalDetailsID(data);
    //   props.handleNext()
    }

  return (
    <form className="personalDetailsForm" onSubmit={(event)=>submitForm(event)}>
      <div className="gridWrapper">
        {currentPath && (
          <p className="error">
            Пополнете ја формата користејќи кирилично писмо
          </p>
        )}

        <div className="flex">
          <section className="column">
            <div className="column">
              <TextField
                label={labels.firstName}
                variant="standard"
                value={personalDetailsID.firstName}
                name="firstName"
                onChange={(event) => {
                  handleSetValue(event, /^[\p{L}]{2,12}$/u);
                }}
                placeholder={examples.firstName}
                error={areErrors.firstName.invalid}
                helperText={areErrors.firstName.invalid && errors.invalid || areErrors.firstName.required && errors.required}
              />
              {areErrors.firstName.required && (
                <span className="errorMessage">{errors.required}</span>
              )}
            </div>

            <div className="column">
              <TextField
                label={labels.lastName}
                variant="standard"
                value={personalDetailsID.lastName}
                name="lastName"
                onChange={(event) => {
                  handleSetValue(event, /^[\p{L}]{2,12}$/u);
                }}
                
                placeholder={examples.lastName}
                error={areErrors.lastName.invalid}
                helperText={areErrors.lastName.invalid && errors.invalid}
              />
              {areErrors.lastName.required && (
                <span className="errorMessage">{errors.required}</span>
              )}
            </div>

            <div className="fieldsets">
              <DatePickerComponent
                pickerLabel={labels.birth}
                hasError={areErrors.birth.required}
                errorMsg={errors.required}
              />
            </div>

            <div className="column">
              <TextField
                label={labels.placeBirth}
                variant="standard"
                value={personalDetailsID.placeBirth}
                name="placeBirth"
                onChange={(event) => {
                  handleSetValue(event, /^[\p{L}]{2,20}$/u);
                }}
                
                placeholder={examples.placeBirth}
                error={areErrors.placeBirth.invalid}
                helperText={areErrors.placeBirth.invalid && errors.invalid}
              />
              {areErrors.placeBirth.required && (
                <span className="errorMessage">{errors.required}</span>
              )}
            </div>

            <div className="column">
              <TextField
                label={labels.socialNumber}
                variant="standard"
                value={personalDetailsID.socialNumber}
                name="socialNumber"
                onChange={(event) => {
                  handleSetValue(event, /^[0-9]{13}$/);
                }}
                
                placeholder={examples.socialNumber}
                error={areErrors.socialNumber.invalid}
                helperText={areErrors.socialNumber.invalid && errors.invalid}
              />
              {areErrors.socialNumber.required && (
                <span className="errorMessage">{errors.required}</span>
              )}
            </div>
          </section>

          <section className="column">
            <div className="column">
              <TextField
                label={labels.fatherName}
                variant="standard"
                value={personalDetailsID.fatherName}
                name="fatherName"
                onChange={(event) => {
                  handleSetValue(event, /^[\p{L}]{2,20}$/u);
                }}
                
                placeholder={examples.fatherName}
                error={areErrors.fatherName.invalid}
                helperText={areErrors.fatherName.invalid && errors.invalid}
              />
              {areErrors.fatherName.required && (
                <span className="errorMessage">{errors.required}</span>
              )}
            </div>

            <div className="column">
              <TextField
                label={labels.motherName}
                variant="standard"
                value={personalDetailsID.motherName}
                name="motherName"
                onChange={(event) => {
                  handleSetValue(event, /^[\p{L}]{2,20}$/u);
                }}
                
                placeholder={examples.motherName}
                error={areErrors.motherName.invalid}
                helperText={areErrors.motherName.invalid && errors.invalid}
              />
              {areErrors.motherName.required && (
                <span className="errorMessage">{errors.required}</span>
              )}
            </div>

            <div className="column">
              <TextField
                label={labels.address}
                variant="standard"
                value={personalDetailsID.address}
                name="address"
                onChange={(event) => {
                  handleSetValue(event, /^[\p{L}]{2,20}$/u);
                }}
                
                placeholder={examples.address}
                error={areErrors.address.invalid}
                helperText={areErrors.address.invalid && errors.invalid}
              />
              {areErrors.address.required && (
                <span className="errorMessage">{errors.required}</span>
              )}
            </div>

            <div className="column">
              <TextField
                label={labels.city}
                variant="standard"
                value={personalDetailsID.city}
                name="city"
                onChange={(event) => {
                  handleSetValue(event, /^[\p{L}]{2,20}$/u);
                }}
                
                placeholder={examples.city}
                error={areErrors.city.invalid}
                helperText={areErrors.city.invalid && errors.invalid}
              />
              {areErrors.city.required && (
                <span className="errorMessage">{errors.required}</span>
              )}
            </div>

            {idCardDocument.reason === "3" && (
              <div className="column">
                <TextField
                  label={labels.previousAddress}
                  variant="standard"
                  value={personalDetailsID.previousAddress}
                  name="previousAddress"
                  onChange={(event) => {
                    handleSetValue(event, /^[\p{L}]{2,20}$/u);
                  }}
                  
                  placeholder={examples.previousAddress}
                  error={areErrors.previousAddress.invalid}
                  helperText={
                    areErrors.previousAddress.invalid && errors.invalid
                  }
                />
                {areErrors.previousAddress.required && (
                  <span className="errorMessage">{errors.required}</span>
                )}
              </div>
            )}

            <div className="column">
              <TextField
                label={labels.citizenship}
                variant="standard"
                value={personalDetailsID.citizenship}
                name="citizenship"
                onChange={(event) => {
                  handleSetValue(event, /^[\p{L}]{2,20}$/u);
                }}
                
                placeholder={examples.citizenship}
                error={areErrors.citizenship.invalid}
                helperText={areErrors.citizenship.invalid && errors.invalid}
              />
              {areErrors.citizenship.required && (
                <span className="errorMessage">{errors.required}</span>
              )}
            </div>

            {necessaryDocuments.passport && !currentPath && (
              <div className="column">
                <TextField
                  label={labels.nationality}
                  variant="standard"
                  value={personalDetailsID.nationality}
                  name="nationality"
                  onChange={(event) => {
                    handleSetValue(event, /^[\p{L}]{2,20}$/u);
                  }}
                  
                  placeholder={examples.nationality}
                  error={areErrors.nationality.invalid}
                  helperText={areErrors.nationality.invalid && errors.invalid}
                />
                {areErrors.nationality.required && (
                  <span className="errorMessage">{errors.required}</span>
                )}
              </div>
            )}
          </section>
        </div>

        <div className="gridWrapper">
          <div className="flex">
            <fieldset className="fieldsetGroups">
              <legend>{labels.gender.label}</legend>

              <div className="gender">
                <div className="row">
                  <input
                    type="radio"
                    id="male"
                    value={labels.gender.male}
                    onClick={() => setGender(false)}
                  />
                  <label htmlFor="male">{labels.gender.male}</label>
                </div>

                <div className="row">
                  <input
                    type="radio"
                    id="female"
                    value={labels.gender.female}
                    onClick={() => setGender(true)}
                  />
                  <label htmlFor="female">{labels.gender.female}</label>
                </div>
              </div>
            </fieldset>

            {gender && (
              <fieldset className="fieldsetGroups">
                <legend>{labels.marriage}</legend>

                <div className="marriage">
                  <section className="row">
                    <input
                      type="radio"
                      id="married"
                      name="married"
                      value="true"
                      onChange={(e) => {
                        handleMarried(e.target.value);
                      }}
                    />
                    <label htmlFor="married">{labels.gender.yes}</label>
                  </section>

                  <section className="row">
                    <input
                      type="radio"
                      id="noMarried"
                      name="married"
                      value="false"
                      onChange={(e) => {
                        handleMarried(e.target.value);
                      }}
                    />
                    <label htmlFor="noMarried">{labels.gender.no}</label>
                  </section>

                  {errorMarried && (
                    <span className="errorMessage">{errors.required}</span>
                  )}
                </div>
              </fieldset>
            )}

            <fieldset className="fieldsetGroups">
              <legend>{labels.contactBy.how}</legend>

              <div className="marriage">
                <section className="row">
                  <input
                    type="radio"
                    id="email"
                    name="contact"
                    value="email"
                    onChange={(e) => {
                      handleContact(e.target.value);
                    }}
                  />
                  <label htmlFor="email">{labels.contactBy.email}</label>
                </section>

                <section className="row">
                  <input
                    type="radio"
                    id="phone"
                    name="contact"
                    value="phone"
                    onChange={(e) => {
                      handleContact(e.target.value);
                    }}
                  />
                  <label htmlFor="phone">{labels.contactBy.phone}</label>
                </section>

                {errorContact && (
                  <span className="errorMessage">{errors.required}</span>
                )}
              </div>
            </fieldset>
          </div>

          {married && gender && (
            <div className="column">
              <TextField
                label={labels.marriedLastName}
                variant="standard"
                value={personalDetailsID.marriedLastName}
                name="marriedLastName"
                onChange={(event) => {
                  handleSetValue(event, /^[\p{L}]{2,20}$/u);
                }}
                
                placeholder={examples.marriedLastName}
                error={areErrors.marriedLastName.invalid}
                helperText={
                  areErrors.marriedLastName.invalid && errors.invalid
                }
              />
              {areErrors.marriedLastName.required && (
                <span className="errorMessage">{errors.required}</span>
              )}
            </div>
          )}

          {phone && (
            <div className="column">
              <TextField
                label={labels.phoneNumber}
                variant="standard"
                value={personalDetailsID.phone}
                name="phone"
                onChange={(event) => {
                  handleSetValue(event, /^[0-9]*$/);
                }}
                
                placeholder={examples.phoneNumber}
                error={areErrors.phone.invalid}
                helperText={areErrors.phone.invalid && errors.invalid}
              />
              {areErrors.phone.required && (
                <span className="errorMessage">{errors.required}</span>
              )}
            </div>
          )}
        </div>
      </div>

      <button>Test</button>
    </form>
  );
};
