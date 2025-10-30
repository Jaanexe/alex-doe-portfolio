import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="bg-[#0d1117] min-h-screen">
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <About />
        <Skills />
      </main>
      <Contact />
    </div>
  );
};

export default App;