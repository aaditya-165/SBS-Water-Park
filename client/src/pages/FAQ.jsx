import { useState } from 'react';
import SEOHead from '../components/ui/SEOHead';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { seoConfig } from '../config/seoConfig';
import { faq } from '../data/faq';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { siteConfig } from '../config/siteConfig';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleFaq = (idx) => {
    if (openIdx === idx) setOpenIdx(null);
    else setOpenIdx(idx);
  };

  const filteredFaq = faq?.filter(item => 
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  return (
    <>
      <SEOHead 
        title={seoConfig['/faq']?.title || 'FAQ - SBS Water Park'} 
        description={seoConfig['/faq']?.description}
      />
      
      <div className="bg-gradient-to-r from-sky-900 via-cyan-900 to-teal-900 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-2">Frequently Asked Questions</h1>
          <p className="text-sky-200 max-w-xl mx-auto text-base md:text-lg">Got questions? Find clear answers about tickets, dress code, food & timings</p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-10">
            <input 
              type="text" 
              placeholder="Search questions..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-lg"
            />
          </div>

          <div className="space-y-4 mb-16">
            {filteredFaq.length > 0 ? (
              filteredFaq.map((item, idx) => (
                <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button 
                    className="w-full px-6 py-4 text-left font-bold text-gray-900 bg-gray-50 hover:bg-gray-100 flex justify-between items-center"
                    onClick={() => toggleFaq(idx)}
                  >
                    <span>{item.question}</span>
                    <span className="text-cyan-600 text-xl">{openIdx === idx ? '−' : '+'}</span>
                  </button>
                  {openIdx === idx && (
                    <div className="px-6 py-4 bg-white text-gray-700 border-t border-gray-100">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500 py-8">No matching questions found.</div>
            )}
          </div>

          <div className="bg-cyan-50 p-8 rounded-2xl text-center border border-cyan-100">
            <h3 className="text-2xl font-bold text-cyan-900 mb-4">Still have questions?</h3>
            <p className="text-gray-700 mb-6">Our team is happy to help you with any queries you might have.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button as="a" href={getWhatsAppUrl("Hi, I have a question about SBS Water Park.")} variant="primary" className="bg-green-500 hover:bg-green-600 border-green-500 text-white">WhatsApp Us</Button>
              <Button as="a" href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`} variant="outline">Call Us: {siteConfig.phone}</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
