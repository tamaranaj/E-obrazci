import { useContext } from 'react';
import './Footer.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { GeneralContext } from '../../context/general.context';
export const Footer = ()=>{
    const{language} = useContext(GeneralContext)
    return (
        <footer className='footer'>
            <div className='infoContainer'>
            {language === 'mkd' ? (<p className='links'>Информации за проектот <a href="https://www.linkedin.com/in/tamara-najdovska/" target='blank'><LinkedInIcon/></a>  <a href="https://github.com/tamaranaj/E-obrazci" target='blank'><GitHubIcon/></a></p>) : (<p className='links'>Informacion rreth projektit <a href="https://www.linkedin.com/in/tamara-najdovska/" target='blank'><LinkedInIcon/></a>   <a href="https://github.com/tamaranaj/E-obrazci" target='blank'><GitHubIcon/></a></p>)}
            </div>
            
           
            
        </footer>
    )
}
   