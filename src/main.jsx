import { StrictMode } from 'react'
import './index.css'
import  'bootstrap/dist/css/bootstrap.min.css'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router'
import Home from './componets/Home.tsx'
import Help from './componets/help.tsx'
import Wallet from './componets/Wallet.tsx'
import Activity from './componets/Activity.tsx'
import Send from './componets/Send.tsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/help" element={<Help/>} />
      <Route path="/wallet" element={<Wallet/>} />
      <Route path="/activity" element={<Activity/>} />
      <Route path="/send" element={<Send/>} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
