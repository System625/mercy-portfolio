import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
