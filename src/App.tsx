import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Certificates from './components/Certificates/Certificates';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <Header />
      <div className={`page-content ${!isHome ? 'pt-5 mt-5' : ''}`}>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
