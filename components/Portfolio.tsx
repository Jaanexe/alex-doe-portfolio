import React, { useState, useRef } from 'react';
import type { PortfolioItem } from '../types';
import { PORTFOLIO_ITEMS } from '../constants';
import Modal from './Modal';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';

const Portfolio: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <section id="portfolio" className="py-20 sm:py-32 bg-[#161b22] overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured Work</h2>
            <p className="text-lg text-slate-400 mt-2 max-w-2xl mx-auto text-balance">
              A curated selection of my projects, from digital art to photography.
            </p>
          </div>
        </div>
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex space-x-6 lg:space-x-8 overflow-x-auto pb-8 px-4 sm:px-6 lg:px-8 no-scrollbar snap-x snap-mandatory"
          >
            {PORTFOLIO_ITEMS.map((item) => (
              <div
                key={item.id}
                className="group relative flex-shrink-0 w-80 md:w-96 snap-center cursor-pointer overflow-hidden rounded-lg shadow-lg"
                onClick={() => setSelectedItem(item)}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover aspect-[4/3] transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white text-xl font-bold">{item.title}</h3>
                  <p className="text-cyan-400 text-sm">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-2 pointer-events-none">
             <button onClick={() => scroll('left')} className="pointer-events-auto bg-white/10 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/20 transition-colors">
                <ChevronLeftIcon className="h-6 w-6" />
            </button>
             <button onClick={() => scroll('right')} className="pointer-events-auto bg-white/10 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/20 transition-colors">
                <ChevronRightIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </section>
      {selectedItem && (
        <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </>
  );
};

export default Portfolio;