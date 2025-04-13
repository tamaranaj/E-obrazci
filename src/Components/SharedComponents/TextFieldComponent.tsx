import { Controller, Control, FieldPath, FieldValues } from "react-hook-form";
import { TextField } from "@mui/material";
import { ErrorMessage } from "@hookform/error-message";
import { FormErrors } from "../HelperFunc/formErrors";




interface TextFieldProps<FormData extends FieldValues> {
  label: string;
  pattern: RegExp;
  name: FieldPath<FormData>;
  control: Control<FormData>;
  placeholder: string;
  errorsMessages: FormErrors;
  value: string;
  min:number;
  max:number;
  errors: Record<string, any>;
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export const TextFieldComponent = <FormData extends FieldValues>({
  label,
  value,
  control,
  errorsMessages,
  name,
  placeholder,
  pattern,
  errors,min,max,
  handleChange
}: TextFieldProps<FormData>) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        defaultValue={value as any}
        rules={{
          required: errorsMessages.required,
          pattern: {
            value: pattern,
            message: errorsMessages.invalid,
          },
          maxLength:{
            value:max,
            message:errorsMessages.maxLength
          },
          minLength:{
            value:min,
            message: errorsMessages.minLength
          }
        }}
        render={({ field }) => (
          <TextField
            {...field}
            label={label}
            placeholder={placeholder}
            variant="standard"
            fullWidth
            error={!!errors[name]}
            onChange={(e) => {
                field.onChange(e); 
                handleChange(e)
                console.log(errors)
                console.log(name)
              }}
          />
        )}
      />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ messages }) =>
          messages &&
          Object.entries(messages).map(([type, message]) => (
            <span key={type} className="errorMessage">
              {message}
            </span>
          ))
        }
      />
    </>
  );
};
