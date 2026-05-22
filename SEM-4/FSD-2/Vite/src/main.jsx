import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Lmn from './Lmn.jsx'
// import App from './App.jsx'
// import Abc from './abc.jsx';
// import Btn from './btn.jsx';
// import Btn from './btn1.jsx';
// import Re1 from './re1.jsx';
import Frm from './frm.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Frm/>
  </StrictMode>,
)
