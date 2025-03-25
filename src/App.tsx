import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Components/HomeComponent/Home'
import StepperComponent from './Components/StepperComponent/Stepper'
import { Header } from './Components/HeaderComponent/Header'
import { Footer } from './Components/Footer/Footer'
import { TestComponent } from './Components/PersonalInfoComponent/TestComponent'
import { mkdLabels } from './Components/HelperFunc/formLabels'
import { mkdPlaceholders } from './Components/HelperFunc/formPlaceholders'
import { formErrorsMkd } from './Components/HelperFunc/formErrors'
function App() {
  
  return (
    <BrowserRouter>
      <Header/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/е-образци" element={<StepperComponent/>}/>
      <Route path="/е-образци/мк" element={<TestComponent labels={mkdLabels} examples={mkdPlaceholders} errors={formErrorsMkd}/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>

  )
}

export default App
