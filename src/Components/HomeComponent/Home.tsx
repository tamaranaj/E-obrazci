import { useNavigate } from 'react-router-dom'
import './Home.css'
import { useContext } from 'react'
import { GeneralContext } from '../../context/general.context'

export const Home = ()=>{
    const {language} = useContext(GeneralContext)
    const navigate = useNavigate()
    const navigation = (path:string)=>{
        navigate(path)
    }
    return(
        <div className="container">
            <div className="btnCont">
                <button className='id' onClick={()=>{navigation('/барањеЗаЛичнаКарта')}}>{language == 'mkd'? 'Барање за лична карта': 'Kërkesë për ID'}</button>
                <button className='passport'onClick={()=>{navigation('/барањеЗаПатнаИсправа')}}>{language == 'mkd'? 'Барање за патна исправа': 'Aplikimi për një dokument udhëtimi'}</button>
            </div>
        </div>
    )
}
