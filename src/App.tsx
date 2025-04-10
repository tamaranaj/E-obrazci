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
import { albPatterns, mkdPattern } from './Components/HelperFunc/formPatterns'
import { childrenFormLabelsAlb, childrenFormLabelsMKD } from './Components/HelperFunc/childrenForm'
import { termsAlb, termsMkd } from './Components/HelperFunc/terms'
function App() {
  
  return (
    <BrowserRouter>
      <Header/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/е-образци/мкд" element={<StepperComponent termsInfo={termsMkd} formLabels={mkdLabels} formErrorsMessages={formErrorsMkd} formPlaceholders={mkdPlaceholders} stepperLabels={stepperLabelsMkd} patterns={mkdPattern} childrenForm={childrenFormLabelsMKD}/>}/>
      <Route path='/е-образци/алб' element={<StepperComponent formLabels={albLabels} termsInfo={termsAlb} formErrorsMessages={formErrorsAlb} formPlaceholders={albPlaceholders} stepperLabels={stepperLabelsAlb} patterns={albPatterns} childrenForm={childrenFormLabelsAlb}/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>

  )
}

export default App
