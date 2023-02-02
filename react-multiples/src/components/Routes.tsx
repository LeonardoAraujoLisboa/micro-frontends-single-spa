import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'

const RoutesComponent = () => (
  <BrowserRouter basename="react-multiples">{/* esse base name é o que vai ser colocado na antes da barra de cada rota /react-multiples/about */}
    <Routes>
      <Route path="/" element={<Home />}/>{/* pode colocar o exact se quiser */}
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
    </Routes>
  </BrowserRouter>
)

export default RoutesComponent