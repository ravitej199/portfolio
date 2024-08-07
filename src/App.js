import Header from './Components/header/Header';
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/about/About';
import Skills from './Components/skills/Skills';
import Qualifications  from './Components/qualifications/qualifications';
import Contact from './Components/contact/contact';
import Footer from './Components/Footer/Footer';
import Project from './Components/projects/Project';
function App() {
  return (
    <>
  <Header/>
  <main className='main'>
    <Home/>
    <About/>
    <Skills/>
    <Qualifications/>
    <Project/>
    <Contact/>
    <Footer/>
    
    
  
  </main>

    </>
  );
}

export default App;
