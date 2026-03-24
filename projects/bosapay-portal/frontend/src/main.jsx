import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './variables.css'
import App from './bosapay_portal.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
