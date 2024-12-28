import { useContext, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Components/HomeComponent/Home'
import { PassportForm } from './Components/PassportFormComponent/Form'
import StepperComponent from './Components/IDCardFormComponent/Stepper'
import { GeneralContext } from './context/general.context'
import { Header } from './Components/HeaderComponent/Header'

function App() {
  
  const{language,bgColor,changeBgColor} = useContext(GeneralContext)
//  const[theme,setTheme] = useState('Темна')
  const change = ()=>{
    changeBgColor()
    let body = document.getElementsByTagName('body')
    if(bgColor){    
        body[0].style.backgroundColor = '#242424'
        // language == 'mkd' ? setTheme('Светла') : setTheme('Dritat')
        
      
    }else{
      
        body[0].style.backgroundColor = 'white'
        // language == 'mkd' ? setTheme('Темна') : setTheme('E errët')
    }
  }
  return (
    <BrowserRouter>
      <Header change={change} />

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/барањеЗаЛичнаКарта" element={<StepperComponent/>}/>
      <Route path='/барањеЗаПатнаИсправа'element={<PassportForm/>}/>
    </Routes>
    </BrowserRouter>

  )
}

export default App
