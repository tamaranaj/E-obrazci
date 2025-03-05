import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Components/HomeComponent/Home'
import StepperComponent from './Components/StepperComponent/Stepper'
import { Header } from './Components/HeaderComponent/Header'
import { Footer } from './Components/Footer/Footer'

function App() {
  
  return (
    <BrowserRouter>
      <Header/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/е-образци" element={<StepperComponent/>}/>

    </Routes>
    <Footer/>
    </BrowserRouter>

  )
}

export default App
