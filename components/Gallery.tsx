import React from 'react';
import galleryData from "../src/data/gallery.json";

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 sm:py-32 bg-[#071023]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Gallery</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {galleryData.images && galleryData.images.map((item: any, idx: number) => (
            <div key={idx} className="overflow-hidden rounded-lg">
              <img src={item.image} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
