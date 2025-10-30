import React, { useEffect } from 'react';
import type { PortfolioItem } from '../types';

interface ModalProps {
  item: PortfolioItem;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEsc);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] p-4 animate-fade-in"
      onClick={onClose}
    >
        <style>{`
            @keyframes fade-in {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            .animate-fade-in {
                animation: fade-in 0.3s ease-out forwards;
            }
        `}</style>
      <div
        className="bg-[#161b22] rounded-lg shadow-xl max-w-4xl w-full relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-slate-400 bg-slate-800/50 rounded-full p-1 hover:bg-slate-700 hover:text-white z-10 transition-colors"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="grid grid-cols-1 md:grid-cols-5">
          <div className="md:col-span-3">
             <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover max-h-[80vh]" />
          </div>
          <div className="md:col-span-2 p-8 flex flex-col justify-center">
            <span className="inline-block bg-cyan-500/20 text-cyan-300 text-xs font-semibold px-2 py-1 rounded-full mb-4 self-start">
              {item.category}
            </span>
            <h2 className="text-3xl font-bold text-white mb-4">{item.title}</h2>
            <p className="text-slate-300 leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;