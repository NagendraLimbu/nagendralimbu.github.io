
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
  return (
    <>
      <Header />
      <div className="page-content">
        <Intro />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Certificates />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
