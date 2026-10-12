import SEOHead from '../components/ui/SEOHead';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { seoConfig } from '../config/seoConfig';
import { offers } from '../data/offers';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function Offers() {
  return (
    <>
      <SEOHead 
        title={seoConfig['/offers']?.title || 'Offers - SBS Water Park'} 
        description={seoConfig['/offers']?.description}
      />
      
      <div className="bg-gradient-to-r from-sky-900 via-cyan-900 to-teal-900 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-2">Special Offers & Discounts</h1>
          <p className="text-sky-200 max-w-xl mx-auto text-base md:text-lg">Exclusive deals, seasonal passes, and group savings at SBS Water Park</p>
        </div>
      </div>

      <section className="py-16 bg-gray-50 min-h-[50vh]">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionHeading title="Current Promotions" subtitle="Save more when you splash more!" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {offers?.map((offer, idx) => (
              <Card key={idx} className="p-8 border-t-4 border-cyan-500 shadow-md">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{offer.title}</h3>
                  <span className="bg-cyan-100 text-cyan-800 text-xs font-bold px-3 py-1 rounded-full uppercase">{offer.badge || 'OFFER'}</span>
                </div>
                <p className="text-gray-600 mb-6 text-lg">{offer.description}</p>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <p className="text-sm text-gray-500 font-medium">Terms: {offer.terms}</p>
                </div>
                <Button 
                  as="a" 
                  href={getWhatsAppUrl(`Hi, I am interested in the ${offer.title} offer.`)} 
                  variant="primary" 
                  className="w-full"
                >
                  Claim via WhatsApp
                </Button>
              </Card>
            ))}
            {(!offers || offers.length === 0) && (
              <div className="col-span-full text-center text-gray-500 py-12">
                More exciting offers coming soon! Check back later.
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
