import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';  // Make sure you import the CSS file where Tailwind directives are added
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
