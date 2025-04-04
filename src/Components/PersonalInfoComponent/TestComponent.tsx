import { useContext} from "react";
import { useForm } from "react-hook-form";
import { GeneralContext } from "../../context/general.context";
import TextField from "@mui/material/TextField";
import { FormLabels } from "../HelperFunc/formLabels";
import { FormPlaceholder } from "../HelperFunc/formPlaceholders";
import { useLocation } from "react-router-dom";
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
import { FormData } from "./formInterface";
import { ErrorMessage } from "@hookform/error-message";
import { DatePickerComponent } from "./DatePickerComponent";


export interface PersonalInfoProps {
  labels: FormLabels;
  examples: FormPlaceholder;
  errorsMessages: FormErrors;
  handleNext: () => void;
  handleBack: () => void;
}

export const TestComponent = ({
  labels,
  examples,
  errorsMessages,
  handleNext,
  handleBack,
}: PersonalInfoProps) => {
  const location = useLocation();
  const currentPath = location.pathname.includes("мк");
  let genderOptions = [
    { label: labels.gender.female, value: 'женски' },
    { label: labels.gender.male, value: 'машки' },
  ];

  let contactOptions = [
    { label: labels.contactBy.email, value: "email" },
    { label: labels.contactBy.phone, value: "phone" },
  ];
  const {
    necessaryDocuments,
    idCardDocument,
    personalDetailsID,
    married,
    contact,
    gender,
    phone,
    email,errorBirth,errorContact,errorGender,errorMarried,
    personalInfo,
    handleSetContact,
    handleSetErrorContact,
    handleSetMarried,
    handleSetErrorMarried,
    handleSetGender,
    handleSetErrorGender,
    handleSetErrorBirth,
    handleSetPhone,
    handleSetEmail,
  } = useContext(GeneralContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    criteriaMode: "all",
  });

  const handleMarried = (value: string) => {
    if (value == "true") {
      handleSetMarried(true);
    } else {
      handleSetMarried(false);
    }
  };

  const handleContact = (value: string) => {
    handleSetContact(value);
    handleSetErrorContact(false)
    if (value === "email") {
      handleSetEmail(true);
      handleSetPhone(false);
    }
    if (value === "phone") {
      handleSetEmail(false);
      handleSetPhone(true);
    }
  };
  const check=()=>{
   
    if (married === "" || contact==='' || personalDetailsID.birth===null || gender==='' || errorBirth) {
      
      
      
      
      
    }
   
  }
  const submitForm = (data: FormData) => {
    if(married === "" && gender){
      handleSetErrorMarried(true);
      return
    }
    if(contact===''){
      handleSetErrorContact(true)
      return
    }
    if(personalDetailsID.birth===null ){
      handleSetErrorBirth(true)
      return
    }
    console.log(personalDetailsID.gender)
    if(personalDetailsID.gender===''){
      handleSetErrorGender(true)
      return
    }
      console.log('birth',errorBirth)
    console.log('contact',errorContact)
    console.log('gender',errorGender)
    console.log('married',errorMarried)
    
    console.log(data);
    console.log(personalDetailsID)
    handleNext();
    
    
    

      
  };
