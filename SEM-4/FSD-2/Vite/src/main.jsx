import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Lmn from './Lmn.jsx'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Lmn />
  </StrictMode>,
)
