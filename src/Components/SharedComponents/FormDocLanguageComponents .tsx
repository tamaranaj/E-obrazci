import { SharedComponentProps } from "../../Types/interfaces"
export const FormDocLanguageComponent = ({handleChange, state}: SharedComponentProps)=>{ 
    return (
        <fieldset  className="reasons">
            <legend>Барам образецот да биде изготвен на еден од наведените јазици и писмо:</legend>
            
            
            <select id="named-select" name="cardLanguage" onChange={handleChange} className="select" value={state}>
            <option value={""}>Ниту еден</option>
              <option value={"турски"}>Tурски</option>
              <option value={"влашки"}>Влашки</option>
              <option value={"српски"}>Српски</option>
              <option value={"ромски"}>Ромски</option>
              <option value={"босански"}>Босански</option>
            </select>

            <span className="description">Ова поле не е задолжително.</span>
        </fieldset>
    )
}
