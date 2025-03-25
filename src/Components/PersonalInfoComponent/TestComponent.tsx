import { useContext, useState } from "react";
import { GeneralContext } from "../../context/general.context";
import TextField from "@mui/material/TextField";
import { FormLabels } from "../HelperFunc/formLabels";
import { FormPlaceholder } from "../HelperFunc/formPlaceholders";
import { FormErrors } from "../HelperFunc/formErrors";
import { useLocation } from "react-router-dom";
import { DatePickerComponent } from "./DatePickerComponent";

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
  const [areErrors, setAreErrors] = useState({
    firstName: { invalid: false, required: false },
    lastName: { invalid: false, required: false },
    marriedLastName: { invalid: false, required: false },
    fatherName: { invalid: false, required: false },
    motherName: { invalid: false, required: false },
    birth: false,
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

  // const getFormattedDate = () => {
  //     if (necessaryDocuments.idCard && haveChild) {
  //         const date = new Date();
  //         const year = date.getFullYear() - 15;
  //         const month = String(date.getMonth() + 1).padStart(2, "0");
  //         const day = String(date.getDate()).padStart(2, "0");
  //         return `${year}-${month}-${day}`;
  //     } else if (necessaryDocuments.passport && haveChild) {
  //         const date = new Date();
  //         const year = date.getFullYear();
  //         const month = String(date.getMonth() + 1).padStart(2, "0");
  //         const day = String(date.getDate()).padStart(2, "0");
  //         return `${year}-${month}-${day}`;
  //     } else {
  //         const date = new Date();
  //         const year = date.getFullYear() - 18;
  //         const month = String(date.getMonth() + 1).padStart(2, "0");
  //         const day = String(date.getDate()).padStart(2, "0");
  //         return `${year}-${month}-${day}`;
  //     }
  // };

  const handleSetValue = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    pattern: RegExp
  ) => {
    personalInfo(event);
    if (pattern.test(event.target.value)) {
      setAreErrors({
        ...areErrors,
        [event.target.name]: { invalid: false },
      });
    } else {
      setAreErrors({
        ...areErrors,
        [event.target.name]: { invalid: true },
      });
    }
  };

  const submitForm = () => {
      if (gender && married === undefined){
        setErrorMarried(true)
        return
      } 
      if(phone===undefined && email===undefined){
        setErrorContact(true)
        return
      }
    //   console.log(data)
      setErrorContact(false)
      setErrorMarried(false)
    //   updatePersonalDetailsID(data);
    //   props.handleNext()
    }

  return (
    <form className="personalDetailsForm">
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
                required
                placeholder={examples.firstName}
                error={areErrors.firstName.required}
                helperText={areErrors.firstName.required && errors.required}
              />
              {areErrors.firstName.invalid && (
                <span className="errorMessage">{errors.invalid}</span>
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
                required
                placeholder={examples.lastName}
                error={areErrors.lastName.required}
                helperText={areErrors.lastName.required && errors.required}
              />
              {areErrors.lastName.invalid && (
                <span className="errorMessage">{errors.invalid}</span>
              )}
            </div>

            <div className="fieldsets">
              <DatePickerComponent
                pickerLabel={labels.birth}
                hasError={areErrors.birth}
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
                required
                placeholder={examples.placeBirth}
                error={areErrors.placeBirth.required}
                helperText={areErrors.placeBirth.required && errors.required}
              />
              {areErrors.placeBirth.invalid && (
                <span className="errorMessage">{errors.invalid}</span>
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
                required
                placeholder={examples.socialNumber}
                error={areErrors.socialNumber.required}
                helperText={areErrors.socialNumber.required && errors.required}
              />
              {areErrors.socialNumber.invalid && (
                <span className="errorMessage">{errors.invalid}</span>
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
                required
                placeholder={examples.fatherName}
                error={areErrors.fatherName.required}
                helperText={areErrors.fatherName.required && errors.required}
              />
              {areErrors.fatherName.invalid && (
                <span className="errorMessage">{errors.invalid}</span>
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
                required
                placeholder={examples.motherName}
                error={areErrors.motherName.required}
                helperText={areErrors.motherName.required && errors.required}
              />
              {areErrors.motherName.invalid && (
                <span className="errorMessage">{errors.invalid}</span>
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
                required
                placeholder={examples.address}
                error={areErrors.address.required}
                helperText={areErrors.address.required && errors.required}
              />
              {areErrors.address.invalid && (
                <span className="errorMessage">{errors.invalid}</span>
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
                required
                placeholder={examples.city}
                error={areErrors.city.required}
                helperText={areErrors.city.required && errors.required}
              />
              {areErrors.city.invalid && (
                <span className="errorMessage">{errors.invalid}</span>
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
                  required
                  placeholder={examples.previousAddress}
                  error={areErrors.previousAddress.required}
                  helperText={
                    areErrors.previousAddress.required && errors.required
                  }
                />
                {areErrors.previousAddress.invalid && (
                  <span className="errorMessage">{errors.invalid}</span>
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
                required
                placeholder={examples.citizenship}
                error={areErrors.citizenship.required}
                helperText={areErrors.citizenship.required && errors.required}
              />
              {areErrors.citizenship.invalid && (
                <span className="errorMessage">{errors.invalid}</span>
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
                  required
                  placeholder={examples.nationality}
                  error={areErrors.nationality.required}
                  helperText={areErrors.nationality.required && errors.required}
                />
                {areErrors.nationality.invalid && (
                  <span className="errorMessage">{errors.invalid}</span>
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
                required
                placeholder={examples.marriedLastName}
                error={areErrors.marriedLastName.required}
                helperText={
                  areErrors.marriedLastName.required && errors.required
                }
              />
              {areErrors.marriedLastName.invalid && (
                <span className="errorMessage">{errors.invalid}</span>
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
                required
                placeholder={examples.phoneNumber}
                error={areErrors.phone.required}
                helperText={areErrors.phone.required && errors.required}
              />
              {areErrors.phone.invalid && (
                <span className="errorMessage">{errors.invalid}</span>
              )}
            </div>
          )}
        </div>
      </div>

      <button>Test</button>
    </form>
  );
};
