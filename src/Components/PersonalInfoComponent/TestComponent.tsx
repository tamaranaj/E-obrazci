import { useContext, useState } from "react";
import { GeneralContext } from "../../context/general.context";
import TextField from "@mui/material/TextField";
import { FormLabels } from "../HelperFunc/formLabels";
import { FormPlaceholder } from "../HelperFunc/formPlaceholders";
import { useLocation } from "react-router-dom";
import { DatePickerComponent } from "./DatePickerComponent";
import { FormErrorsStates, PersonalDetailsID } from "../../Types/interfaces";
import { FormErrors } from "../HelperFunc/formErrors";
import "./PersonalInfoComponent.css";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";

export interface PersonalInfoProps {
  labels: FormLabels;
  examples: FormPlaceholder;
  errorsMessages: FormErrors;
  handleNext: () => void,
  handleBack: () => void
}

export const TestComponent = ({
  labels,
  examples,
  errorsMessages,
  handleNext,
  handleBack
}: PersonalInfoProps) => {
  const location = useLocation();
  const currentPath = location.pathname.includes("мк");

  const {
    necessaryDocuments,
    idCardDocument,
    personalDetailsID,
    personalInfo,
  } = useContext(GeneralContext);
  const [married, setMarried] = useState<boolean | undefined>(undefined);
  const[contact, setContact] = useState<string | undefined>(undefined)
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

  const handleRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    personalInfo(event);
    if (event.target.value === "женски") {
      setGender(true);
    } else if (event.target.value === "машки") {
      setGender(false);
    }
  };
  const handleMarried = (value: string) => {
    if (value == "true") {
      setMarried(true);
    } else {
      setMarried(false);
    }
  };
  const handleContact = (value: string) => {
    setContact(value)
    if (value === "email") {
      setEmail(true);
      setPhone(false);
    }
    if (value === "phone") {
      setEmail(false);
      setPhone(true);
    }
  };
  const handleErrorRequired = (
    prop: keyof FormErrorsStates,
    value: boolean
  ) => {
    setAreErrors((prevState) => ({
      ...prevState,
      [prop]: {
        invalid: false,
        required: value,
      },
    }));
  };

  const checkErrors = (prop: keyof PersonalDetailsID) => {
    console.log(personalDetailsID[prop]);
    if (!personalDetailsID[prop] || personalDetailsID[prop] === "") {
      console.log(areErrors);
      handleErrorRequired(prop, true);
    }
  };
  const handleSetValue = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    pattern: RegExp
  ) => {
    personalInfo(event);
    if (pattern.test(event.target.value)) {
      setAreErrors({
        ...areErrors,
        [event.target.name]: { required: false, invalid: false },
      });
    } else {
      setAreErrors({
        ...areErrors,
        [event.target.name]: { required: false, invalid: true },
      });
    }
  };

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(personalDetailsID);
    let properties = Object.keys(personalDetailsID);
    properties.forEach((element) => {
      checkErrors(element as keyof PersonalDetailsID);
    });
    if (gender && married === undefined) {
      setErrorMarried(true);
      return;
    }
    if (!contact) {
      setErrorContact(true);
      return;
    }
    if (idCardDocument.reason === "3" && !personalDetailsID.previousAddress) {
      return;
    }
    if (
      necessaryDocuments.passport &&
      currentPath &&
      !personalDetailsID.nationality
    ) {
      return;
    }
    console.log(personalDetailsID);
    setErrorContact(false);
    setErrorMarried(false);
    //   updatePersonalDetailsID(data);
    handleNext()
  };

  return (
    <form
      className="personalDetailsForm"
      onSubmit={(event) => submitForm(event)}
    >
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
                fullWidth
                placeholder={examples.firstName}
                error={areErrors.firstName.invalid}
                helperText={
                  areErrors.firstName.invalid && errorsMessages.invalid
                }
              />
              {areErrors.firstName.required === true && (
                <span className="errorMessage">{errorsMessages.required}</span>
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
                fullWidth
                placeholder={examples.lastName}
                error={areErrors.lastName.invalid}
                helperText={
                  areErrors.lastName.invalid && errorsMessages.invalid
                }
              />
              {areErrors.lastName.required && (
                <span className="errorMessage">{errorsMessages.required}</span>
              )}
            </div>

            <div className="fieldsets">
              <DatePickerComponent
                handleDateError={handleErrorRequired}
                pickerLabel={labels.birth}
                hasError={areErrors.birth.required}
                errorMsg={errorsMessages.required}
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
                fullWidth
                placeholder={examples.placeBirth}
                error={areErrors.placeBirth.invalid}
                helperText={
                  areErrors.placeBirth.invalid && errorsMessages.invalid
                }
              />
              {areErrors.placeBirth.required && (
                <span className="errorMessage">{errorsMessages.required}</span>
              )}
            </div>

            <div className="column">
              <TextField
                label={labels.socialNumber}
                variant="standard"
                value={personalDetailsID.socialNumber}
                name="socialNumber"
                fullWidth
                onChange={(event) => {
                  handleSetValue(event, /^[0-9]{13}$/);
                }}
                placeholder={examples.socialNumber}
                error={areErrors.socialNumber.invalid}
                helperText={
                  areErrors.socialNumber.invalid && errorsMessages.invalid
                }
              />
              {areErrors.socialNumber.required && (
                <span className="errorMessage">{errorsMessages.required}</span>
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
                fullWidth
                onChange={(event) => {
                  handleSetValue(event, /^[\p{L}]{2,20}$/u);
                }}
                placeholder={examples.fatherName}
                error={areErrors.fatherName.invalid}
                helperText={
                  areErrors.fatherName.invalid && errorsMessages.invalid
                }
              />
              {areErrors.fatherName.required && (
                <span className="errorMessage">{errorsMessages.required}</span>
              )}
            </div>

            <div className="column">
              <TextField
                label={labels.motherName}
                variant="standard"
                value={personalDetailsID.motherName}
                name="motherName"
                fullWidth
                onChange={(event) => {
                  handleSetValue(event, /^[\p{L}]{2,20}$/u);
                }}
                placeholder={examples.motherName}
                error={areErrors.motherName.invalid}
                helperText={
                  areErrors.motherName.invalid && errorsMessages.invalid
                }
              />
              {areErrors.motherName.required && (
                <span className="errorMessage">{errorsMessages.required}</span>
              )}
            </div>

            <div className="column">
              <TextField
                label={labels.address}
                variant="standard"
                value={personalDetailsID.address}
                name="address"
                fullWidth
                onChange={(event) => {
                  handleSetValue(event, /^[\p{L}]{2,20}$/u);
                }}
                placeholder={examples.address}
                error={areErrors.address.invalid}
                helperText={areErrors.address.invalid && errorsMessages.invalid}
              />
              {areErrors.address.required && (
                <span className="errorMessage">{errorsMessages.required}</span>
              )}
            </div>

            <div className="column">
              <TextField
                label={labels.city}
                variant="standard"
                value={personalDetailsID.city}
                name="city"
                fullWidth
                onChange={(event) => {
                  handleSetValue(event, /^[\p{L}]{2,20}$/u);
                }}
                placeholder={examples.city}
                error={areErrors.city.invalid}
                helperText={areErrors.city.invalid && errorsMessages.invalid}
              />
              {areErrors.city.required && (
                <span className="errorMessage">{errorsMessages.required}</span>
              )}
            </div>

            {idCardDocument.reason === "3" && (
              <div className="column">
                <TextField
                  label={labels.previousAddress}
                  variant="standard"
                  fullWidth
                  value={personalDetailsID.previousAddress}
                  name="previousAddress"
                  onChange={(event) => {
                    handleSetValue(event, /^[\p{L}]{2,20}$/u);
                  }}
                  placeholder={examples.previousAddress}
                  error={areErrors.previousAddress.invalid}
                  helperText={
                    areErrors.previousAddress.invalid && errorsMessages.invalid
                  }
                />
                {areErrors.previousAddress.required && (
                  <span className="errorMessage">
                    {errorsMessages.required}
                  </span>
                )}
              </div>
            )}

            <div className="column">
              <TextField
                label={labels.citizenship}
                variant="standard"
                value={personalDetailsID.citizenship}
                name="citizenship"
                fullWidth
                onChange={(event) => {
                  handleSetValue(event, /^[\p{L}]{2,20}$/u);
                }}
                placeholder={examples.citizenship}
                error={areErrors.citizenship.invalid}
                helperText={
                  areErrors.citizenship.invalid && errorsMessages.invalid
                }
              />
              {areErrors.citizenship.required && (
                <span className="errorMessage">{errorsMessages.required}</span>
              )}
            </div>

            {necessaryDocuments.passport && !currentPath && (
              <div className="column">
                <TextField
                  label={labels.nationality}
                  variant="standard"
                  value={personalDetailsID.nationality}
                  name="nationality"
                  fullWidth
                  onChange={(event) => {
                    handleSetValue(event, /^[\p{L}]{2,20}$/u);
                  }}
                  placeholder={examples.nationality}
                  error={areErrors.nationality.invalid}
                  helperText={
                    areErrors.nationality.invalid && errorsMessages.invalid
                  }
                />
                {areErrors.nationality.required && (
                  <span className="errorMessage">
                    {errorsMessages.required}
                  </span>
                )}
              </div>
            )}
          </section>
        </div>

        <div className="gridWrapper">
          <div className="flex">
          <fieldset className='fieldsetGroups'>
            <FormControl error={areErrors.gender.required}
            >
              <FormLabel id="demo-controlled-radio-buttons-group">
                {labels.gender.label}
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="gender"
                value={personalDetailsID.gender}
                onChange={(event) => {
                  handleRadio(event);
                }}
                
              >
                <FormControlLabel
                  value="женски"
                  control={<Radio />}
                  label={labels.gender.female}
                />
                <FormControlLabel
                  value="машки"
                  control={<Radio />}
                  label={labels.gender.male}
                />
              </RadioGroup>
              {areErrors.gender.required && (
                  <span className="errorMessage">
                    {errorsMessages.required}
                  </span>
                )}
            </FormControl>
          </fieldset>
            {gender && (
              <fieldset className='fieldsetGroups'>
              <FormControl error={errorMarried}
              >
                <FormLabel id="demo-controlled-radio-buttons-group">
                  {labels.marriage}
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="marriage"
                  value={married}
                  onChange={(e) => {
                    handleMarried(e.target.value);
                  }}
                  
                >
                  <FormControlLabel
                    value='false'
                    control={<Radio />}
                    label={labels.gender.no}
                  />
                  <FormControlLabel
                    value="true"
                    control={<Radio />}
                    label={labels.gender.yes}
                  />
                </RadioGroup>
                {errorMarried && (
                  <span className="errorMessage">
                    {errorsMessages.required}
                  </span>
                )}
              </FormControl>
            </fieldset>
            )}

            <fieldset className='fieldsetGroups'>
              <FormControl error={errorContact}
              >
                <FormLabel id="demo-controlled-radio-buttons-group">
                  {labels.contactBy.how}
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="contact"
                  value={contact}
                  onChange={(e) => {
                    handleContact(e.target.value);
                  }}
                  
                >
                  <FormControlLabel
                    value='phone'
                    control={<Radio />}
                    label={labels.contactBy.phone}
                  />
                  <FormControlLabel
                    value="email"
                    control={<Radio />}
                    label={labels.contactBy.email}
                  />
                </RadioGroup>
                {errorContact && (
                  <span className="errorMessage">
                    {errorsMessages.required}
                  </span>
                )}
              </FormControl>
            </fieldset>
          </div>

          {married && gender && (
            <div className="column">
              <TextField
                label={labels.marriedLastName}
                variant="standard"
                fullWidth
                value={personalDetailsID.marriedLastName}
                name="marriedLastName"
                onChange={(event) => {
                  handleSetValue(event, /^[\p{L}]{2,20}$/u);
                }}
                placeholder={examples.marriedLastName}
                error={areErrors.marriedLastName.invalid}
                helperText={
                  areErrors.marriedLastName.invalid && errorsMessages.invalid
                }
              />
              {areErrors.marriedLastName.required && (
                <span className="errorMessage">{errorsMessages.required}</span>
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
                fullWidth
                onChange={(event) => {
                  handleSetValue(event, /^[0-9]*$/);
                }}
                placeholder={examples.phoneNumber}
                error={areErrors.phone.invalid}
                helperText={areErrors.phone.invalid && errorsMessages.invalid}
              />
              {areErrors.phone.required && (
                <span className="errorMessage">{errorsMessages.required}</span>
              )}
            </div>
          )}


          {email && (
            <div className="column">
              <TextField
                label={labels.email}
                variant="standard"
                value={personalDetailsID.email}
                name="email"
                fullWidth
                onChange={(event) => {
                  handleSetValue(event, /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
                }}
                placeholder={examples.email}
                error={areErrors.email.invalid}
                helperText={areErrors.email.invalid && errorsMessages.invalid}
              />
              {areErrors.email.required && (
                <span className="errorMessage">{errorsMessages.required}</span>
              )}
            </div>
          )}
        </div>
      </div>

      <div>
          <Button
            variant="contained"
            type='submit'

            sx={{ mt: 1, mr: 1, backgroundColor: '#1976D2', borderRadius: '10px', border: 'none', textShadow: '1px 1px 1px black' }}
          >
            {labels.next}
          </Button>
        </div>
        <div>
          <Button
            variant="contained"
            type='button'
            onClick={handleBack}
            sx={{ mt: 1, mr: 1, backgroundColor: '#1976D2', borderRadius: '10px', border: 'none', textShadow: '1px 1px 1px black' }}
          >
           {labels.back}
          </Button>
        </div>
    </form>

  );
};
