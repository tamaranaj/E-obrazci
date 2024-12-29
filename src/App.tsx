import { useContext } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Components/HomeComponent/Home'
import StepperComponent from './Components/StepperComponent/Stepper'
import { GeneralContext } from './context/general.context'
import { Header } from './Components/HeaderComponent/Header'

function App() {
  
  const{bgColor,changeBgColor} = useContext(GeneralContext)
  const change = ()=>{
    changeBgColor()
    let body = document.getElementsByTagName('body')
    if(bgColor){    
        body[0].style.backgroundColor = '#242424'      
      
    }else{
      
        body[0].style.backgroundColor = 'white'
    }
  }
  return (
    <BrowserRouter>
      <Header change={change} />

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/е-образци" element={<StepperComponent/>}/>

    </Routes>
    </BrowserRouter>

  )
}

export default App
