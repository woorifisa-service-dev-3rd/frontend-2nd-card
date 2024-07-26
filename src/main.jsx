import React from 'react'
import ReactDOM from 'react-dom/client'
import CardComponent from './component/Card.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
     <CardComponent image={'/src/assets/Samsungwallpaper.jpg'} width={200} height={200}/>
  </React.StrictMode>,
)
