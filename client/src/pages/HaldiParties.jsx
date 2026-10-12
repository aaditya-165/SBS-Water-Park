import { useState } from 'react';
import SEOHead from '../components/ui/SEOHead';
import SectionHeading from '../components/ui/SectionHeading';
import HaldiForm from '../components/forms/HaldiForm';
import Button from '../components/ui/Button';
import { seoConfig } from '../config/seoConfig';
import { siteConfig } from '../config/siteConfig';
import { getWhatsAppUrl, whatsappMessages } from '../utils/whatsapp';

// =========================================================================
// 📸 HALDI PHOTO GALLERY DATA (AT TOP OF PAGE)
// To add new photos, simply add image objects to this array with your image path.
// You can put photos in 'client/public/assets/' and refer to them as '/assets/filename.jpeg'
// =========================================================================
const haldiPhotos = [
  {
    id: 1,
    src: '/assets/haldi1.jpeg',
    title: 'Grand Haldi Celebration',
    caption: 'Vibrant yellow vibes, family joy & poolside celebrations',
  },
  {
    id: 2,
    src: '/assets/haldi.jpeg',
    title: 'Traditional Haldi Ceremony',
    caption: 'Traditional rituals blended with waterpark fun & music',
  },
  {
    id: 3,
    src: '/assets/haldi_area.jpeg',
    title: 'Dedicated Celebration Area',
    caption: 'Spacious poolside setting perfect for family gatherings & decor',
  },
  {
    id: 4,
    src: '/assets/celebration_area.jpeg',
    title: 'Decorated Event & Dining Zone',
    caption: 'Ample space for seating, catering, music setup & guests',
  },
];

const haldiHighlights = [
  {
    icon: '🌼',
    title: 'Poolside Haldi Venue',
    desc: 'Spacious open-air pool area decorated with yellow marigold vibes for stunning photos and videos.',
  },
  {
    icon: '💃',
    title: 'Rain Dance & DJ Beats',
    desc: 'Groove to energetic dhol beats and your favorite Bollywood tracks under refreshing rain showers.',
  },
  {
    icon: '🍽️',
    title: 'Delicious Buffet & Food',
    desc: 'Unlimited pure-veg lunch packages, snacks, and refreshments tailored to your guest preferences.',
  },
  {
    icon: '👑',
    title: 'Bride & Groom Special Setup',
    desc: 'Special seating arrangement, floral backdrop options, and dedicated attention for the couple.',
  },
  {
    icon: '🚿',
    title: 'Private Changing Rooms',
    desc: 'Hygienic, separate changing rooms and showers for men and women with secure locker options.',
  },
  {
    icon: '🎉',
    title: 'Full Decoration Support',
    desc: 'Assistance with yellow theme decor, stage setup, balloons, and traditional Haldi props.',
  },
];

