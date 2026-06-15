import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Navbar from './Navbar.jsx'
// import VideoCard from './VideoCard.jsx'
// import Sidebar from './Sidebar.jsx'
import App from './App.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
     {/* <Navbar/> */}
     {/* <VideoCard/> */}
     {/* <Sidebar/> */}
     <App/>
  </StrictMode>,
)
