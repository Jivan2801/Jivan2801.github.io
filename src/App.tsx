import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import PatentsPublications from './sections/PatentsPublications';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <PatentsPublications />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
