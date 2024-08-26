import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import ApiFetching from './ApiFetching'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    // <App />
    <ApiFetching />
  // </StrictMode>,
)
