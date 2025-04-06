import { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import { GeneralContext } from "../../context/general.context";
import TextField from "@mui/material/TextField";
import { FormLabels } from "../HelperFunc/formLabels";
import { FormPlaceholder } from "../HelperFunc/formPlaceholders";
import { useLocation } from "react-router-dom";
import { FormErrors } from "../HelperFunc/formErrors";
import "./PersonalInfoComponent.css";
import "react-day-picker/style.css";
import {
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  FormHelperText,
} from "@mui/material";
import { FormData } from "./formInterface";
import { ErrorMessage } from "@hookform/error-message";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { FormRegexPatterns } from "../HelperFunc/formPatterns";


export interface PersonalInfoProps {
  labels: FormLabels;
  examples: FormPlaceholder;
  errorsMessages: FormErrors;
  patterns: FormRegexPatterns
  handleNext: () => void;
  handleBack: () => void;
}

export const TestComponent = ({
  labels,
  examples,
  errorsMessages,
  patterns,
  handleNext,
  handleBack,
}: PersonalInfoProps) => {
  const location = useLocation();

  const currentPath = location.pathname.includes("мк");
  let genderOptions = [
    { label: labels.gender.female, value: "женски" },
    { label: labels.gender.male, value: "машки" },
  ];

  let marriedOptions = [
    {
      label: labels.gender.yes,
      value: "yes",
    },
    { label: labels.gender.no, value: "no" },
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
    phone,
    email,
    contact,
    haveChild,
    handleSetContact,
    handleDate,
    personalInfo,
    handleSetMarried,
  } = useContext(GeneralContext);
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    criteriaMode: "all",
  });
  const getFormattedDate = (): Dayjs => {
    const date = new Date();
    let yearOffset = 0;
    if (necessaryDocuments.idCard && haveChild) {
      yearOffset = 15;
    } else if (necessaryDocuments.passport && haveChild) {
      yearOffset = 0;
    } else {
      yearOffset = 18;
    }
    let year = date.getFullYear() - yearOffset;
    let month = String(date.getMonth() + 1).padStart(2, "0");
    let day = String(date.getDate()).padStart(2, "0");
    return dayjs(`${year}-${month}-${day}`);
  };
  const min = dayjs("01-01-1930");
  const max = getFormattedDate();
  const handleMarried = (value: string) => {
    handleSetMarried(value);
  };

  const submitForm = (data: FormData) => {
    console.log(data);
    console.log(personalDetailsID);
    handleNext();
  };

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
                    value: patterns.namePattern,
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
                    value: patterns.namePattern,
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

            <div className="column">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Controller
                  name={"birth"}
                  control={control}
                  defaultValue={personalDetailsID.birth}
                  rules={{ required: errorsMessages.required }}
                  render={({ field }) => {
                    return (
                      <DatePicker
                        label={labels.birth}
                        value={field.value ?? null}
                        onChange={(date) => {
                          field.onChange(date);
                          handleDate(date);
                        }}
                        format="DD/MM/YYYY"
                        minDate={min}
                        maxDate={max}
                      />
                    );
                  }}
                />
                <ErrorMessage
                  errors={errors}
                  name="birth"
                  render={({ message }) => (
                    <span className="errorMessage">{message}</span>
                  )}
                />
              </LocalizationProvider>
            </div>

            <div className="column">
              <TextField
                label={labels.placeBirth}
                variant="standard"
                value={personalDetailsID.placeBirth}
                {...register("placeBirth", {
                  required: errorsMessages.required,
                  pattern: {
                    value: patterns.namePattern,
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
                    value: /^[0-9]*$/,
                    message: errorsMessages.invalid,
                  },
                })}
                fullWidth
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(event)
                }
                placeholder={examples.socialNumber}
              />
              <div
                className="row"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
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
                <FormHelperText className="customHelperText">
                  {`${personalDetailsID.socialNumber.length} / 13`}
                </FormHelperText>
              </div>
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
                    value: patterns.namePattern,
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
                    value:patterns.namePattern,
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
                    value: patterns.addressPattern,
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
                    value: patterns.namePattern,
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
                      value: patterns.addressPattern,
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
                    value: patterns.namePattern,
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
                      value: patterns.namePattern,
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
              <FormLabel component="legend">{labels.gender.label}</FormLabel>
              <Controller
                rules={{ required: errorsMessages.required }}
                control={control}
                name="gender"
                defaultValue={personalDetailsID.gender ?? null}
                render={({ field }) => (
                  <RadioGroup
                    {...field}
                    value={field.value}
                    onBlur={field.onBlur}
                    onChange={(event) => {
                      field.onChange(event.target.value);
                      personalInfo(event);
                    }}
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
                )}
              />
              <ErrorMessage
                errors={errors}
                name="gender"
                render={({ message }) => (
                  <span className="errorMessage">{message}</span>
                )}
              />
            </fieldset>

            <fieldset className="fieldsetGroups">
              <FormLabel component="legend">{labels.marriage}</FormLabel>
              <Controller
                rules={{ required: errorsMessages.required }}
                control={control}
                name="married"
                defaultValue={married ?? ""}
                render={({ field }) => (
                  <RadioGroup
                    {...field}
                    value={field.value ?? ""}
                    onBlur={field.onBlur}
                    onChange={({ target: { value } }) => {
                      field.onChange(value);
                      handleMarried(value);
                    }}
                  >
                    {marriedOptions.map((option, index) => (
                      <FormControlLabel
                        key={index}
                        value={option.value}
                        control={<Radio />}
                        label={option.label}
                      />
                    ))}
                  </RadioGroup>
                )}
              />
              <ErrorMessage
                errors={errors}
                name="married"
                render={({ message }) => (
                  <span className="errorMessage">{message}</span>
                )}
              />
            </fieldset>

            <fieldset className="fieldsetGroups">
              <FormLabel component="legend">{labels.contactBy.how}</FormLabel>
              <Controller
                rules={{ required: errorsMessages.required }}
                control={control}
                name="contact"
                defaultValue={contact}
                render={({ field }) => (
                  <RadioGroup
                    value={field.value}
                    onBlur={field.onBlur}
                    onChange={({ target: { value } }) => {
                      field.onChange(value);
                      handleSetContact(value);
                    }}
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
                )}
              />
              <ErrorMessage
                errors={errors}
                name="contact"
                render={({ message }) => (
                  <span className="errorMessage">{message}</span>
                )}
              />
            </fieldset>
          </div>

          {married === "yes" && (
            <div className="column">
              <TextField
                label={labels.marriedLastName}
                variant="standard"
                fullWidth
                value={personalDetailsID.marriedLastName}
                {...register("marriedLastName", {
                  pattern: {
                    value: patterns.namePattern,
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
                    value: /^\+?[0-9]*$/,
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
                placeholder={`${examples.phoneNumber} / +38971234567`}
              />
              <div
                className="row"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
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
                <FormHelperText className="customHelperText">
                  {`${personalDetailsID.phone.length} / 15`}
                </FormHelperText>
              </div>
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
