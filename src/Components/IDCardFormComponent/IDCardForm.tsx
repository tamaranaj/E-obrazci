import { useForm } from "react-hook-form";
import { useContext } from "react";
import { GeneralContext } from "../../context/general.context";
import "./IDCardForm.css";
import Button from "@mui/material/Button";
import { ErrorMessage } from "@hookform/error-message";
import { PersonalDetailsProps } from "./PersonalDetailsForm";
import { IDCardDocument } from "../../Types/interfaces";

export const IDCardForm = (props: PersonalDetailsProps) => {

  const { updateIDCardDocument, bgColor ,language} = useContext(GeneralContext);
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
              {...register("reason", { required: language =='mkd'? 'Ова поле е задолжително.': 'Kjo fushë është e detyrueshme.' , })}
            />
            <label htmlFor="first" style={{textAlign: 'justify'}}>Прв пат</label></div>
           

            <div className="row-flex-start">
            <input
              type="radio"
              id="change"
              value="редовна замена"
              {...register("reason", { required: language =='mkd'? 'Ова поле е задолжително.': 'Kjo fushë është e detyrueshme.' , })}
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
              {...register("reason", { required: language =='mkd'? 'Ова поле е задолжително.': 'Kjo fushë është e detyrueshme.' , })}
            />
            <label htmlFor="copy" style={{textAlign: 'justify'}}>Промена на податоци (лични податоци, адреса и живеалиште)
            </label>

            </div>
            
            <div className="row-flex-start">
            <input
              type="radio"
              id="newPlace"
              value="дупликат лична карта (изгубена или украдена)"
              {...register("reason", { required: language =='mkd'? 'Ова поле е задолжително.': 'Kjo fushë është e detyrueshme.' ,})}
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
              {...register("reason", { required: language =='mkd'? 'Ова поле е задолжително.': 'Kjo fushë është e detyrueshme.' , })}
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

          <fieldset className="reasons" >
            <legend>Барам личната карта да биде издадена во:</legend>

            <div className="row-flex-start"> <input
              type="radio"
              id="regularProcedure"
              value="редовна"
              {...register("procedure", { required: language =='mkd'? 'Ова поле е задолжително.': 'Kjo fushë është e detyrueshme.' , })}
            />
            <label htmlFor="regularProcedure" style={{textAlign: 'justify'}}>Редовна постапка</label></div>
           

            <div className="row-flex-start">
            <input
              type="radio"
              id="fastProcedure"
              value="итна"
              {...register("procedure", { required: language =='mkd'? 'Ова поле е задолжително.': 'Kjo fushë është e detyrueshme.' , })}
            />
            <label htmlFor="fastProcedure" style={{textAlign: 'justify'}}>
              Итна постапка(во случај кога нема промена на живеалиште или адреса на стан)
            </label>
            </div>
            
            
            <ErrorMessage
              errors={errors}
              name="procedure"
              render={({ message }) => <span className='errorMessage'>{message}</span>}
            />
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
