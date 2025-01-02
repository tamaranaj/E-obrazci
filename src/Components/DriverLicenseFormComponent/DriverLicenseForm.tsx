import { useContext } from 'react'
import './DriverLicenseForm.css'
import { GeneralContext } from '../../context/general.context'
import { useForm } from 'react-hook-form'
import { DriverLicense } from '../../Types/interfaces'
import { ErrorMessage } from '@hookform/error-message'
import { Button } from '@mui/material'


export const DriverLicenseForm = ()=> {
    const {updateDriverLicense, bgColor, language} = useContext(GeneralContext)
    
    const createForm = useForm<DriverLicense>({
        criteriaMode: 'all'
    })

    const {register, handleSubmit,formState: {errors}} = createForm

    const submitForm = (data: DriverLicense)=>{
        console.log(data)
        updateDriverLicense(data)

    }
    return(
        <div>
           <form style={bgColor == true ? { color: 'black' } : { color: 'white' }} onSubmit={handleSubmit(submitForm)} >
           <fieldset className="reasons" >
            <legend>{language == 'mkd' ? 'Причина за барање:' : 'Arsyeja e kërkesës:'}</legend>

            <div className="row-flex-start"> <input
              type="radio"
              id="first"
              value="прв пат"
              {...register("reason", { required: language == 'mkd' ? 'Ова поле е задолжително.' : 'Kjo fushë është e detyrueshme.', })}
            />
              <label htmlFor="first" style={{ textAlign: 'justify' }}>{language=='mkd'? 'Издавање на возачка дозвола за прв пат': 'Lëshimi i patentës së shoferit për herë të parë'}</label></div>


            <div className="row-flex-start">
              <input
                type="radio"
                id="change"
                value="замена на странска со македонска"
                {...register("reason", { required: language == 'mkd' ? 'Ова поле е задолжително.' : 'Kjo fushë është e detyrueshme.', })}
              />
              <label htmlFor="change" style={{ textAlign: 'justify' }}>
              {language=='mkd'? 'Замена на странска со македонска возачка дозвола': 'Zëvendësimi i një të huaji me patentë shofer maqedonas'}
              </label>
            </div>

            <div className="row-flex-start">
              <input
                type="radio"
                id="copy"
                value="замена на возачка дозвола поради истек на рокот на важење"
                {...register("reason", { required: language == 'mkd' ? 'Ова поле е задолжително.' : 'Kjo fushë është e detyrueshme.', })}
              />
              <label htmlFor="copy" style={{ textAlign: 'justify' }}>
              {language=='mkd'? 'Замена на возачка дозвола поради истек на рокот на важење': 'Ndërrimi i patentës së shoferit për shkak të skadencës'}
              </label>

            </div>

            <div className="row-flex-start">
              <input
                type="radio"
                id="newPlace"
                value="замена на возачка дозвола поради губење, дотраеност или оштетеност"
                {...register("reason", { required: language == 'mkd' ? 'Ова поле е задолжително.' : 'Kjo fushë është e detyrueshme.', })}
              />
              <label htmlFor="newPlace" style={{ textAlign: 'justify' }}>
              {language=='mkd'? 'Замена на возачка дозвола поради губење, дотраеност или оштетеност': 'Ndërrimi i patentës së shoferit për shkak të humbjes, përkeqësimit ose dëmtimit'}
              </label>
            </div>

            <div className="row-flex-start">
              <input
                type="radio"
                id="broken"
                value="замена поради промена на лично име на возачот"
                {...register("reason", { required: language == 'mkd' ? 'Ова поле е задолжително.' : 'Kjo fushë është e detyrueshme.', })}
              />
              <label htmlFor="broken" style={{ textAlign: 'justify' }}>
              {language=='mkd'? 'Замена поради промена на лично име на возачот': 'Ndërrimi për shkak të ndryshimit të emrit personal të shoferit'}
              </label>
            </div>
            
            <div className="row-flex-start">
              <input
                type="radio"
                id="shortTerm,"
                value="замена поради заверка на нова категорија"
                {...register("reason", { required: language == 'mkd' ? 'Ова поле е задолжително.' : 'Kjo fushë është e detyrueshme.', })}
              />
              <label htmlFor="shortTerm" style={{ textAlign: 'justify' }}>
              {language=='mkd'? 'Замена поради заверка на нова категорија': 'Zëvendësimi për shkak të certifikimit të një kategorie të re'}
              </label>
            </div>
            


            <div className="row-flex-start">
              <input
                type="radio"
                id="shortTerm,"
                value="замена поради промена на живеалиште на возачот"
                {...register("reason", { required: language == 'mkd' ? 'Ова поле е задолжително.' : 'Kjo fushë është e detyrueshme.', })}
              />
              <label htmlFor="shortTerm" style={{ textAlign: 'justify' }}>
              {language=='mkd'? 'Замена поради промена на живеалиште на возачот': 'Ndërrimi për shkak të ndryshimit të vendbanimit të shoferit'}
              </label>
            </div>
            
            
            <div className="row-flex-start">
              <input
                type="radio"
                id="shortTerm,"
                value="издавање на дупликат возачка"
                {...register("reason", { required: language == 'mkd' ? 'Ова поле е задолжително.' : 'Kjo fushë është e detyrueshme.', })}
              />
              <label htmlFor="shortTerm" style={{ textAlign: 'justify' }}>
              {language=='mkd'? 'Издавање на дупликат возачка': 'Lëshimi i një patentë shoferi dublikatë'}
              </label>
            </div>

            <div className="row-flex-start">
              <input
                type="radio"
                id="shortTerm,"
                value="замена поради запишување на ограничувања од здравствени причини"
                {...register("reason", { required: language == 'mkd' ? 'Ова поле е задолжително.' : 'Kjo fushë është e detyrueshme.', })}
              />
              <label htmlFor="shortTerm" style={{ textAlign: 'justify' }}>
              {language=='mkd'? 'Замена поради запишување на ограничувања од здравствени причини': 'Zëvendësimi për shkak të regjistrimit të kufizimeve për arsye shëndetësore'}
              </label>
            </div>

            <div className="row-flex-start">
              <input
                type="radio"
                id="shortTerm,"
                value="замена поради запишување на забрана за управување со моторно возило"
                {...register("reason", { required: language == 'mkd' ? 'Ова поле е задолжително.' : 'Kjo fushë është e detyrueshme.', })}
              />
              <label htmlFor="shortTerm" style={{ textAlign: 'justify' }}>
              {language=='mkd'? 'Замена поради запишување на забрана за управување со моторно возило': 'Zëvendësimi për shkak të regjistrimit të ndalimit të drejtimit të mjetit motorik'}
              </label>
            </div>

            <div className="row-flex-start">
              <input
                type="radio"
                id="shortTerm,"
                value="Продолжување на важност на возачка дозвола според пријавено престојувалиште, а по претходна најава за местото на поднесување на барањето"
                {...register("reason", { required: language == 'mkd' ? 'Ова поле е задолжително.' : 'Kjo fushë është e detyrueshme.', })}
              />
              <label htmlFor="shortTerm" style={{ textAlign: 'justify' }}>
              {language=='mkd'? 'Продолжување на важност на возачка дозвола според пријавено престојувалиште, а по претходна најава за местото на поднесување на барањето': 'Vazhdimi i vlefshmërisë së patentës së shoferit sipas vendbanimit të regjistruar dhe pas njoftimit paraprak të vendit të paraqitjes së kërkesës.'}
              </label>
            </div>

            <ErrorMessage
              errors={errors}
              name="reason"
              render={({ message }) => <span className='errorMessage'>{message}</span>}
            />



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

            <div className="button">
          <Button
            variant="contained"
            type="submit"
            sx={{ mt: 1, mr: 1, backgroundColor: '#1976D2', borderRadius: '10px', border: 'none', textShadow: '1px 1px 1px black' }}
          >
            {language == 'mkd' ? 'Понатаму': 'Më tej'}
          </Button>
        </div>


           </form>
        </div>
    )
}
