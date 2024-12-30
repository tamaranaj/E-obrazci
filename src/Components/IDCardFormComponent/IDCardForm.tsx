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
            <legend>{language=='mkd'? 'Причина за барање:':'Arsyeja e kërkesës:'}</legend>

            <div className="row-flex-start"> <input
              type="radio"
              id="first"
              value="прв пат"
              {...register("reason", { required: language =='mkd'? 'Ова поле е задолжително.': 'Kjo fushë është e detyrueshme.' , })}
            />
            <label htmlFor="first" style={{textAlign: 'justify'}}>{language=='mkd'? 'Прв пат': 'Herën e parë'}</label></div>
           

            <div className="row-flex-start">
            <input
              type="radio"
              id="change"
              value="редовна замена"
              {...register("reason", { required: language =='mkd'? 'Ова поле е задолжително.': 'Kjo fushë është e detyrueshme.' , })}
            />
            <label htmlFor="change" style={{textAlign: 'justify'}}>
            {language=='mkd'? 'Редовна замена': 'Zëvendësimi i rregullt'}
            </label>
            </div>
            
            <div className="row-flex-start">
            <input
              type="radio"
              id="copy"
              value="промена на податоци (лични податоци, адреса и живеалиште)"
              {...register("reason", { required: language =='mkd'? 'Ова поле е задолжително.': 'Kjo fushë është e detyrueshme.' , })}
            />
            <label htmlFor="copy" style={{textAlign: 'justify'}}>
            {language=='mkd'? 'Промена на податоци (лични податоци, адреса и живеалиште)': 'Ndryshimi i të dhënave (të dhënat personale, adresa dhe vendbanimi)'}
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
            {language=='mkd'? 'Дупликат лична карта (изгубена или украдена)': 'ID dublikatë (e humbur ose e vjedhur)'}             
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
            {language=='mkd'? 'Предвремена замена заради оштетеност на личната карта': 'Ndërrimi i parakohshëm për shkak të dëmtimit të kartës së identitetit'}
              
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
            {language=='mkd'? 'Барам образецот да биде изготвен на еден од наведените јазици и писмо:': 'Kërkoj që formulari të hartohet në një nga gjuhët dhe shkrimet e mëposhtme:'} 
            </label>
            <select id="named-select" {...register("cardLanguage")} className="select">
              <option value={"турски"}>{language=='mkd'? 'Турски': 'Turqisht'}</option>
              <option value={"влашки"}>{language=='mkd'? 'Влашки': 'Vllehët'}</option>
              <option value={"српски"}>{language=='mkd'? 'Српски': 'Serb'}</option>
              <option value={"ромски"}>{language=='mkd'? 'Ромски': 'Romët'}</option>
              <option value={"босански"}>{language=='mkd'? 'Босански': 'Boshnjake'}</option>
            </select>

            <label htmlFor="language-select">
            {language=='mkd'? 'Барам податоците за личното име во образецот да бидат испишани на еден од наведените јазици и писмо:': '"Kërkoj që të dhënat e emrit personal në formular të shkruhen në një nga gjuhët dhe shkrimet e mëposhtme:"'} 
              
            </label>
            <select id="language-select" {...register("nameLanguage")} className="select">
              <option value={"турски"}>{language=='mkd'? 'Турски': 'Turqisht'}</option>
              <option value={"влашки"}>{language=='mkd'? 'Влашки': 'Vllehët'}</option>
              <option value={"српски"}>{language=='mkd'? 'Српски': 'Serb'}</option>
              <option value={"ромски"}>{language=='mkd'? 'Ромски': 'Romët'}</option>
              <option value={"босански"}>{language=='mkd'? 'Босански': 'Boshnjake'}</option>
            </select>
          </fieldset>

          <fieldset className="reasons" >
            <legend>{language=='mkd'? 'Барам личната карта да биде издадена во:': 'Kërkoj që të lëshohet letërnjoftimi:'}</legend>

            <div className="row-flex-start"> <input
              type="radio"
              id="regularProcedure"
              value="редовна"
              {...register("procedure", { required: language =='mkd'? 'Ова поле е задолжително.': 'Kjo fushë është e detyrueshme.' , })}
            />
            <label htmlFor="regularProcedure" style={{textAlign: 'justify'}}>{language=='mkd'? 'Редовна постапка': 'Procedurë e rregullt'}</label></div>
           

            <div className="row-flex-start">
            <input
              type="radio"
              id="fastProcedure"
              value="итна"
              {...register("procedure", { required: language =='mkd'? 'Ова поле е задолжително.': 'Kjo fushë është e detyrueshme.' , })}
            />
            <label htmlFor="fastProcedure" style={{textAlign: 'justify'}}>
            {language=='mkd'? 'Итна постапка(во случај кога нема промена на живеалиште или адреса на стан)': 'Procedurë urgjente (në rast se nuk ka ndryshim të adresës së vendbanimit apo banesës)'}
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
            {language == 'mkd' ? 'Понатаму': 'Më tej'}
          </Button>
          </div>
        </form> 
      </div>

    
  );
};
