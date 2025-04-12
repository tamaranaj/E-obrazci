import { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import { GeneralContext } from "../../context/general.context";
import { FormLabels } from "../HelperFunc/formLabels";
import { FormPlaceholder } from "../HelperFunc/formPlaceholders";
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
import { TextFieldComponent } from "../SharedComponents/TextFieldComponent";


export interface PersonalInfoProps {
  labels: FormLabels;
  examples: FormPlaceholder;
  errorsMessages: FormErrors;
  patterns: FormRegexPatterns;
  handleNext: () => void;
}

export const PersonalInfoComponent = ({
  labels,
  examples,
  errorsMessages,
  patterns,
  handleNext,
}: PersonalInfoProps) => {

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
    documentLanguage,
    handleSetContact,
    handleDate,
    personalInfo,
    handleSetMarried,
  } = useContext(GeneralContext);
  const {
    control,
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
        {documentLanguage==='мк' && (
          <p className="error">
            Пополнете ја формата користејќи кирилично писмо
          </p>
        )}

        <div className="flex">
          <section className="column">
            <TextFieldComponent<FormData>
              name="firstName"
              label={labels.firstName}
              pattern={patterns.namePattern}
              control={control}
              errorsMessages={errorsMessages}
              errors={errors}
              min={2}
              max={30}
              value={personalDetailsID.firstName}
              placeholder={examples.firstName}
              handleChange={handleChange}
            />

            <TextFieldComponent<FormData>
              name="lastName"
              label={labels.lastName}
              pattern={patterns.namePattern}
              control={control}
              errorsMessages={errorsMessages}
              errors={errors}
              min={2}
                        max={30}
              value={personalDetailsID.lastName}
              placeholder={examples.lastName}
              handleChange={handleChange}
            />

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

            <TextFieldComponent<FormData>
              name="placeBirth"
              label={labels.placeBirth}
              pattern={patterns.namePattern}
              control={control}
              errorsMessages={errorsMessages}
              errors={errors}
              min={2}
                        max={30}
              value={personalDetailsID.placeBirth}
              placeholder={examples.placeBirth}
              handleChange={handleChange}
            />

            <div className="column">
              <TextFieldComponent<FormData>
                name="socialNumber"
                label={labels.socialNumber}
                pattern={patterns.socialNumber}
                control={control}
                errorsMessages={errorsMessages}
                errors={errors}
                min={13}
                max={13}
                value={personalDetailsID.socialNumber}
                placeholder={examples.socialNumber}
                handleChange={handleChange}
              />
              <FormHelperText className="customHelperText">
                {`${personalDetailsID.socialNumber.length} / 13`}
              </FormHelperText>
            </div>
          </section>

          <section className="column">
            <TextFieldComponent<FormData>
              name="fatherName"
              label={labels.fatherName}
              pattern={patterns.namePattern}
              control={control}
              errorsMessages={errorsMessages}
              errors={errors}
              min={2}
                        max={30}
              value={personalDetailsID.fatherName}
              placeholder={examples.fatherName}
              handleChange={handleChange}
            />

            <TextFieldComponent<FormData>
              name="motherName"
              label={labels.motherName}
              pattern={patterns.namePattern}
              control={control}
              errorsMessages={errorsMessages}
              errors={errors}
              min={2}
                        max={30}
              value={personalDetailsID.motherName}
              placeholder={examples.motherName}
              handleChange={handleChange}
            />

            <TextFieldComponent<FormData>
              name="address"
              label={labels.address}
              pattern={patterns.addressPattern}
              control={control}
              errorsMessages={errorsMessages}
              errors={errors}
              min={5}
                        max={50}
              value={personalDetailsID.address}
              placeholder={examples.address}
              handleChange={handleChange}
            />

            <TextFieldComponent<FormData>
              name="city"
              label={labels.city}
              pattern={patterns.namePattern}
              control={control}
              errorsMessages={errorsMessages}
              errors={errors}
              min={2}
                        max={30}
              value={personalDetailsID.city}
              placeholder={examples.city}
              handleChange={handleChange}
            />

            {idCardDocument.reason === "3" && (
              <TextFieldComponent<FormData>
                name="previousAddress"
                label={labels.previousAddress}
                pattern={patterns.addressPattern}
                control={control}
                errorsMessages={errorsMessages}
                errors={errors}
                min={5}
                        max={50}
                value={personalDetailsID.previousAddress}
                placeholder={examples.previousAddress}
                handleChange={handleChange}
              />
            )}

            <TextFieldComponent<FormData>
              name="citizenship"
              label={labels.citizenship}
              pattern={patterns.namePattern}
              control={control}
              errorsMessages={errorsMessages}
              errors={errors}
              min={2}
              max={30}
              value={personalDetailsID.citizenship}
              placeholder={examples.citizenship}
              handleChange={handleChange}
            />

            {necessaryDocuments.passport && documentLanguage==='ал' && (
              <TextFieldComponent<FormData>
                name="nationality"
                label={labels.nationality}
                pattern={patterns.namePattern}
                control={control}
                min={2}
                max={30}
                errorsMessages={errorsMessages}
                errors={errors}
                value={personalDetailsID.nationality}
                placeholder={examples.nationality}
                handleChange={handleChange}
              />
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
            
            {haveChild==='no' && (<fieldset className="fieldsetGroups">
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
            </fieldset>)}
            

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
            <TextFieldComponent<FormData>
              name="marriedLastName"
              label={labels.marriedLastName}
              pattern={patterns.namePattern}
              control={control}
              errorsMessages={errorsMessages}
              errors={errors}
              min={2}
              max={30}
              value={personalDetailsID.marriedLastName}
              placeholder={examples.marriedLastName}
              handleChange={handleChange}
            />
          )}

          {phone && (
            <div className="column">
              <TextFieldComponent<FormData>
                name="phone"
                label={labels.phoneNumber}
                pattern={patterns.phone}
                control={control}
                errorsMessages={errorsMessages}
                errors={errors}
                min={9}
                max={20}
                value={personalDetailsID.phone}
                placeholder={`${examples.phoneNumber} / +38971234567`}
                handleChange={handleChange}
              />
              <FormHelperText className="customHelperText">
                {`${personalDetailsID.phone.length} / 15`}
              </FormHelperText>
            </div>
          )}

          {email && (
            <TextFieldComponent<FormData>
              name="email"
              label={labels.email}
              pattern={patterns.email}
              control={control}
              errorsMessages={errorsMessages}
              errors={errors}
              min={11}
              max={30}
              value={personalDetailsID.email}
              placeholder={examples.email}
              handleChange={handleChange}
            />
          )}
        </div>
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
      
    </form>
  );
};
