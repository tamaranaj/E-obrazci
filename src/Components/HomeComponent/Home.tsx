import { useNavigate } from 'react-router-dom'
import './Home.css'

export const Home = ()=>{
    const navigate = useNavigate()
    const navigation = (path:string)=>{
        navigate(path)
    }
    return(
        <div className="container">
            <div className="btnCont">
                <button className='id' onClick={()=>{navigation('/барањеЗаЛичнаКарта')}}>Барање за лична карта</button>
                <button className='passport'onClick={()=>{navigation('/барањеЗаПатнаИсправа')}}>Барање за патна исправа</button>
            </div>
        </div>
    )
}
