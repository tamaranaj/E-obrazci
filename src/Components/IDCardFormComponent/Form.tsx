import { useForm } from "react-hook-form";
import { FormEvent, useContext } from "react";
import { GeneralContext } from "../../context/general.context";
import "./Form.css";
import { PersonalDetailsProps } from "./PersonalDetailsForm";
import Button from "@mui/material/Button";

interface FormCreateProps{
  handleNext: ()=>void,
  handleBack: ()=>void,
}

export const FormCreate = (props: FormCreateProps) => {

  const { updateIDCardDocument } = useContext(GeneralContext);
  const createForm = useForm({
    defaultValues: {
      reason: "",
      firstName: "",
      lastName: "",
      cardLanguage: "српски",
      nameLanguage: "српски",
      marriedLastName: "",
      fatherName: "",
      motherName: "",
      birth: "",
      placeBirth: "",
      socialNumber: "",
      gender: "",
      address: "",
      phone: "",
    },
  });
  const { register, getValues, setValue } = createForm;
  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let result = getValues();
    console.log("form results:", result);
    updateIDCardDocument(result)
    props.handleNext()
  };

  // let year = new Date().getFullYear()-15
  // let month = new Date().getMonth().toString()
  // let day = new Date().getDate().toString()

  // const maxDate = `${year}-${month}-${day}`

  return (
    <>
      <div className="container">
        <form onSubmit={async (e) => { await submitForm(e); }}
        >
          {/* <h1>{maxDate}</h1> */}


          <fieldset className="reasons">
            <legend>Причина за барање:</legend>

            <input
              type="radio"
              id="first"
              value="прв пат"
              {...register("reason")}
            />
            <label htmlFor="first">Прв пат</label>


            <input
              type="radio"
              id="change"
              value="замена поради истечен рок на важење"
              {...register("reason")}
            />
            <label htmlFor="change">
              Замена поради истечен рок на важење
            </label>

            <input
              type="radio"
              id="copy"
              value="дупликат лична карта(изгубена, кражба или исчезнување)"
              {...register("reason")}
            />
            <label htmlFor="copy">
              Дупликат лична карта(изгубена, кражба или исчезнување)
            </label>

            <input
              type="radio"
              id="newPlace"
              value="предвремена поради оштетување, промена на лични податоци, промена на адреса на живеење, промена на живеалиште и др."
              {...register("reason")}
            />
            <label htmlFor="newPlace">
              Предвремена поради оштетување, промена на лични податоци,
              промена на адреса на живеење, промена на живеалиште.
            </label>

          </fieldset>

          <fieldset>
            <label htmlFor="named-select">
              Барам образецот да биде изготвен на еден од наведените јазици и
              писмо:
            </label>
            <select id="named-select" {...register("cardLanguage")}>
              <option value={"турски"}>турски</option>
              <option value={"влашки"}>влашки</option>
              <option value={"српски"}>српски</option>
              <option value={"ромски"}>ромски</option>
              <option value={"босански"}>босански</option>
            </select>

            <label htmlFor="language-select">
              Барам податоците за личното име во образецот да бидат испишани
              на еден од наведените јазици и писмо:
            </label>
            <select id="language-select" {...register("nameLanguage")}>
              <option value={"турски"}>турски</option>
              <option value={"влашки"}>влашки</option>
              <option value={"српски"}>српски</option>
              <option value={"ромски"}>ромски</option>
              <option value={"босански"}>босански</option>
            </select>
          </fieldset>

          <div>
          <Button
            variant="contained"
            type="submit"
            sx={{ mt: 1, mr: 1 }}
          >
            Continue
          </Button>

          {/* <Button
            variant="contained"
            type="button"
            sx={{ mt: 1, mr: 1 }}
            onClick={props.handleBack}
          >
            Back
          </Button> */}

          </div>
          

        </form> </div>

    </>
  );
};
