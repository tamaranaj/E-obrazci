import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Components/HomeComponent/Home'
import { FormCreate } from './Components/IDCardFormComponent/Form'
import { PassportForm } from './Components/PassportFormComponent/Form'

function App() {
  
  const[bgColor,setBgColor] = useState(false)
  const changeBgColor = ()=>{
    setBgColor(!bgColor)
    if(bgColor){
      let body = document.getElementsByTagName('body')
      if(body){
        body[0].style.backgroundColor = '#242424'
        body[0].style.color= 'white'
      }
      
    }else{
      let body = document.getElementsByTagName('body')
      if(body){
        body[0].style.backgroundColor = 'white'
        body[0].style.color= 'black'
      }
    }
  }
  return (
    <BrowserRouter>
    <button className='btn' onClick={changeBgColor}>Change</button>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/барањеЗаЛичнаКарта" element={<FormCreate/>}/>
      <Route path='/барањеЗаПатнаИсправа'element={<PassportForm/>}/>
    </Routes>
    </BrowserRouter>

  )
}

export default App
