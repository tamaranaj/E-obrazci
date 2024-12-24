import { useForm } from "react-hook-form";
import { useContext } from "react";
import { GeneralContext, IDCardDocument } from "../../context/general.context";
import "./Form.css";
import Button from "@mui/material/Button";
import { ErrorMessage } from "@hookform/error-message";
import { PersonalDetailsProps } from "./PersonalDetailsForm";

export const FormCreate = (props: PersonalDetailsProps) => {

  const { updateIDCardDocument } = useContext(GeneralContext);
  const createForm = useForm<IDCardDocument>({
    criteriaMode: "all",
  });
  const { register, handleSubmit, formState: { errors } } = createForm;

  const submitForm = (data: IDCardDocument)=>{
    console.log(data)
    updateIDCardDocument(data)
    props.handleNext()
  }

  return (
    
      <div className="cardDetailsContainer">
        <form onSubmit={handleSubmit(submitForm)}
        className="cardDetails"
        >

          <fieldset className="reasons">
            <legend>Причина за барање:</legend>

            <div className="row"> <input
              type="radio"
              id="first"
              value="прв пат"
              {...register("reason", { required: 'Ова поле е задолжително.' })}
            />
            <label htmlFor="first">Прв пат</label></div>
           

            <div className="row">
            <input
              type="radio"
              id="change"
              value="замена поради истечен рок на важење"
              {...register("reason", { required: 'Ова поле е задолжително.' })}
            />
            <label htmlFor="change">
              Замена поради истечен рок на важење
            </label>
            </div>
            
            <div className="row">
            <input
              type="radio"
              id="copy"
              value="дупликат лична карта(изгубена, кражба или исчезнување)"
              {...register("reason", { required: 'Ова поле е задолжително.' })}
            />
            <label htmlFor="copy">
              Дупликат лична карта(изгубена, кражба или исчезнување)
            </label>

            </div>
            
            <div className="row-flex-start">
            <input
              type="radio"
              id="newPlace"
              value="предвремена поради оштетување, промена на лични податоци, промена на адреса на живеење, промена на живеалиште и др."
              {...register("reason", { required: 'Ова поле е задолжително.' })}
            />
            <label htmlFor="newPlace" style={{textAlign: 'start'}}>
              Предвремена поради оштетување, промена на лични податоци,
              промена на адреса на живеење, промена на живеалиште.
            </label>
            </div>
            
            <ErrorMessage
              errors={errors}
              name="reason"
              render={({ message }) => <p className='errorMessage'>{message}</p>}
            />
          </fieldset>

          <fieldset className="cardLanguages">
            <label htmlFor="named-select">
              Барам образецот да биде изготвен на еден од наведените јазици и
              писмо:
            </label>
            <select id="named-select" {...register("cardLanguage")} className="select">
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
            <select id="language-select" {...register("nameLanguage")} className="select">
              <option value={"турски"}>турски</option>
              <option value={"влашки"}>влашки</option>
              <option value={"српски"}>српски</option>
              <option value={"ромски"}>ромски</option>
              <option value={"босански"}>босански</option>
            </select>
          </fieldset>

          <div className="btnCont">
          <Button
            variant="contained"
            type="submit"
            sx={{width:'100%'}}
          >
            Continue
          </Button>
          </div>
          

          
          

        </form> 
      </div>

    
  );
};
