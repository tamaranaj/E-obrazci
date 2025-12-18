interface BilingualNameComponentProps {
    handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
    state: string,
    label?: string,
    notRequired: string
    name: string
}
const options = [
    { value: '', optionLabel: 'Ниту еден' },
    { value: 'турски', optionLabel: 'Турски' },
    { value: 'влашки', optionLabel: 'Влашки' },
    { value: 'српски', optionLabel: 'Српски' },
    { value: 'ромски', optionLabel: 'Ромски' },
    { value: 'босански', optionLabel: 'Босански' },
]
export const BilingualNameComponent = ({ handleChange, state, label, notRequired, name }: BilingualNameComponentProps) => {
    return (
        <fieldset className="reasons">
            <legend style={{ textWrap: 'wrap' }}>{label}</legend>
            <select id="language-select" name={name} onChange={handleChange} className="select" value={state}>
                {options.map(({ value, optionLabel }) => (
                    <option key={optionLabel} value={value}>{optionLabel}</option>
                ))}
            </select>
            <span className="description">{notRequired}</span>
        </fieldset>
    )
}