const handleHasBirth= (value: boolean)=>{
  handleSetErrorBirth(value)
}
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(event.target.value);
    personalInfo(event);
  };

  return (
    <form className="personalDetailsForm" onSubmit={handleSubmit(submitForm)}>
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
                {...register("firstName", {
                  required: errorsMessages.required,
                  pattern: {
                    value: /^[\p{L}]{2,12}$/u,
                    message: errorsMessages.invalid,
                  },
                  minLength: {
                    value: 2,
                    message: errorsMessages.invalid,
                  },
                })}
                value={personalDetailsID.firstName}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(event)
                }
                fullWidth
                placeholder={examples.firstName}
              />
              <ErrorMessage
                errors={errors}
                name="firstName"
                render={({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <span key={type} className="errorMessage">
                      {message}
                    </span>
                  ))
                }
              />
            </div>

            <div className="column">
              <TextField
                label={labels.lastName}
                variant="standard"
                value={personalDetailsID.lastName}
                {...register("lastName", {
                  required: errorsMessages.required,
                  pattern: {
                    value: /^[\p{L}]{2,12}$/u,
                    message: errorsMessages.invalid,
                  },
                  minLength: {
                    value: 2,
                    message: errorsMessages.invalid,
                  },
                })}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(event)
                }
                fullWidth
                placeholder={examples.firstName}
              />
              <ErrorMessage
                errors={errors}
                name="lastName"
                render={({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <span key={type} className="errorMessage">
                      {message}
                    </span>
                  ))
                }
              />
            </div>

            <div className="fieldsets">
              <DatePickerComponent
                handleHasBirth={handleHasBirth}
                pickerLabel={labels.birth}
                errorMsg={errorsMessages.required}
              />
            </div>

            <div className="column">
              <TextField
                label={labels.placeBirth}
                variant="standard"
                value={personalDetailsID.placeBirth}
                {...register("placeBirth", {
                  required: errorsMessages.required,
                  pattern: {
                    value: /^[\p{L}]{2,20}$/u,
                    message: errorsMessages.invalid,
                  },
                  minLength: {
                    value: 2,
                    message: errorsMessages.invalid,
                  },
                })}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(event)
                }
                fullWidth
                placeholder={examples.placeBirth}
              />
              <ErrorMessage
                errors={errors}
                name="placeBirth"
                render={({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <span key={type} className="errorMessage">
                      {message}
                    </span>
                  ))
                }
              />
            </div>

            <div className="column">
              <TextField
                label={labels.socialNumber}
                variant="standard"
                value={personalDetailsID.socialNumber}
                {...register("socialNumber", {
                  required: errorsMessages.required,
                  pattern: {
                    value: /^[0-9]{13}$/,
                    message: errorsMessages.invalid,
                  },
                })}
                fullWidth
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(event)
                }
                placeholder={examples.socialNumber}
              />
              <ErrorMessage
                errors={errors}
                name="socialNumber"
                render={({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <span key={type} className="errorMessage">
                      {message}
                    </span>
                  ))
                }
              />
            </div>
          </section>

          <section className="column">
            <div className="column">
              <TextField
                label={labels.fatherName}
                variant="standard"
                value={personalDetailsID.fatherName}
                {...register("fatherName", {
                  required: errorsMessages.required,
                  pattern: {
                    value: /^[\p{L}]{2,20}$/u,
                    message: errorsMessages.invalid,
                  },
                })}
                fullWidth
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(event)
                }
                placeholder={examples.fatherName}
              />
              <ErrorMessage
                errors={errors}
                name="fatherName"
                render={({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <span key={type} className="errorMessage">
                      {message}
                    </span>
                  ))
                }
              />
            </div>

            <div className="column">
              <TextField
                label={labels.motherName}
                variant="standard"
                value={personalDetailsID.motherName}
                {...register("motherName", {
                  required: errorsMessages.required,
                  pattern: {
                    value: /^[\p{L}]{2,20}$/u,
                    message: errorsMessages.invalid,
                  },
                })}
                fullWidth
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(event)
                }
                placeholder={examples.motherName}
              />
              <ErrorMessage
                errors={errors}
                name="motherName"
                render={({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <span key={type} className="errorMessage">
                      {message}
                    </span>
                  ))
                }
              />
            </div>

            <div className="column">
              <TextField
                label={labels.address}
                variant="standard"
                value={personalDetailsID.address}
                {...register("address", {
                  required: errorsMessages.required,
                  pattern: {
                    value: /[а-шА-Ш0-9a-zA-Z]/g,
                    message: errorsMessages.invalid,
                  },
                  minLength: {
                    value: 5,
                    message: errorsMessages.invalid,
                  },
                })}
                fullWidth
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(event)
                }
                placeholder={examples.address}
              />
              <ErrorMessage
                errors={errors}
                name="address"
                render={({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <span key={type} className="errorMessage">
                      {message}
                    </span>
                  ))
                }
              />
            </div>

            <div className="column">
              <TextField
                label={labels.city}
                variant="standard"
                value={personalDetailsID.city}
                {...register("city", {
                  required: errorsMessages.required,
                  pattern: {
                    value: /^[\p{L}]{2,20}$/u,
                    message: errorsMessages.invalid,
                  },
                  minLength: {
                    value: 3,
                    message: errorsMessages.invalid,
                  },
                })}
                fullWidth
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(event)
                }
                placeholder={examples.city}
              />
              <ErrorMessage
                errors={errors}
                name="city"
                render={({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <span key={type} className="errorMessage">
                      {message}
                    </span>
                  ))
                }
              />
            </div>

            {idCardDocument.reason === "3" && (
              <div className="column">
                <TextField
                  label={labels.previousAddress}
                  variant="standard"
                  fullWidth
                  value={personalDetailsID.previousAddress}
                  {...register("previousAddress", {
                    required: errorsMessages.required,
                    pattern: {
                      value: /^[\p{L}]{2,20}$/u,
                      message: errorsMessages.invalid,
                    },
                    minLength: {
                      value: 5,
                      message: errorsMessages.invalid,
                    },
                  })}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange(event)
                  }
                  placeholder={examples.previousAddress}
                />
                <ErrorMessage
                  errors={errors}
                  name="previousAddress"
                  render={({ messages }) =>
                    messages &&
                    Object.entries(messages).map(([type, message]) => (
                      <span key={type} className="errorMessage">
                        {message}
                      </span>
                    ))
                  }
                />
              </div>
            )}

            <div className="column">
              <TextField
                label={labels.citizenship}
                variant="standard"
                value={personalDetailsID.citizenship}
                {...register("citizenship", {
                  required: errorsMessages.required,
                  pattern: {
                    value: /^[\p{L}]{2,20}$/u,
                    message: errorsMessages.invalid,
                  },
                })}
                fullWidth
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(event)
                }
                placeholder={examples.citizenship}
              />
              <ErrorMessage
                errors={errors}
                name="citizenship"
                render={({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <span key={type} className="errorMessage">
                      {message}
                    </span>
                  ))
                }
              />
            </div>

            {necessaryDocuments.passport && !currentPath && (
              <div className="column">
                <TextField
                  label={labels.nationality}
                  variant="standard"
                  value={personalDetailsID.nationality}
                  {...register("nationality", {
                    required: errorsMessages.required,
                    pattern: {
                      value: /^[\p{L}]{2,20}$/u,
                      message: errorsMessages.invalid,
                    },
                  })}
                  fullWidth
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange(event)
                  }
                  placeholder={examples.nationality}
                />
                <ErrorMessage
                  errors={errors}
                  name="nationality"
                  render={({ messages }) =>
                    messages &&
                    Object.entries(messages).map(([type, message]) => (
                      <span key={type} className="errorMessage">
                        {message}
                      </span>
                    ))
                  }
                />
              </div>
            )}
          </section>
        </div>

        <div className="gridWrapper">
          <div className="flex">
            <fieldset className="fieldsetGroups">
              <FormControl>
                <FormLabel component="legend">{labels.gender.label}</FormLabel>
                <RadioGroup
                name="gender"
                  value={personalDetailsID.gender}
                  onChange={(event) => handleSetGender(event.target.value)}
                >
                  {genderOptions.map((option, index) => (
                    <FormControlLabel
                      key={index}
                      value={option.value}
                      control={<Radio />}
                      label={option.label}
                    />
                  ))}
                </RadioGroup>
                {errorGender && (<span className="errorMessage">{errorsMessages.required}</span>)}
              </FormControl>
            </fieldset>
            {gender && (
              <fieldset className="fieldsetGroups">
                <FormControl>
                  <FormLabel id="demo-controlled-radio-buttons-group">
                    {labels.marriage}
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    value={married}
                    onChange={(e) => {
                      handleMarried(e.target.value);
                    }}
                    
                  >
                    <FormControlLabel
                      value="false"
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

            <fieldset className="fieldsetGroups">
              <FormControl>
                <FormLabel component="legend">{labels.contactBy.how}</FormLabel>
                <RadioGroup
                name="contact"
                  value={contact}
                  onChange={(event) => handleContact(event.target.value)}
                >
                  {contactOptions.map((option) => (
                    <FormControlLabel
                      key={option.value}
                      value={option.value}
                      control={<Radio />}
                      label={option.label}
                    />
                  ))}
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
                {...register("marriedLastName", {
                  pattern: {
                    value: /^[\p{L}]{2,20}$/u,
                    message: errorsMessages.required,
                  },
                  minLength: {
                    value: 2,
                    message: errorsMessages.invalid,
                  },
                })}
                onChange={(event) => {
                  handleChange(event);
                }}
                placeholder={examples.marriedLastName}
              />
              <ErrorMessage
                errors={errors}
                name="marriedLastName"
                render={({ message }) => (
                  <span className="errorMessage">{message}</span>
                )}
              />
            </div>
          )}

          {phone && (
            <div className="column">
              <TextField
                label={labels.phoneNumber}
                variant="standard"
                value={personalDetailsID.phone}
                {...register("phone", {
                  required: errorsMessages.required,
                  pattern: {
                    value: /^[0-9]*$/,
                    message: errorsMessages.invalid,
                  },
                  minLength: {
                    value: 9,
                    message: errorsMessages.invalid,
                  },
                  maxLength: {
                    value: 15,
                    message: errorsMessages.invalid,
                  },
                })}
                fullWidth
                onChange={(event) => {
                  handleChange(event);
                }}
                placeholder={examples.phoneNumber}
              />
              <ErrorMessage
                errors={errors}
                name="phone"
                render={({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <span key={type} className="errorMessage">
                      {message}
                    </span>
                  ))
                }
              />
            </div>
          )}

          {email && (
            <div className="column">
              <TextField
                label={labels.email}
                variant="standard"
                value={personalDetailsID.email}
                {...register("email", {
                  required: errorsMessages.required,
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: errorsMessages.invalid,
                  },
                })}
                fullWidth
                onChange={(event) => {
                  handleChange(event);
                }}
                placeholder={examples.email}
              />
              <ErrorMessage
                errors={errors}
                name="email"
                render={({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <span key={type} className="errorMessage">
                      {message}
                    </span>
                  ))
                }
              />
            </div>
          )}
        </div>
      </div>

      <div className="buttonsContainer">
        <div>
          <Button
            variant="contained"
            type="button"
            onClick={handleBack}
            sx={{
              mt: 1,
              mr: 1,
              backgroundColor: "#1976D2",
              borderRadius: "10px",
              border: "none",
              textShadow: "1px 1px 1px black",
            }}
          >
            {labels.back}
          </Button>
        </div>
        <div>
          <Button
            variant="contained"
            type="submit"
            sx={{
              mt: 1,
              mr: 1,
              backgroundColor: "#1976D2",
              borderRadius: "10px",
              border: "none",
              textShadow: "1px 1px 1px black",
            }}
          >
            {labels.next}
          </Button>
        </div>
      </div>
    </form>
  );
};
