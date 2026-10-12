import { useState } from 'react';
import SEOHead from '../components/ui/SEOHead';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { seoConfig } from '../config/seoConfig';
import { gallery } from '../data/gallery';

export default function Gallery() {
  const [filter, setFilter] = useState('ALL');
  const [lightboxImg, setLightboxImg] = useState(null);

  const categories = ['ALL', 'WATERPARK', 'WATER SLIDES', 'POOLS', 'FAMILY', 'KIDS', 'EVENTS'];
  
  const filteredImages = filter === 'ALL' 
    ? gallery 
    : gallery?.filter(img => img.category === filter);

  return (
    <>
      <SEOHead 
        title={seoConfig['/gallery']?.title || 'Gallery - SBS Water Park'} 
        description={seoConfig['/gallery']?.description}
      />
      
      <div className="bg-gradient-to-r from-sky-900 via-cyan-900 to-teal-900 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-2">SBS Water Park Photos & Gallery</h1>
          <p className="text-sky-200 max-w-xl mx-auto text-base md:text-lg">Real moments of splash, joy, and memories captured at Pulgaon</p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  filter === cat 
                    ? 'bg-cyan-600 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages?.map((img, idx) => (
              <div 
                key={idx} 
                className="aspect-square bg-sky-100 rounded-2xl overflow-hidden cursor-pointer group relative shadow-md"
                onClick={() => setLightboxImg(img)}
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-left">
                  <span className="text-white text-sm font-bold">{img.title}</span>
                  <span className="text-cyan-200 text-xs">{img.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImg && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setLightboxImg(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white text-3xl hover:text-cyan-400 bg-black/50 w-12 h-12 rounded-full flex items-center justify-center transition-colors"
            onClick={() => setLightboxImg(null)}
            aria-label="Close"
          >
            ✕
          </button>
          <div 
            className="max-w-4xl w-full max-h-[90vh] flex flex-col items-center cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={lightboxImg.src} 
              alt={lightboxImg.alt} 
              className="max-h-[75vh] w-auto rounded-2xl shadow-2xl object-contain"
            />
            <div className="mt-4 text-center text-white">
              <h3 className="text-xl font-bold">{lightboxImg.title}</h3>
              <p className="text-sm text-cyan-200">{lightboxImg.alt}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
