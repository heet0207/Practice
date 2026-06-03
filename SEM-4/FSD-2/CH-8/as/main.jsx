import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import ReactDOM from 'react-dom/client';
import '../../../as/index.css'
// import Lmn from './lmn.jsx'
// import Btn1 from './btn2.jsx'
// import Bg from './bg.jsx'
// import F from './form.jsx'
// import F1 from './form1.jsx'
// import F2 from './form2.jsx'
// import Form from './formall.jsx'
// import Parent from './parent.jsx'
// import T1 from './T1.jsx'
// import T1Parent from './T1_Parent.jsx';
import T1Parent from '../../../as/T1_Parent.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <T1Parent/>
  </StrictMode>,
)
