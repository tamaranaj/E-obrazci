import { useContext } from "react";
import { GeneralContext } from "../../context/general.context";
import { BilingualNameComponent } from "../SharedComponents/BilingualNameComponent";
import { ProcedureComponent } from "../SharedComponents/ProcedureComponent";
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";
import { DocumentProps, LanguageForm } from "../HelperFunc/tabContainerProps";

interface PassportFormProps {
  tabsProps: (newValue: string) => void;
  passportConfig: DocumentProps;
  languageFormProps: LanguageForm;
  errorRequired: string;
  notRequired: string;
  next: string;
  hideButtons: () => boolean;
}

export const PassportForm = ({
  tabsProps,
  passportConfig,
  next,
  errorRequired,
  notRequired,
  hideButtons,
  languageFormProps,
}: PassportFormProps) => {
  const { updatePassportDocument, passport, documentLanguage, tabs } =
    useContext(GeneralContext);
  const index = tabs.indexOf("passport");
  const checkRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    updatePassportDocument(event);
  };
  const handleNext = () => {
    if (passport.reason === "" || passport.procedure === "") {
      return;
    } else {
      tabsProps(index === 0 ? "2" : "3");
      window.scroll({
        top: 120,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="cardDetailsContainer">
      <div className="grid">
        <fieldset className="reasons">
          <legend>{passportConfig.label}</legend>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="reason"
              value={passport.reason}
              onChange={(event) => checkRadio(event)}
            >
              {passportConfig.reasons.map((item, index) => (
                <FormControlLabel
                  className="formRadioLabel"
                  style={{ textAlign: "start" }}
                  value={index + 1}
                  key={`passport${index}`}
                  control={<Radio />}
                  label={item}
                />
              ))}
            </RadioGroup>
          </FormControl>
          {passport.reason === "" && (
            <span className="errorMessage">{errorRequired}</span>
          )}
        </fieldset>
        <fieldset className="reasons">
          <ProcedureComponent
            procedureConfig={passportConfig.procedure}
            handleChange={updatePassportDocument}
            state={passport.procedure}
          />
          {passport.procedure === "" && (
            <span className="errorMessage">{errorRequired}</span>
          )}
        </fieldset>
        {documentLanguage === "мк" && (
          <BilingualNameComponent
          name="cardLanguage"
            notRequired={notRequired}
            label={languageFormProps.formDocLabel}
            handleChange={updatePassportDocument}
            state={passport.cardLanguage}
          />
        )}
        {documentLanguage === "мк" && (
          <BilingualNameComponent
            notRequired={notRequired}
            label={languageFormProps.bilingualNameLabel}
            handleChange={updatePassportDocument}
            state={passport.nameLanguage}
            name='nameLanguage'
          />
        )}
        {documentLanguage === "мк" && (
          <BilingualNameComponent label={passportConfig?.formLanguage} 
          state={passport.formLanguage} handleChange={updatePassportDocument} 
          notRequired ={notRequired}
          name="formLanguage"
          />
        )}
      </div>
      {tabs.length > 1 && index + 1 != tabs.length && !hideButtons() && (
        <Button
          variant="contained"
          type="button"
          onClick={handleNext}
          sx={{
            mt: 1,
            mr: 1,
            backgroundColor: "#1976D2",
            borderRadius: "10px",
            border: "none",
            textShadow: "1px 1px 1px black",
          }}
        >
          {next}
        </Button>
      )}
    </div>
  );
};
