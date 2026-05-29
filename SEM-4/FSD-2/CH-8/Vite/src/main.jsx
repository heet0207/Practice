import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import ReactDOM from 'react-dom/client';
import './index.css'
// import Lmn from './lmn.jsx'
import Btn1 from './btn2.jsx'
// import Bg from './bg.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Btn1/>
  </StrictMode>,
)
