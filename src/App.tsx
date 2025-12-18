import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Components/HomeComponent/Home'
import StepperComponent from './Components/StepperComponent/Stepper'
import { Footer } from './Components/Footer/Footer'
import { albLabels, mkdLabels } from './Components/HelperFunc/formLabels'
import { albPlaceholders, mkdPlaceholders } from './Components/HelperFunc/formPlaceholders'
import { formErrorsAlb, formErrorsMkd } from './Components/HelperFunc/formErrors'
import { stepperLabelsAlb, stepperLabelsMkd } from './Components/HelperFunc/stepperLabels'
import { albPatterns, mkdPattern } from './Components/HelperFunc/formPatterns'
import { childrenFormLabelsAlb, childrenFormLabelsMKD } from './Components/HelperFunc/childrenForm'
import { termsAlb, termsMkd } from './Components/HelperFunc/terms'
import { checkboxPropsAlb, checkboxPropsMkd } from './Components/HelperFunc/checkboxProps'
import { tabsConfigAlb, tabsConfigMkd } from './Components/HelperFunc/tabContainerProps'
import { PageNotFound } from './Components/Page404/PageNotFound'

function App() {
  
  return (
    <BrowserRouter>
        
    <Routes>
      <Route path='/' element={<Home/>}/>
      
      <Route path="/е-образци/мк" element={<StepperComponent savePdf='Сними го барањето' tabsConfig={tabsConfigMkd}  checkboxProps={checkboxPropsMkd} termsInfo={termsMkd} formLabels={mkdLabels} formErrorsMessages={formErrorsMkd} formPlaceholders={mkdPlaceholders} stepperLabels={stepperLabelsMkd} patterns={mkdPattern} childrenForm={childrenFormLabelsMKD}/>}/>
      <Route path='/е-образци/ал' element={<StepperComponent savePdf='Ruaj kërkesën' tabsConfig={tabsConfigAlb}  checkboxProps={checkboxPropsAlb} formLabels={albLabels} termsInfo={termsAlb} formErrorsMessages={formErrorsAlb} formPlaceholders={albPlaceholders} stepperLabels={stepperLabelsAlb} patterns={albPatterns} childrenForm={childrenFormLabelsAlb}/>}/>

      <Route path="*" element={<PageNotFound/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>

  )
}

export default App
