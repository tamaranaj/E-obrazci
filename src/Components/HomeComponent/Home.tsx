import { useNavigate } from 'react-router-dom'
import './Home.css'
import { useContext, useState } from 'react'
import { GeneralContext } from '../../context/general.context'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'

export const Home = ()=>{
    const {language} = useContext(GeneralContext)
    const [info, setInfo] = useState(false)
    const [notChecked,setNotChecked] = useState(false)
    const navigate = useNavigate()
    const navigation = (path:string)=>{
        if(info){
            navigate(path)
        }else{
            setNotChecked(true)
        }
        
    }

    const handleInfo=()=>{
        setInfo(!info)
    }
    return(
        <div className="homeContainer">

            <h2>{language == 'mkd' ? 'Креирај образци за вадење на лични документи': "Krijoni shabllone për nxjerrjen e dokumenteve personale"}</h2>

            <div className='infoCheckbox'>
                    <Checkbox
                    sx={{width:'10%',marginRight: '10px' }}
                    checked={info}
                    onChange={handleInfo}
                />
                
                {language==='mkd'? (<span className='info'>Оваа апликација НЕ користи колачиња. Целта на оваа апликација е да им се овозможи на граѓаните на Република Северна Македонија, електронски да пополнат и генерираат образец за аплицирање за лична карта, патна исправа или возачка дозвола во Министерството за внатрешни работи. Оваа апликација е самостоен проект и не е поддржан од Министерството за внатрешни работи или други државни органи. Корисникот на апликацијата треба да внимава бидејки идеата на оваа апликација може да биде искористена од трети лица кои би можеле да ги искористат или злоупотребат неговите лични податоци. Овие образци сеуште не се тестирани дали би биле прифатени од страна на полициските службеници при Министерството за внатешни работи.</span>
                ) : (<span className='info'>Ky aplikacion nuk përdor cookie. Qëllimi i këtij aplikacioni është t'u mundësojë qytetarëve të Republikës së Maqedonisë së Veriut që në mënyrë elektronike të plotësojnë dhe gjenerojnë formularin e aplikimit për letërnjoftim, dokument udhëtimi ose patentë shofer në Ministrinë e Punëve të Brendshme. Kjo aplikacion është vetëm një projekt dhe nuk mbështetet nga Ministria për punë të brendshme ose organe të tjera shtetërore. Komisariati i aplikacionit duhet të përdoret si ideja e kësaj aplikacioni për t'u shfrytëzuar nga të tretat persona të cilët mund t'i përdorin ose të keqpërdorin të dhënat personale. Këto forma nuk janë të testuara, nëse do të jenë të lidhura nga ana e departamentit të policisë në Departamentin e Punëve të Brendshme.
                </span>)}              
            </div>
            {notChecked && (language =='mkd'?<p className='error'>Ова е задолжително за да можете да продолжите со користење на апликацијата</p>: <p className='error'>Kjo është vetëm për të vazhduar me përdorimin e aplikacionit</p>)}
            

            <Button variant="contained" sx={{ mt: 1, mr: 1, backgroundColor: '#1976D2', borderRadius: '10px', border: 'none', textShadow: '1px 1px 1px black', width:'130px', height:'40px'}} onClick={()=>{navigation('/е-образци')}}>{language == 'mkd'? 'Започни': 'Filloni'} </Button>
           
        </div>
    )
}
