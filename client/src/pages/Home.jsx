import React, { useState } from 'react';
import { Link } from 'react-router';
import SEOHead from '../components/ui/SEOHead';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { siteConfig } from '../config/siteConfig';
import { seoConfig } from '../config/seoConfig';
import { getLocalBusinessSchema } from '../utils/structuredData';
import { attractions } from '../data/attractions';
import { packages } from '../data/packages';
import { gallery } from '../data/gallery';
import { faq } from '../data/faq';
import { getWhatsAppUrl, whatsappMessages } from '../utils/whatsapp';

export default function Home() {
  const schema = getLocalBusinessSchema();
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const topFaqs = faq.slice(0, 5);

  return (
    <>
      <SEOHead 
        title={seoConfig['/']?.title || 'SBS Water Park | Best Water Park in Pulgaon, Near Wardha'} 
        description={seoConfig['/']?.description} 
        canonical={seoConfig['/']?.canonical}
        ogTitle={seoConfig['/']?.ogTitle}
        ogDescription={seoConfig['/']?.ogDescription}
        ogImage={seoConfig['/']?.ogImage}
        structuredData={schema}
      />

      {/* 1 & 2. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-[#0369a1] via-[#0284c7] to-[#0891b2] text-white overflow-hidden">
        {/* Decorative Wave Overlays */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 800" fill="none">
            <path d="M0,320L60,336C120,352,240,384,360,368C480,352,600,288,720,277.3C840,267,960,309,1080,320C1200,331,1320,309,1380,298.7L1440,288L1440,800L1380,800C1320,800,1200,800,1080,800C960,800,840,800,720,800C600,800,480,800,360,800C240,800,120,800,60,800L0,800Z" fill="white" fillOpacity="0.1" />
            <path d="M0,480L80,496C160,512,320,544,480,528C640,512,800,448,960,432C1120,416,1280,448,1360,464L1440,480L1440,800L1360,800C1280,800,1120,800,960,800C800,800,640,800,480,800C320,800,160,800,80,800L0,800Z" fill="white" fillOpacity="0.15" />
          </svg>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md text-cyan-100 text-sm font-semibold mb-6 border border-white/20">
            <span>📍</span>
            <span>Pulgaon, Wardha District, Maharashtra</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
            Best Water Park in Wardha – <span className="text-amber-300">SBS Water Park</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-cyan-50 font-normal max-w-3xl mx-auto mb-10 leading-relaxed">
            SBS Water Park is a family-friendly water park in Pulgaon, near Wardha. Enjoy exciting water slides, rain dance, family pool and a dedicated kids play area with your family and friends.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button to="/contact" variant="secondary" size="lg" className="w-full sm:w-auto shadow-xl hover:scale-105">
              BOOK NOW
            </Button>
            <Button to="/attractions" variant="outline" size="lg" className="w-full sm:w-auto bg-white/10 text-white border-white hover:bg-white/20 hover:scale-105">
              EXPLORE WATERPARK
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center items-center gap-6 text-sm text-cyan-100">
            <span className="flex items-center gap-1.5">✓ Timings: {siteConfig.timings}</span>
            <span className="flex items-center gap-1.5">✓ Unlimited Lunch Package</span>
            <span className="flex items-center gap-1.5">✓ Costumes Available</span>
          </div>
        </div>
      </section>

      {/* 5. ABOUT SECTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold tracking-wide uppercase mb-3">
                Welcome to SBS Water Park
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
                Your Ultimate Family & Group Splash Destination
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                SBS Water Park is a fun-filled destination near Pulgaon, Wardha, designed for families, friends, school groups and celebrations. With exciting water attractions, refreshing pool zones, music, rain dance and spaces for group entertainment, SBS Water Park is a place to relax, enjoy and create unforgettable memories.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-sky-50 border border-sky-100">
                  <div className="text-2xl font-bold text-sky-700 mb-1">100% Fun</div>
                  <div className="text-sm text-gray-600">Safe pool zones & exciting water slides</div>
                </div>
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-100">
                  <div className="text-2xl font-bold text-amber-700 mb-1">Delicious Meals</div>
                  <div className="text-sm text-gray-600">Unlimited vegetarian lunch packages</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button to="/about" variant="primary">
                  Explore More About Us
                </Button>
                <Button to="/contact" variant="outline">
                  Contact SBS Team
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="/assets/front_gate.jpeg" 
                  alt="SBS Water Park family pool near Wardha" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-gray-100 hidden sm:block max-w-xs">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🌴</span>
                  <div>
                    <div className="font-bold text-gray-900">Resort Vibe in Pulgaon</div>
                    <div className="text-xs text-gray-500">Perfect weekend holiday retreat</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ATTRACTIONS */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Thrilling Attractions & Pool Zones" 
            subtitle="Explore our thrilling water slides, rain dance floor, family pool, and kids zone"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {attractions.map((attr) => (
              <Card key={attr.id} hover={true} className="flex flex-col p-6 border border-sky-100">
                <div className="text-4xl mb-4 bg-sky-100 w-16 h-16 rounded-2xl flex items-center justify-center shadow-xs">
                  {attr.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {attr.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  {attr.description}
                </p>
                <div className="pt-4 border-t border-gray-100">
                  <span className="text-xs font-semibold text-sky-600 uppercase tracking-wider">
                    Verified Feature • Clean & Safe
                  </span>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button to="/attractions" variant="primary" size="lg">
              View All Attractions Details →
            </Button>
          </div>
        </div>
      </section>

      {/* 7. TICKETS & PACKAGES */}
      <section className="py-16 md:py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="SBS Water Park Ticket Prices & Packages" 
            subtitle="Transparent and affordable packages with costumes and delicious unlimited lunch options"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {packages.filter(p => !p.isAddon).map((pkg) => (
              <Card 
                key={pkg.id} 
                hover={true} 
                className={`flex flex-col p-8 rounded-3xl relative border-2 ${
                  pkg.isPopular 
                    ? 'border-sky-500 shadow-xl bg-gradient-to-b from-sky-50/50 to-white' 
                    : 'border-gray-200'
                }`}
              >
                {pkg.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-sky-600 to-cyan-600 text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
                    Most Popular Choice
                  </div>
                )}
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <p className="text-xs text-gray-500 mb-6">{pkg.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-sky-700">{pkg.priceLabel}</span>
                  <span className="text-gray-500 text-sm"> / person</span>
                </div>

                <div className="space-y-3 mb-8 flex-grow">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">What's Included:</div>
                  {pkg.inclusions.map((inc, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-700 gap-2">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  to="/tickets" 
                  variant={pkg.isPopular ? 'primary' : 'outline'} 
                  className="w-full justify-center"
                >
                  Enquire About Package
                </Button>
              </Card>
            ))}
          </div>

          {/* Add-on highlights */}
          <div className="mt-8 p-6 rounded-2xl bg-amber-50 border border-amber-200 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="font-bold text-amber-900 text-base">🍗 Non-Veg Thali Add-on Available</div>
              <div className="text-sm text-amber-800">Upgrade your meal to a special non-vegetarian thali for just ₹300 extra.</div>
            </div>
            <Button to="/tickets" variant="secondary" size="sm">
              Check Food Menu
            </Button>
          </div>
        </div>
      </section>

      {/* 11. GALLERY PREVIEW */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading 
            title="SBS Water Park Pulgaon Photos & Gallery" 
            subtitle="Catch a glimpse of the splashes, smiles, and adventures waiting for you"
            centered={true}
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-12 mb-8">
            {gallery.slice(0, 6).map((item) => (
              <div 
                key={item.id} 
                className="group relative aspect-square rounded-2xl overflow-hidden shadow-md bg-sky-100"
              >
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3 text-left">
                  <span className="text-white text-xs font-bold">{item.title}</span>
                  <span className="text-cyan-200 text-[10px]">{item.category}</span>
                </div>
              </div>
            ))}
          </div>

          <Button to="/gallery" variant="outline" size="lg">
            View Complete Photo Gallery →
          </Button>
        </div>
      </section>

      {/* 12. REVIEWS / VISITOR EXPERIENCES */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Guest Experiences" 
            subtitle="What visitors love most about SBS Water Park in Pulgaon"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Family Fun at Its Best",
                comment: "The water slides and family pool are fantastic! Clean water, good supervision for kids, and the unlimited lunch made it totally worth every rupee.",
                highlight: "Family Outing"
              },
              {
                title: "Incredible Rain Dance & Music",
                comment: "The DJ and rain dance floor were the highlight of our visit with college friends. Great energetic vibe right here in Pulgaon.",
                highlight: "Friends Group"
              },
              {
                title: "Smooth School Trip Experience",
                comment: "We brought our students for an annual picnic. The staff was cooperative, changing rooms were maintained, and children had a blast safely.",
                highlight: "School Picnic"
              }
            ].map((rev, idx) => (
              <Card key={idx} className="p-8 border border-gray-100 bg-sky-50/40 flex flex-col justify-between">
                <div>
                  <div className="text-amber-400 text-lg mb-2">★★★★★</div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{rev.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">"{rev.comment}"</p>
                </div>
                <div className="text-xs font-bold text-sky-700 uppercase tracking-wider pt-4 border-t border-sky-100">
                  {rev.highlight}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 13. INSTAGRAM */}
      <section className="py-16 bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-4xl mb-3 block">📸</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">FOLLOW THE FUN</h2>
          <p className="text-pink-100 text-lg mb-6">
            Tag your splash photos and reels with <span className="font-bold text-white">{siteConfig.instagram}</span> on Instagram!
          </p>
          <a 
            href={siteConfig.instagramUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-gray-900 rounded-full font-bold shadow-lg hover:bg-pink-50 transition-all"
          >
            <span>FOLLOW US ON INSTAGRAM</span>
            <span>↗</span>
          </a>
        </div>
      </section>

      {/* 14. LOCATION & TIMINGS */}
      <section className="py-16 md:py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                title="Location & Park Timings" 
                subtitle="Easily accessible destination in Pulgaon, Wardha District, Maharashtra"
                align="left"
              />
              <div className="space-y-4 my-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl text-sky-600">📍</span>
                  <div>
                    <div className="font-bold text-gray-900">Address</div>
                    <div className="text-gray-600">{siteConfig.address}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl text-amber-500">⏰</span>
                  <div>
                    <div className="font-bold text-gray-900">Operating Hours</div>
                    <div className="text-gray-600">{siteConfig.timings} (Open Daily)</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl text-emerald-600">💬</span>
                  <div>
                    <div className="font-bold text-gray-900">Direct Support</div>
                    <div className="text-gray-600">Phone: {siteConfig.phone} • WhatsApp: {siteConfig.whatsapp}</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} variant="call">
                  Call Now
                </Button>
                <Button href={getWhatsAppUrl(whatsappMessages.general)} variant="whatsapp">
                  WhatsApp Us
                </Button>
                <Button to="/contact" variant="primary">
                  Get Directions
                </Button>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200 bg-sky-50 p-6 flex flex-col justify-center items-center text-center min-h-[320px]">
              <span className="text-5xl mb-4">🗺️</span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Google Maps Directions</h3>
              <p className="text-gray-600 text-sm max-w-sm mb-6">
                Planning your route from Wardha, Pulgaon, Dhamangaon, or surrounding districts? Click below to navigate directly.
              </p>
              <Button href={siteConfig.mapsUrl} variant="primary">
                Open Directions in Maps
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 15. FAQ PREVIEW */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading 
            title="Frequently Asked Questions" 
            subtitle="Quick answers to common questions about tickets, food, and timings"
            centered={true}
          />

          <div className="space-y-4 mt-12">
            {topFaqs.map((item, idx) => (
              <div 
                key={item.id} 
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all"
              >
                <button 
                  type="button" 
                  onClick={() => toggleFaq(idx)} 
                  className="w-full p-6 text-left font-bold text-gray-900 flex justify-between items-center hover:text-sky-600 transition-colors"
                  aria-expanded={openFaq === idx}
                >
                  <span>{item.question}</span>
                  <span className="text-xl ml-4 text-sky-600 font-mono">
                    {openFaq === idx ? '−' : '+'}
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button to="/faq" variant="outline">
              View All 12 FAQs →
            </Button>
          </div>
        </div>
      </section>

      {/* 16. CONTACT CTA BANNER */}
      <section className="py-20 bg-gradient-to-r from-sky-600 via-cyan-600 to-teal-500 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-4">
            Ready to Make a Splash?
          </h2>
          <p className="text-cyan-100 text-lg sm:text-xl max-w-2xl mx-auto mb-8">
            Plan your visit to SBS Water Park today! Book tickets, enquire about group or school rates, and prepare for a day of pure fun.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contact" variant="secondary" size="lg" className="shadow-lg hover:scale-105">
              BOOK / ENQUIRE NOW
            </Button>
            <Button 
              href={getWhatsAppUrl(whatsappMessages.general)} 
              variant="whatsapp" 
              size="lg" 
              className="shadow-lg hover:scale-105"
            >
              CHAT ON WHATSAPP
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
