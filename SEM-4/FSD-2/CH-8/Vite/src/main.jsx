import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import ReactDOM from 'react-dom/client';
import './index.css'
// import Lmn from './lmn.jsx'
import Btn2 from './btn2.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Btn2/>
  </StrictMode>,
)
