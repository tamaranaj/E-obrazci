import { useContext, useState } from 'react'
import './DriverLicenseForm.css'
import { GeneralContext } from '../../context/general.context'
import { BilingualNameComponent } from '../SharedComponents/BilingualNameComponent'
import { ProcedureComponent } from '../SharedComponents/ProcedureComponent'
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'

export const DriverLicenseForm = () => {
    const { language, driverLicense, updateDriverLicense,documentLanguage } = useContext(GeneralContext)
    const [checked, setChecked] = useState(false)
    const checkRadio = (event: React.ChangeEvent<HTMLInputElement> )=>{
        updateDriverLicense(event)
        setChecked(true)
    }

    return (
        <div className='dlWrapper'>
           <fieldset className="reasons"  >
           <legend>{language=='mkd'? 'Причина за барање:':'Arsyeja e kërkesës:'}</legend>
        <FormControl>
          
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="reason"
            value={driverLicense.reason}
            onChange={(event)=>checkRadio(event)}
            >
            <FormControlLabel value="1" control={<Radio/>} label={language == 'mkd' ? 'Издавање на возачка дозвола за прв пат' : 'Lëshimi i patentës së shoferit për herë të parë'}  />

            <FormControlLabel value="2" control={<Radio/>} label= {language == 'mkd' ? 'Замена на странска со македонска возачка дозвола' : 'Zëvendësimi i një të huaji me patentë shofer maqedonas'} />

            <FormControlLabel value="3" control={<Radio/>} label= {language == 'mkd' ? 'Замена на возачка дозвола поради истек на рокот на важење' : 'Ndërrimi i patentës së shoferit për shkak të skadencës'} />

            <FormControlLabel value="4" control={<Radio/>} label= {language == 'mkd' ? 'Замена на возачка дозвола поради губење, дотраеност или оштетеност' : 'Ndërrimi i patentës së shoferit për shkak të humbjes, përkeqësimit ose dëmtimit'} />

            <FormControlLabel value="5" control={<Radio/>} label= {language == 'mkd' ? 'Замена поради промена на лично име на возачот' : 'Ndërrimi për shkak të ndryshimit të emrit personal të shoferit'} />

            <FormControlLabel value="6" control={<Radio/>} label= {language == 'mkd' ? 'Замена поради заверка на нова категорија' : 'Zëvendësimi për shkak të certifikimit të një kategorie të re'}/>

            <FormControlLabel value="7" control={<Radio/>} label= {language == 'mkd' ? 'Замена поради промена на живеалиште на возачот' : 'Ndërrimi për shkak të ndryshimit të vendbanimit të shoferit'} />

            <FormControlLabel value="8" control={<Radio/>} label= {language == 'mkd' ? 'Издавање на дупликат возачка' : 'Lëshimi i një patentë shoferi dublikatë'} />

            <FormControlLabel value="9" control={<Radio/>} label= {language == 'mkd' ? 'Замена поради запишување на ограничувања од здравствени причини' : 'Zëvendësimi për shkak të regjistrimit të kufizimeve për arsye shëndetësore'} />

            <FormControlLabel value="10" control={<Radio/>} label= {language == 'mkd' ? 'Замена поради запишување на забрана за управување со моторно возило' : 'Zëvendësimi për shkak të regjistrimit të ndalimit të drejtimit të mjetit motorik'} />

            <FormControlLabel value="11" control={<Radio/>} label= {language == 'mkd' ? 'Продолжување на важност на возачка дозвола според пријавено престојувалиште, а по претходна најава за местото на поднесување на барањето' : 'Vazhdimi i vlefshmërisë së patentës së shoferit sipas vendbanimit të regjistruar dhe pas njoftimit paraprak të vendit të paraqitjes së kërkesës.'} />
          </RadioGroup>
        </FormControl>

        {!checked && <span className='errorMessage'>{language == 'mkd'? 'Ова поле е задолжително.':"Kjo fushë është e nevojshme."}</span>}
        </fieldset>
        
      
        <ProcedureComponent handleChange={updateDriverLicense} state={driverLicense.procedure}/>

        {documentLanguage==='macedonian' && (<BilingualNameComponent handleChange={updateDriverLicense} state={driverLicense.nameLanguage}/> )}
          
        
                 
        </div>
    )
}