export default function HaldiParties() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <>
      <SEOHead 
        title={seoConfig['/haldi-parties']?.title || 'Haldi Ceremony & Celebrations - SBS Water Park Pulgaon'} 
        description={seoConfig['/haldi-parties']?.description || 'Celebrate your Haldi ceremony with rain dance, poolside vibes, delicious food and fun at SBS Water Park.'}
      />
      
      {/* 1. HERO BANNER */}
      <div className="bg-gradient-to-r from-amber-600 via-yellow-600 to-teal-800 text-white py-14 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/15 pointer-events-none" />
        <div className="container mx-auto px-4 text-center relative z-10 max-w-4xl">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/30 text-amber-100 text-sm font-semibold mb-4 border border-amber-300/40 backdrop-blur-xs">
            🌼 Pre-Wedding Special at Pulgaon
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 drop-shadow-sm">
            Celebrate Haldi Ceremony with a Splash!
          </h1>
          <p className="text-amber-100 max-w-2xl mx-auto text-base sm:text-lg md:text-xl font-medium leading-relaxed">
            Turn your Haldi into a festive splash! Enjoy DJ rain dance, vibrant poolside setups, unlimited delicious feasts, and cherished family memories.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a 
              href="#book-haldi" 
              className="px-6 py-3 rounded-full text-base font-bold bg-white text-amber-700 hover:bg-amber-50 shadow-lg hover:scale-105 transition-all"
            >
              Book Haldi Event
            </a>
            <Button 
              href={getWhatsAppUrl(whatsappMessages.haldi)} 
              variant="whatsapp"
              className="text-base py-3 px-6 shadow-lg hover:scale-105 transition-all"
            >
              WhatsApp Us
            </Button>
          </div>
        </div>
      </div>

      {/* ================================================================ */}
      {/* 2. 📸 HALDI PHOTO GALLERY SECTION (AT TOP RIGHT BELOW HERO) */}
      {/* ================================================================ */}
      <section className="py-14 sm:py-16 bg-gradient-to-b from-amber-50/70 via-white to-slate-50 border-b border-amber-200/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-700 bg-amber-100 px-3.5 py-1 rounded-full border border-amber-200">
              📸 Real Event Photos
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
              Haldi Celebrations at SBS Water Park
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              A peek into real Haldi ceremonies, joyful water splashes, and vibrant setups hosted at our park.
            </p>
          </div>

          {/* Large Photo Showcase Grid (2-column layout for prominent image size) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {haldiPhotos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-amber-200/90 transform hover:-translate-y-1.5 flex flex-col"
              >
                {/* Large Image Frame */}
                <div className="relative w-full h-72 sm:h-80 md:h-96 lg:h-[420px] overflow-hidden bg-slate-100">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  {/* Subtle Top Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-black/50 text-white backdrop-blur-md border border-white/20">
                      🌼 Haldi Ceremony
                    </span>
                  </div>

                  {/* Hover Overlay with Zoom Icon */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 uppercase tracking-wider mb-1">
                      <span>🔍</span> Click to view full image
                    </span>
                    <h3 className="font-extrabold text-xl sm:text-2xl text-white leading-tight drop-shadow-sm">
                      {photo.title}
                    </h3>
                    <p className="text-sm text-slate-200 mt-1 line-clamp-2">
                      {photo.caption}
                    </p>
                  </div>
                </div>

                {/* Bottom Caption Bar */}
                <div className="p-5 sm:p-6 bg-white flex items-center justify-between gap-4 border-t border-slate-100">
                  <div>
                    <h4 className="font-bold text-slate-900 text-base sm:text-lg group-hover:text-amber-600 transition-colors">
                      {photo.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                      {photo.caption}
                    </p>
                  </div>
                  <span className="flex-shrink-0 w-9 h-9 rounded-full bg-amber-50 group-hover:bg-amber-500 text-amber-600 group-hover:text-white flex items-center justify-center transition-colors text-sm font-bold shadow-xs">
                    ↗
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-4 rounded-2xl bg-amber-100/70 border border-amber-200 text-center text-xs sm:text-sm text-amber-950 max-w-xl mx-auto flex items-center justify-center gap-2 shadow-xs">
            <span>✨</span>
            <span><strong>Want your special moments captured here?</strong> Book your Haldi ceremony with us!</span>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 3. OVERVIEW & BOOKING FORM */}
      {/* ================================================================ */}
      <section id="book-haldi" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column: Details & Highlights */}
            <div>
              <div className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider rounded-md mb-3">
                Memorable Pre-Wedding Celebrations
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                Make Your Haldi Ceremony Extra Special
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
                Say goodbye to traditional indoor setups and celebrate your Haldi under the open sky! With vibrant yellow colors, water splashes, upbeat music, and water slides, your family and friends will experience an unforgettable pre-wedding bash.
              </p>
              
              {/* Highlights Box */}
              <div className="bg-amber-50/40 rounded-2xl p-6 sm:p-7 shadow-xs border border-amber-200/80 mb-6">
                <h3 className="text-xl font-bold text-amber-950 mb-4 flex items-center gap-2">
                  <span>🌼</span> Haldi Ceremony Inclusions
                </h3>
                <ul className="space-y-3.5 text-slate-700">
                  <li className="flex items-start">
                    <span className="w-5 h-5 rounded-full bg-amber-200 text-amber-800 font-bold text-xs flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">✓</span>
                    <span><strong>Dedicated Poolside Venue:</strong> Exclusive space reserved for your family rituals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 rounded-full bg-amber-200 text-amber-800 font-bold text-xs flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">✓</span>
                    <span><strong>Rain Dance & DJ Celebration:</strong> Dhol beats and custom playlist dedication</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 rounded-full bg-amber-200 text-amber-800 font-bold text-xs flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">✓</span>
                    <span><strong>Special Bride & Groom Setup:</strong> Decorated seating with floral arrangement options</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 rounded-full bg-amber-200 text-amber-800 font-bold text-xs flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">✓</span>
                    <span><strong>Delicious Pure-Veg Food:</strong> Breakfast, welcome drinks & unlimited buffet lunch</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 rounded-full bg-amber-200 text-amber-800 font-bold text-xs flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">✓</span>
                    <span><strong>Clean Changing Facilities:</strong> Showers, costume and locker availability</span>
                  </li>
                </ul>
                <div className="mt-5 pt-4 border-t border-amber-200/60 flex items-center justify-between text-xs text-amber-800">
                  <span>📍 Pulgaon, Wardha District</span>
                  <span>✨ Custom packages available for 20+ guests</span>
                </div>
              </div>

              {/* Quick Contact Card */}
            
            </div>
            
            {/* Right Column: Form */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl border border-amber-100 sticky top-24">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md">
                  Reserve Date
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-2">
                  Plan Your Haldi Ceremony
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill in your details below and our team will get in touch with custom package details.
                </p>
              </div>
              <HaldiForm />
            </div>

          </div>
        </div>
      </section>

      {/* Lightbox Modal for Haldi Photos */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all"
              aria-label="Close"
            >
              ✕
            </button>
            <div className="max-h-[75vh] overflow-hidden flex items-center justify-center bg-black">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="max-h-[75vh] w-auto max-w-full object-contain"
              />
            </div>
            <div className="p-4 bg-slate-950 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-amber-300">{selectedPhoto.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300">{selectedPhoto.caption}</p>
              </div>
              <Button 
                href={getWhatsAppUrl(whatsappMessages.haldi)} 
                variant="whatsapp"
                size="sm"
                className="text-xs"
              >
                Inquire on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* 4. FEATURE PILLARS */}
      <section className="py-16 bg-slate-50 border-t border-slate-200/60">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionHeading 
            title="Why Choose SBS Water Park for Haldi?" 
            subtitle="Everything you need for an unforgettable pre-wedding gathering"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {haldiHighlights.map((item, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-2xl bg-white border border-amber-100 hover:shadow-lg transition-all"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA BANNER */}
      <section className="py-14 bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3">
            Ready to Celebrate Your Haldi in Style?
          </h2>
          <p className="text-amber-100 text-base md:text-lg mb-8 max-w-xl mx-auto">
            Contact us today for custom pricing, special date reservations, and personalized decor packages.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              href={getWhatsAppUrl(whatsappMessages.haldi)} 
              variant="whatsapp"
              className="text-base px-6 py-3 shadow-lg"
            >
              Chat on WhatsApp
            </Button>
            <a 
              href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
              className="px-6 py-3 rounded-full text-base font-bold bg-slate-900 hover:bg-slate-800 text-white shadow-lg transition-all"
            >
              📞 Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
