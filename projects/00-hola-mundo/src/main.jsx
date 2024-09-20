import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import { App } from './App'
import './index.css'
// import App from './App.jsx'
// import './index.css'

const root = createRoot(document.getElementById('root'))
//  Fragment agrupa elementos sin introducir elementos extra a niel de DOM
// los componentes siempre tienen que ser PascalCase 
root.render(
    <App />
)
