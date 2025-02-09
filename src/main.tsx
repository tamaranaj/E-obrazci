import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { GeneralContextProvider } from './context/general.context.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GeneralContextProvider><App /></GeneralContextProvider>
    
  </StrictMode>
)
