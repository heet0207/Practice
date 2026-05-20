import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Lmn from './Lmn.jsx'
// import App from './App.jsx'
import Abc from './abc.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Abc />
  </StrictMode>,
)
