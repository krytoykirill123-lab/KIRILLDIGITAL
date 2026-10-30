  import React from 'react'
  import ReactDOM from '//react-dom/client'
  import App from './App'
  import './styles/globals.css'
  import CustomCursor from './components/CustomCursor'

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <CustomCursor />
      <App />
    </React.StrictMode>,
  )import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

