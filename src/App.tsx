import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Components/HomeComponent/Home'
import StepperComponent from './Components/StepperComponent/Stepper'
import { Header } from './Components/HeaderComponent/Header'

function App() {
  
  return (
    <BrowserRouter>
      <Header/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/е-образци" element={<StepperComponent/>}/>

    </Routes>
    </BrowserRouter>

  )
}

export default App
