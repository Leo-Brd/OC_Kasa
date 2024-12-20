import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/home'
import About from './pages/About/about'
import NotFound from './pages/NotFound/notFound'
import Accomodation from './pages/Accomodation/accomodation'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import accomodations from './assets/accomodations.json';


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
