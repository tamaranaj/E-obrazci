import './Footer.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Footer = ()=>{
   
    return (
        <footer className='footer'>
            <div className='infoContainer'>
            <p className='links'><a href="https://www.linkedin.com/in/tamara-najdovska/" target='blank'><LinkedInIcon sx={{ fontSize: 35 }} /></a>  <a href="https://github.com/tamaranaj/E-obrazci" target='blank'><GitHubIcon sx={{ fontSize: 30 }} /></a></p>
            </div>
            
        </footer>
    )
}
   