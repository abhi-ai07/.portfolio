import { Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
//import { useLenis } from './hooks/useLenis'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Experience from './pages/Experience'
import Services from './pages/Services'
import Certificates from './pages/Certificates'
import ScrollToTop from "./components/ScrollToTop";
import Projects from './pages/Projects'


export default function App() {
  //useLenis()

  return (
    <div className="relative min-h-screen flex flex-col">

      <ScrollToTop />

      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/services" element={<Services />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/projects" element={<Projects />} /> 

          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />

    </div>
  );
}