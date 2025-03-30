import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Components/HomeComponent/Home'
import StepperComponent from './Components/StepperComponent/Stepper'
import { Header } from './Components/HeaderComponent/Header'
import { Footer } from './Components/Footer/Footer'
import { albLabels, mkdLabels } from './Components/HelperFunc/formLabels'
import { albPlaceholders, mkdPlaceholders } from './Components/HelperFunc/formPlaceholders'
import { formErrorsAlb, formErrorsMkd } from './Components/HelperFunc/formErrors'
import { stepperLabelsAlb, stepperLabelsMkd } from './Components/HelperFunc/stepperLabels'
function App() {
  
  return (
    <BrowserRouter>
      <Header/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/е-образци/мк" element={<StepperComponent formLabels={mkdLabels} formErrorsMessages={formErrorsMkd} formPlaceholders={mkdPlaceholders} stepperLabels={stepperLabelsMkd}/>}/>
      <Route path='/е-образци/ал' element={<StepperComponent formLabels={albLabels} formErrorsMessages={formErrorsAlb} formPlaceholders={albPlaceholders} stepperLabels={stepperLabelsAlb}/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>

  )
}

export default App
