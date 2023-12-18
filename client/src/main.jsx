import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "./assets/css/LoginPage.css";
import "./assets/css/Navbar.css";
import "./assets/css/VerifyMailPage.css";
import "./assets/css/AdminPanel.css"
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
