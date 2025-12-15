interface FormDocLanguageComponentProps{
    handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
    state: string
    label:string
    notRequired:string
}
export const FormDocLanguageComponent = ({handleChange, state, notRequired, label}: FormDocLanguageComponentProps)=>{ 
    return (
        <fieldset  className="reasons">
            <legend>{label}</legend>           
            <select id="named-select" name="cardLanguage" onChange={handleChange} className="select" value={state}>
            <option value={""}>Ниту еден</option>
              <option value={"турски"}>Tурски</option>
              <option value={"влашки"}>Влашки</option>
              <option value={"српски"}>Српски</option>
              <option value={"ромски"}>Ромски</option>
              <option value={"босански"}>Босански</option>
            </select>
            <span className="description">{notRequired}</span>
        </fieldset>
    )
}
