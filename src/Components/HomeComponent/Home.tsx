import { useNavigate } from 'react-router-dom'
import './Home.css'
import { useContext } from 'react'
import { GeneralContext } from '../../context/general.context'

export const Home = ()=>{
    const {language, bgColor} = useContext(GeneralContext)
    const navigate = useNavigate()
    const navigation = (path:string)=>{
        navigate(path)
    }
    return(
        <div className="homeContainer">

            <h2 style={bgColor ? {color: 'black'}: {color:'white'}}>{language == 'mkd' ? 'Креирај образци за вадење на лични документи': "Krijoni shabllone për nxjerrjen e dokumenteve personale"}</h2>

                <button className='id' onClick={()=>{navigation('/е-образци')}}>{language == 'mkd'? 'Започни': 'Filloni'}</button>
        </div>
    )
}
