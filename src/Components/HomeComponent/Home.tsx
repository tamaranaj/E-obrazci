import { useNavigate } from 'react-router-dom'
import './Home.css'
import { useContext, useState } from 'react'
import { GeneralContext } from '../../context/general.context'
import Button from '@mui/material/Button'
import { LanguageSwitcher } from './LanguageSwitcher'
import { Header } from '../HeaderComponent/Header'


export const Home = ()=>{
    const {language, documentLanguage} = useContext(GeneralContext)
    const [error, setError] = useState(false)
    const navigate = useNavigate()
    const navigation = ()=>{
        if(!documentLanguage){
            setError(true)
            return
        }
        setError(false)
        navigate(`/е-образци/${documentLanguage}`)  
    }

    return(
        <div className="homeContainer">

            <Header/>

            <h2>{language == 'mkd' ? 'Креирај образци за аплицирање за лични документи': "Krijoni formularë aplikimi për dokumente personale"}</h2>

            <div className='infoCheckbox'>               
                {language==='mkd'? (<span className='info'>Оваа апликација НЕ користи колачиња и НЕ користи надворешни сервиси или сервери за запишување/обработка на вашите личните податоци. Внесените лични податоци не го напуштаат вашиот компјутер. Генерирањето на образците се извршува во прелистувачот на вашиот компјутер. Внимавајте на можни лажни сајтови кои ја копираат оваа апликација и би можеле да ги искористат и злоупотребат вашите лични податоци. Оваа апликација е самостоен проект и не е поддржан од Министерството за внатрешни работи или други државни органи. Не гарантираме дека овие образци би биле прифатени од страна на полициските службеници при Министерството за внатрешни работи.</span>
                ) : (<span className='info'>Ky aplikacion NUK përdor cookie dhe NUK përdor shërbime ose serverë të jashtëm për të regjistruar/përpunuar të dhënat tuaja personale. Të dhënat personale të futura nuk largohen nga kompjuteri juaj. Gjenerimi i formularit kryhet në shfletuesin e kompjuterit tuaj.Kujdes nga faqet e mundshme false që kopjojnë këtë aplikacion dhe mund të përdorin dhe abuzojnë me të dhënat tuaja personale. Ky aplikacion është një projekt i pavarur dhe nuk mbështetet nga Ministria e Brendshme apo autoritete të tjera shtetërore. Ne nuk garantojmë se këto formularë do të pranohen nga punonjësit e policisë në Ministrinë e Brendshme.
                </span>)}              
            </div>  

            <div className='column'>
                <LanguageSwitcher/>
                {error && (<span className='errorMessage'>{language === 'mkd'? 'Ова поле е задолжително.':'Kjo fushë është e detyrueshme.'}</span>)}
            </div>          
                    
            <div>
            <Button variant="contained" sx={{ mt: 1, mr: 1, backgroundColor: '#1976D2', borderRadius: '10px', border: 'none', textShadow: '1px 1px 1px black', width:'130px', height:'40px'}} onClick={navigation}>{language == 'mkd'? 'Во ред': 'Në rregull'} </Button>
            </div>
            
           
        </div>
    )
}
