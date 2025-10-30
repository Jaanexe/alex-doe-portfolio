import React from 'react';
import heroData from "../src/data/hero.json";
const hero: any = Array.isArray(heroData) ? heroData[0] : heroData;

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col md:flex-row">
      {/* Left Side: Image */}
  <div className="w-full md:w-1/2 min-h-[50vh] md:min-h-screen bg-cover bg-center" style={{ backgroundImage: `url('${hero.backgroundImage}')` }}>
        <div className="w-full h-full bg-black/30"></div>
      </div>
      
      {/* Right Side: Content */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-12 lg:p-16 relative overflow-hidden">
         <div className="absolute inset-0 bg-[#0d1117]">
            <div className="absolute -bottom-1/2 -right-1/3 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-blob"></div>
            <div className="absolute -top-1/4 -left-1/4 w-80 h-80 bg-fuchsia-500/10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
         </div>

        <style>{`
            @keyframes blob {
              0% { transform: translate(0px, 0px) scale(1); }
              33% { transform: translate(30px, -50px) scale(1.1); }
              66% { transform: translate(-20px, 20px) scale(0.9); }
              100% { transform: translate(0px, 0px) scale(1); }
            }
            .animate-blob {
              animation: blob 7s infinite;
            }
            .animation-delay-2000 {
              animation-delay: 2s;
            }
        `}</style>
      
        <div className="relative z-10 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 tracking-tight text-balance">
            {hero.name}
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-slate-300 mb-8 font-light text-balance">
            {hero.tagline}
          </p>
          <a
            href="#portfolio"
            className="inline-block bg-cyan-500 text-white font-bold py-3 px-8 rounded-md text-lg hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/20"
          >
            See My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;