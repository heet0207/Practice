import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import ReactDOM from 'react-dom/client';
import './index.css'
// import Lmn from './lmn.jsx'
// import Btn1 from './btn2.jsx'
// import Bg from './bg.jsx'
// import F from './form.jsx'
// import F1 from './form1.jsx'
// import F2 from './form2.jsx'
import Form from './formall.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Form/>
  </StrictMode>,
)
