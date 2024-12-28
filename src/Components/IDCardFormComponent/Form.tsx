import { useForm } from "react-hook-form";
import { useContext } from "react";
import { GeneralContext, IDCardDocument } from "../../context/general.context";
import "./Form.css";
import Button from "@mui/material/Button";
import { ErrorMessage } from "@hookform/error-message";
import { PersonalDetailsProps } from "./PersonalDetailsForm";

export const FormCreate = (props: PersonalDetailsProps) => {

  const { updateIDCardDocument, bgColor } = useContext(GeneralContext);
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
        style={bgColor == true ? {color: 'black'}: {color: 'white'}}
        >
          <div className="grid">

          <fieldset className="reasons" >
            <legend>Причина за барање:</legend>

            <div className="row-flex-start"> <input
              type="radio"
              id="first"
              value="прв пат"
              {...register("reason", { required: 'Ова поле е задолжително.' })}
            />
            <label htmlFor="first" style={{textAlign: 'justify'}}>Прв пат</label></div>
           

            <div className="row-flex-start">
            <input
              type="radio"
              id="change"
              value="редовна замена"
              {...register("reason", { required: 'Ова поле е задолжително.' })}
            />
            <label htmlFor="change" style={{textAlign: 'justify'}}>
              Редовна замена
            </label>
            </div>
            
            <div className="row-flex-start">
            <input
              type="radio"
              id="copy"
              value="промена на податоци (лични податоци, адреса и живеалиште)"
              {...register("reason", { required: 'Ова поле е задолжително.' })}
            />
            <label htmlFor="copy" style={{textAlign: 'justify'}}>Промена на податоци (лични податоци, адреса и живеалиште)
            </label>

            </div>
            
            <div className="row-flex-start">
            <input
              type="radio"
              id="newPlace"
              value="дупликат лична карта (изгубена или украдена)"
              {...register("reason", { required: 'Ова поле е задолжително.' })}
            />
            <label htmlFor="newPlace" style={{textAlign: 'justify'}}>
              Дупликат лична карта (изгубена или украдена)
            </label>
            </div>

            <div className="row-flex-start">
            <input
              type="radio"
              id="broken"
              value="предвремена замена заради оштетеност на личната карта"
              {...register("reason", { required: 'Ова поле е задолжително.' })}
            />
            <label htmlFor="broken" style={{textAlign: 'justify'}}>
              Предвремена замена заради оштетеност на личната карта
            </label>
            </div>
            <ErrorMessage
              errors={errors}
              name="reason"
              render={({ message }) => <span className='errorMessage'>{message}</span>}
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



          </div>
          

          <div className="button">
          <Button
            variant="contained"
            type="submit"
            sx={{ mt: 1, mr: 1,backgroundColor: '#1976D2', borderRadius: '10px', border: 'none', textShadow: '1px 1px 1px black'}}
          >
            Понатаму
          </Button>
          </div>
        </form> 
      </div>

    
  );
};
