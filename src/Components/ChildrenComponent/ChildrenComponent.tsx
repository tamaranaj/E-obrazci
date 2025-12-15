import { Children } from "../../Types/interfaces";
import './ChildrenComponent.css'
import { useContext } from "react";
import Button from "@mui/material/Button";
import { GeneralContext } from "../../context/general.context";
import { useForm, useFieldArray } from "react-hook-form";
import { TermsComponent } from "../TermsComponent/TermsComponent";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { ChildrenFormLabels } from "../HelperFunc/childrenForm";
import { FormErrors } from "../HelperFunc/formErrors";
import { FormRegexPatterns } from "../HelperFunc/formPatterns";
import FormHelperText from "@mui/material/FormHelperText";
import { TextFieldComponent } from "../SharedComponents/TextFieldComponent";
interface ChildrenComponentProps {
  handleNext: () => void,
  formProps: ChildrenFormLabels,
  errorsMessages: FormErrors,
  patterns: FormRegexPatterns,
  termsInfo: string
}
export const ChildrenComponent = ({ handleNext, formProps, errorsMessages, patterns, termsInfo }: ChildrenComponentProps) => {


  const { haveChild, handleHaveChild, child, setParentToDefault,necessaryDocuments,updateSetChild, terms, addParent, removeParent, documentLanguage  } = useContext(GeneralContext)
  
  const handleChange = (value:string) => {
    
   if(value ==='yes'){
      handleHaveChild(value)
      setParentToDefault()
      if(!fields.length){
        append({ firstName: "", lastName: "", relation: "", socialNumber: "" })
      }
    } else {
      
      handleHaveChild('no')
      remove(1)
      remove(0)
      setParentToDefault()
    }

  };
  

  const {
    handleSubmit,
    formState: { errors },
   
    control,
  } = useForm<Children>({
    criteriaMode: "all",
    defaultValues: child,
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "parents",
  });

  
  const handleAddParent = () => {

    append({ firstName: "", lastName: "", relation: "", socialNumber: "" });
    addParent()
  };

  const submitForm = () => {
    if (!terms) return
    handleNext();
  };

  const handleRemoveParent = (index: number) => {
    if (index === 1 && fields.at(0)) {
      remove(1)
      removeParent(1)
    } else if (index === 0 && !fields.at(1)) {

      remove(0)
      setParentToDefault()
      handleHaveChild('no')

    }

    if (index === 0 && fields.at(1)) {
      remove(0)
      removeParent(0)
    }
  }
  return (
    <div className="childrenContainer">
      <form onSubmit={handleSubmit(submitForm)} className="childrenForm">

        {!necessaryDocuments.driverLicense && (
          
          <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">{formProps.childApplication}</FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={haveChild}
            onChange={(e)=>handleChange(e.target.value)}
          >
            <div className="radioBtn">
              <FormControlLabel value={'yes'} control={<Radio />} label={formProps.yes} />
              <FormControlLabel value={'no'} control={<Radio />} label={formProps.no} />

            </div>

          </RadioGroup>
        </FormControl>)}
        
        {haveChild ==='yes' && (
          <section className="dynamicSection">
            {documentLanguage === 'мк' && (<p className="error">Пополнете ја формата користејќи кирилично писмо</p>)}
            <div className="dynamicFieldsContainer">
              {fields.map((field, index) => (
                <div key={field.id} className="dynamicFields">
                  <div className="dynamicColumn">
                    <div className="dinInputError">
                      <TextFieldComponent<Children>
                        name={`parents.${index}.firstName`}
                        label={formProps.parentFirstNameLabel}
                        placeholder={formProps.parentFirstNamePlaceholder}
                        pattern={patterns.namePattern}
                        control={control}
                        errors={errors}
                        min={2}
                        max={30}
                        value={child.parents[index].firstName}
                        errorsMessages={errorsMessages}
                        handleChange={(e) => updateSetChild(index, "firstName", e.target.value)}
                        
                      />


                    </div>
                    <div className="dinInputError">
                    <TextFieldComponent<Children>
                        name={`parents.${index}.relation`}
                        label={formProps.relationLabel}
                        placeholder={formProps.relationPlaceholder}
                        pattern={patterns.namePattern}
                        control={control}
                        errors={errors}
                        value={child.parents[index].relation}
                        errorsMessages={errorsMessages}
                        min={2}
                        max={30}
                        handleChange={(e) => updateSetChild(index, "relation", e.target.value)}
                      />
                      
                    </div>
                  </div>
                  <div className="dynamicColumn">
                    <div className="dinInputError">
                    <TextFieldComponent<Children>
                        name={`parents.${index}.lastName`}
                        label={formProps.parentLastNameLabel}
                        placeholder={formProps.parentLastNamePlaceholder}
                        pattern={patterns.namePattern}
                        control={control}
                        errors={errors}
                        min={2}
                        max={30}
                        value={child.parents[index].lastName}
                        errorsMessages={errorsMessages}
                        handleChange={(e) => updateSetChild(index, "lastName", e.target.value)}
                      />
                      
                    </div>

                    <div className="dinInputError">
                    <TextFieldComponent<Children>
                        name={`parents.${index}.socialNumber`}
                        label={formProps.socialNumberLabel}
                        placeholder={formProps.socialNumberPlaceholder}
                        pattern={patterns.socialNumber}
                        control={control}
                        errors={errors}
                        min={13}
                        max={13}
                        value={child.parents[index].socialNumber}
                        errorsMessages={errorsMessages}
                        handleChange={(e) => updateSetChild(index, "socialNumber", e.target.value)}
                      />
                      <FormHelperText className="customHelperText">
                        {`${child.parents[index].socialNumber.length} / 13`}
                      </FormHelperText>
                      
                    </div>
                  </div>
                  <div className="removeBtnCont">
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
                      {formProps.removeParent}
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
              {formProps.addParent}
            </Button>
          </section>
        )}

        <TermsComponent info={termsInfo} error={errorsMessages.required}/>
        <div >
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
            {formProps.next}
          </Button>
        </div>
      </form>


    </div>
  );
};
