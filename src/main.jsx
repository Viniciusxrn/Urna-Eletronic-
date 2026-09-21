import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Routes, Route} from 'react-router-dom'
import { BrowserRouter} from 'react-router-dom'
import Vota from './components/Vota.jsx'
import Fim from './components/Fim.jsx'





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/Votar' element={<Vota /> }/>
        <Route path='/Fim' element={<Fim />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
  
  // DENTRO DO COMPONENTE ROUTE, EU VOU DIZER AS ROTAS, OU SEJA, QUANDO EU VOU RENDERIZAR UM COMPONENTE OU OUTRO, NA PÁGINA
  
)
