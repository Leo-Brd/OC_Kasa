import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import NotFound from './pages/NotFound/NotFound'
import Apartment from './pages/Apartment/Apartment'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

// We create all the routes between the Header and Footer components
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>

      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/apartment/:id" element={<Apartment />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      <Footer />

    </Router>
  </StrictMode>,
)
