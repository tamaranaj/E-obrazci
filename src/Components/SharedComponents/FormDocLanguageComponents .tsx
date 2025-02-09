import { useContext } from "react"
import { SharedComponentProps } from "../../Types/interfaces"
import { GeneralContext } from "../../context/general.context"


export const FormDocLanguageComponent = ({handleChange, state}: SharedComponentProps)=>{

    const{language, bgColor} = useContext(GeneralContext)
    
    return (
        <fieldset  style={bgColor == true ? {color: 'black'}: {color: 'white'}} className="reasons">
            <legend>{language=='mkd'? 'Барам образецот да биде изготвен на еден од наведените јазици и писмо:': 'Kërkoj që formulari të hartohet në një nga gjuhët dhe shkrimet e mëposhtme:'} </legend>
            
            
            <select id="named-select" name="cardLanguage" onChange={handleChange} className="select" value={state}>
              <option value={""}>{language=='mkd'? 'Ниту еден': 'Asnjë'}</option>
              <option value={"турски"}>{language=='mkd'? 'Турски': 'Turqisht'}</option>
              <option value={"влашки"}>{language=='mkd'? 'Влашки': 'Vllehët'}</option>
              <option value={"српски"}>{language=='mkd'? 'Српски': 'Serb'}</option>
              <option value={"ромски"}>{language=='mkd'? 'Ромски': 'Romët'}</option>
              <option value={"босански"}>{language=='mkd'? 'Босански': 'Boshnjake'}</option>
            </select>

            <span className="description">{language == 'mkd'? 'Ова поле не е задолжително.':'Kjo fushë është fakultative.'}</span>
        </fieldset>
    )
}
