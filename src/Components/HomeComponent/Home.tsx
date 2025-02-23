import { useNavigate } from 'react-router-dom'
import './Home.css'
import { useContext } from 'react'
import { GeneralContext } from '../../context/general.context'
import Button from '@mui/material/Button'

export const Home = ()=>{
    const {language} = useContext(GeneralContext)
    const navigate = useNavigate()
    const navigation = (path:string)=>{
        navigate(path)
    }
    return(
        <div className="homeContainer">

            <h2>{language == 'mkd' ? 'Креирај образци за вадење на лични документи': "Krijoni shabllone për nxjerrjen e dokumenteve personale"}</h2>

            <Button variant="contained" sx={{ mt: 1, mr: 1, backgroundColor: '#1976D2', borderRadius: '10px', border: 'none', textShadow: '1px 1px 1px black'}} onClick={()=>{navigation('/е-образци')}}>{language == 'mkd'? 'Започни': 'Filloni'}</Button>
           
        </div>
    )
}
