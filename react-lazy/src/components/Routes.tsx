import React, { lazy, Suspense } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

const About = lazy(() => import('../pages/About'))
const Contact = lazy(() => import('../pages/Contact'))
const Home = lazy(() => import('../pages/Home'))

const RoutesComponent = () => (
  <Suspense fallback={<h1>Carregando...</h1>}>
    <BrowserRouter basename="react-lazy">{/* esse base name é o que vai ser colocado na antes da barra de cada rota /react-multiples/about */}
      <Routes>
        <Route path="/" element={<Home />}/>{/* pode colocar o exact se quiser */}
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </BrowserRouter>
  </Suspense>
)

export default RoutesComponent