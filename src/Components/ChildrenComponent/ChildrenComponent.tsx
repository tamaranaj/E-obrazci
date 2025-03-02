import { Children } from "../../Types/interfaces";
import './ChildrenComponent.css'
import { useContext, useState } from "react";
import Button from "@mui/material/Button";
import { GeneralContext } from "../../context/general.context";
import { ErrorMessage } from "@hookform/error-message";
import { useForm, useFieldArray } from "react-hook-form";
import { TermsComponent } from "../TermsComponent/TermsComponent";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
interface ChildrenComponentProps{
  handleNext: ()=>void,
  handleSetChild: (value:boolean)=>void
}
export const ChildrenComponent = ({ handleNext,handleSetChild }: ChildrenComponentProps) => {
  const [value, setValue] = useState('no');
  const [haveChild, setHaveChild] = useState<boolean>(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = (event.target as HTMLInputElement).value
    if(value == 'yes'){
      setValue(value);
      handleSetChild(true)
      setHaveChild(true);
      handleAddParent()
    }else{
      setValue('no')
      setHaveChild(false);
      handleSetChild(false)
      remove(0);
      remove(1);
    }
    
  };


  const { updateSetChild, language,terms } = useContext(GeneralContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<Children>({
    criteriaMode: "all",
    defaultValues: {
      parents: [
        { firstName: "", lastName: "", relation: "", socialNumber: "" },
      ],
    },
  });
  
  const { fields, append, remove } = useFieldArray({
    control,
    name: "parents",
  });

  const handleAddParent = () => {
    append({ firstName: "", lastName: "", relation: "", socialNumber: "" });
  };

  const submitForm = (data: Children) => {
    if(!terms) return
    console.log(haveChild)
    updateSetChild(data);
    handleNext();
  };

  const handleRemoveParent=(index: number)=>{
    if(index===1 && fields.at(0)){
      remove(1)
    }else if(index === 0 && !fields.at(1)){
      
      remove(0)
      setHaveChild(false)
      setValue('no')
      handleSetChild(false)
      
    }

    if(index===0 && fields.at(1)){
      remove(0)}
  }
  return (
    <div className="childrenContainer">
      <form onSubmit={handleSubmit(submitForm)} className="childrenForm">
        
          <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">{language == "mkd"
                ? "Дали поднесувате барање за вашето дете?"
                : "A po bëni një kërkesë për fëmijën tuaj?"}</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <div className="radioBtn">
        <FormControlLabel value="yes" control={<Radio />} label={language == "mkd" ? "Да" : "Po"} />
        <FormControlLabel value="no" control={<Radio />} label={language == "mkd" ? "Не" : "Nr"} />

        </div>
        
      </RadioGroup>
    </FormControl>

        {haveChild && (
          <section className="dynamicSection">
            <div className="dynamicFieldsContainer">
              {fields.map((field, index) => (
                <div key={field.id} className="dynamicFields">
                  <div className="dynamicColumn">
                    <div className="dinInputError">
                      <input
                        type="text"
                        className="dynamicInput"
                        id="parentName"
                        placeholder={
                          language == "mkd"
                            ? "Име на родител/старател"
                            : "Emri i prindit/kujdestarit"
                        }
                        {...register(`parents.${index}.firstName`, {
                          required:
                            language == "mkd"
                              ? "Ова поле е задолжително."
                              : "Kjo fushë është e detyrueshme.",
                          pattern: {
                            value: /[а-шА-Шa-zA-Z]{2}/g,
                            message:
                              language == "mkd"
                                ? "Внесете го името на родителот/старателот."
                                : "Shkruani emrin e prindit/kujdestarit.",
                          },
                        })}
                      />
                      <ErrorMessage
                        errors={errors}
                        name={`parents.${index}.firstName`}
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
                    <div className="dinInputError">
                      <input
                        type="text"
                        placeholder={
                          language == "mkd"
                            ? "Презиме на родител/старател"
                            : "Mbiemri i prindit/kujdestarit"
                        }
                        {...register(`parents.${index}.lastName`, {
                          required:
                            language == "mkd"
                              ? "Ова поле е задолжително."
                              : "Kjo fushë është e detyrueshme.",
                          pattern: {
                            value: /[а-шА-Шa-zA-Z]{2}/g,
                            message:
                              language == "mkd"
                                ? "Внесете го презимето на родителот/старателот."
                                : "Shkruani mbiemrin e prindit/kujdestarit.",
                          },
                        })}
                        className="dynamicInput"
                      />
                      <ErrorMessage
                        errors={errors}
                        name={`parents.${index}.lastName`}
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
                  </div>
                  <div className="dynamicColumn">
                    <div className="dinInputError">
                      <input
                        type="text"
                        placeholder={
                          language == "mkd"
                            ? "Матичен број"
                            : "Numri i identifikimit"
                        }
                        {...register(`parents.${index}.socialNumber`, {
                          required:
                            language == "mkd"
                              ? "Ова поле е задолжително."
                              : "Kjo fushë është e detyrueshme.",
                          pattern: {
                            value: /^[0-9]*$/,
                            message:
                              language == "mkd"
                                ? "Внесениот матичен број не е валиден."
                                : "Numri i sigurimeve shoqërore i futur nuk është i vlefshëm.",
                          },
                          minLength: {
                            value: 13,
                            message:
                              language == "mkd"
                                ? "Матичниот број не може да биде пократок од 13 карактери."
                                : "Numri i regjistrimit nuk mund të jetë më i shkurtër se 13 karaktere.",
                          },
                          maxLength: {
                            value: 13,
                            message:
                              language == "mkd"
                                ? "Матичниот број не може да биде подолг од 13 карактери."
                                : "Numri i regjistrimit nuk mund të jetë më i gjatë se 13 karaktere.",
                          },
                        })}
                        className="dynamicInput"
                      />
                      <ErrorMessage
                        errors={errors}
                        name={`parents[${index}].socialNumber`}
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

                    <div className="dinInputError">
                      <input
                        type="text"
                        placeholder={
                          language == "mkd" ? "Релација" : "Marrëdhënia"
                        }
                        {...register(`parents.${index}.relation`, {
                          required:
                            language == "mkd"
                              ? "Ова поле е задолжително."
                              : "Kjo fushë është e detyrueshme.",
                          pattern: {
                            value: /[а-шА-Шa-zA-Z]{2}/g,
                            message:
                              language == "mkd"
                                ? "Внесете ја вашата релација со детето."
                                : "Vendosni marrëdhënien tuaj me fëmijën.",
                          },
                        })}
                        className="dynamicInput"
                      />
                      <ErrorMessage
                        errors={errors}
                        name={`parents.${index}.relation`}
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
                  </div>
                  <div>
                    <Button
                      variant="contained"
                      sx={{
                        mt: 1,
                        mr: 1,
                        backgroundColor: "#C53242",
                        borderRadius: "10px",
                        border: "none",
                        textShadow: "1px 1px 1px black",
                      }}
                      className="removeButton"
                      type="button"
                      onClick={() => handleRemoveParent(index)}
                    >
                      {language == "mkd" ? "Отстрани" : "Hiqni"}
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <Button
              type="submit"
              variant="contained"
              sx={{
                mt: 1,
                mr: 1,
                backgroundColor: "#397624",
                borderRadius: "10px",
                border: "none",
                textShadow: "1px 1px 1px black",
              }}
              disabled={fields.length == 2}
              onClick={handleAddParent}
            >
              {language == "mkd"
                ? "Додај родител/старател"
                : "Shto një prind/kujdestar"}
            </Button>
          </section>
        )}

        <TermsComponent/>



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
          {language == "mkd" ? "Понатаму" : "Më tej"}
        </Button>
      </div>
      </form>

      
    </div>
  );
};
