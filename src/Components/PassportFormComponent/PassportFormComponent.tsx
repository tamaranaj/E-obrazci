import { useForm } from "react-hook-form";
import { useContext } from "react";
import { GeneralContext } from "../../context/general.context";
import "./Passport.css";
import Button from "@mui/material/Button";
import { ErrorMessage } from "@hookform/error-message";
import { PersonalDetailsProps } from "../IDCardFormComponent/PersonalDetailsForm";
import { Passport } from "../../Types/interfaces";



export const PassportForm = ({ handleNext }: PersonalDetailsProps) => {

  const { updatePassportDocument, bgColor, language } = useContext(GeneralContext);
  const createForm = useForm<Passport>({
    criteriaMode: "all",
  });
  const { register, handleSubmit, formState: { errors } } = createForm;

  const submitForm = (data: Passport) => {
    console.log(data)
    updatePassportDocument(data)
    handleNext()
  }

  return (

    <div className="cardDetailsContainer">

      <form onSubmit={handleSubmit(submitForm)}
        className="cardDetails"
        style={bgColor == true ? { color: 'black' } : { color: 'white' }}
      >
        <div className="grid">

          <fieldset className="reasons" >
            <legend>{language == 'mkd' ? 'Причина за барање:' : 'Arsyeja e kërkesës:'}</legend>

            <div className="row-flex-start"> <input
              type="radio"
              id="first"
              value="прв пат"
              {...register("reason", { required: language == 'mkd' ? 'Ова поле е задолжително.' : 'Kjo fushë është e detyrueshme.', })}
            />
              <label htmlFor="first" style={{ textAlign: 'justify' }}>Прв пат</label></div>


            <div className="row-flex-start">
              <input
                type="radio"
                id="change"
                value="редовна замена"
                {...register("reason", { required: language == 'mkd' ? 'Ова поле е задолжително.' : 'Kjo fushë është e detyrueshme.', })}
              />
              <label htmlFor="change" style={{ textAlign: 'justify' }}>
                Редовна замена
              </label>
            </div>

            <div className="row-flex-start">
              <input
                type="radio"
                id="copy"
                value="промена на податоци лични податоци"
                {...register("reason", { required: language == 'mkd' ? 'Ова поле е задолжително.' : 'Kjo fushë është e detyrueshme.', })}
              />
              <label htmlFor="copy" style={{ textAlign: 'justify' }}>Промена на лични податоци
              </label>

            </div>

            <div className="row-flex-start">
              <input
                type="radio"
                id="newPlace"
                value="замена поради други причини (исполнетост или друго)"
                {...register("reason", { required: language == 'mkd' ? 'Ова поле е задолжително.' : 'Kjo fushë është e detyrueshme.', })}
              />
              <label htmlFor="newPlace" style={{ textAlign: 'justify' }}>
                Замена поради други причини (исполнетост или друго)
              </label>
            </div>

            <div className="row-flex-start">
              <input
                type="radio"
                id="broken"
                value="предвремена замена заради оштетеност на пасошот"
                {...register("reason", { required: language == 'mkd' ? 'Ова поле е задолжително.' : 'Kjo fushë është e detyrueshme.', })}
              />
              <label htmlFor="broken" style={{ textAlign: 'justify' }}>
                Предвремена замена заради оштетеност на пасошот
              </label>
            </div>
            <ErrorMessage
              errors={errors}
              name="reason"
              render={({ message }) => <span className='errorMessage'>{message}</span>}
            />

            <div className="row-flex-start">
              <input
                type="radio"
                id="shortTerm,"
                value="издавање на пасош со ограничен рок на важност"
                {...register("reason", { required: language == 'mkd' ? 'Ова поле е задолжително.' : 'Kjo fushë është e detyrueshme.', })}
              />
              <label htmlFor="shortTerm" style={{ textAlign: 'justify' }}>
                Издавање на пасош со ограничен рок на важност
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
              {language == 'mkd' ? 'Барам образецот да биде изготвен на еден од наведените јазици и писмо:' : 'Kërkoj që formulari të hartohet në një nga gjuhët dhe shkrimet e mëposhtme:'}
            </label>
            <select id="named-select" {...register("cardLanguage")} className="select">
              <option value={"турски"}>{language == 'mkd' ? 'Турски' : 'Turqisht'}</option>
              <option value={"влашки"}>{language == 'mkd' ? 'Влашки' : 'Vllehët'}</option>
              <option value={"српски"}>{language == 'mkd' ? 'Српски' : 'Serb'}</option>
              <option value={"ромски"}>{language == 'mkd' ? 'Ромски' : 'Romët'}</option>
              <option value={"босански"}>{language == 'mkd' ? 'Босански' : 'Boshnjake'}</option>
            </select>

            <label htmlFor="language-select">
              {language == 'mkd' ? 'Барам податоците за личното име во образецот да бидат испишани на еден од наведените јазици и писмо:' : '"Kërkoj që të dhënat e emrit personal në formular të shkruhen në një nga gjuhët dhe shkrimet e mëposhtme:"'}
            </label>
            <select id="language-select" {...register("nameLanguage")} className="select">
              <option value={"турски"}>{language == 'mkd' ? 'Турски' : 'Turqisht'}</option>
              <option value={"влашки"}>{language == 'mkd' ? 'Влашки' : 'Vllehët'}</option>
              <option value={"српски"}>{language == 'mkd' ? 'Српски' : 'Serb'}</option>
              <option value={"ромски"}>{language == 'mkd' ? 'Ромски' : 'Romët'}</option>
              <option value={"босански"}>{language == 'mkd' ? 'Босански' : 'Boshnjake'}</option>
            </select>
          </fieldset>

          <fieldset className="reasons" >
            <legend>{language == 'mkd' ? 'Барам патната исправа да биде издадена во:' : 'Kërkoj që dokumenti i udhëtimit të lëshohet në:'}</legend>

            <div className="row-flex-start"> <input
              type="radio"
              id="regularProcedure"
              value="редовна"
              {...register("procedure", { required: language == 'mkd' ? 'Ова поле е задолжително.' : 'Kjo fushë është e detyrueshme.', })}
            />
              <label htmlFor="regularProcedure" style={{ textAlign: 'justify' }}>{language == 'mkd' ? 'Редовна постапка' : 'Procedurë e rregullt'}</label></div>


            <div className="row-flex-start">
              <input
                type="radio"
                id="fastProcedure"
                value="итна"
                {...register("procedure", { required: language == 'mkd' ? 'Ова поле е задолжително.' : 'Kjo fushë është e detyrueshme.', })}
              />
              <label htmlFor="fastProcedure" style={{ textAlign: 'justify' }}>
                {language == 'mkd' ? 'Итна постапка' : 'Procedurë urgjente'}
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
            sx={{ mt: 1, mr: 1, backgroundColor: '#1976D2', borderRadius: '10px', border: 'none', textShadow: '1px 1px 1px black' }}
          >
            Понатаму
          </Button>
        </div>
      </form>
    </div>


  );
}
