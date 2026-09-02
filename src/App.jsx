import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleDrift from './components/ParticleDrift';

function App() {
  return (
    <>
      <ParticleDrift className="fixed inset-0 z-[-1]" />
      <Navbar />
      <main className="w-full flex flex-col pt-16">
        <Hero />
        <About />
        <Projects />
        <section id="resume" className="py-24 bg-transparent relative z-10">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <Experience />
              <Services />
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
