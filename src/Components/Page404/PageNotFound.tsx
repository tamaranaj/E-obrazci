import { useContext } from 'react'
import './PageNotFound.css'
import { GeneralContext } from '../../context/general.context'

export const PageNotFound = ()=>{
    const {language} = useContext(GeneralContext)
    console.log(language)
    return(
        <div className='page-container'>
            {language ==='mkd' ? <p>Страницата не е пронајдена</p> : <p>Faqja nuk u gjet</p> }
        </div>
    )
}