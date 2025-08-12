// frontend/src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom' // <-- Import

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Add the Browser Router here */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)