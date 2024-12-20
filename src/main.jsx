import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import NotFound from './pages/NotFound/NotFound'
import Accomodation from './pages/Accomodation/Accomodation'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>

      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/accomodation/:id" element={<Accomodation />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      <Footer />

    </Router>
  </StrictMode>,
)
