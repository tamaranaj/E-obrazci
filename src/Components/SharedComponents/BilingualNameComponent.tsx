interface BilingualNameComponentProps{
    handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
    state:string,
    label:string,
    notRequired:string
}
export const BilingualNameComponent=({handleChange, state,label,notRequired}: BilingualNameComponentProps)=>{

    return(
        <fieldset className="reasons">
            <legend style={{textWrap:'wrap'}}>{label}</legend>
            <select id="language-select" name="nameLanguage" onChange={handleChange} className="select" value={state}>
                <option value={""}>Ниту еден</option>
              <option value={"турски"}>Турски</option>
              <option value={"влашки"}>Влашки</option>
              <option value={"српски"}>Српски</option>
              <option value={"ромски"}>Ромски</option>
              <option value={"босански"}>Босански</option>
            </select>

            <span className="description">{notRequired}</span>
        </fieldset>
    )
}
