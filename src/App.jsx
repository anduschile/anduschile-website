import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import ComoFunciona from './pages/ComoFunciona'
import Casos from './pages/Casos'
import Empezar from './pages/Empezar'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/como-funciona" element={<ComoFunciona />} />
          <Route path="/casos" element={<Casos />} />
          <Route path="/empezar" element={<Empezar />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
