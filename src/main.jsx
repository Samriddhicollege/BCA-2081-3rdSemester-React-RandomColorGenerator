import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import RandomColor from './Project/Random_Color.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RandomColor />
  </StrictMode>,
)
