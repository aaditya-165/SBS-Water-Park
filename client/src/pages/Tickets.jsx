import SEOHead from '../components/ui/SEOHead';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import TicketEnquiryForm from '../components/forms/TicketEnquiryForm';
import { seoConfig } from '../config/seoConfig';
import { packages } from '../data/packages';

export default function Tickets() {
  return (
    <>
      <SEOHead 
        title={seoConfig['/tickets']?.title || 'Tickets - SBS Water Park'} 
        description={seoConfig['/tickets']?.description}
      />
      
      <div className="bg-gradient-to-r from-sky-900 via-cyan-900 to-teal-900 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-2">SBS Water Park Tickets & Packages</h1>
          <p className="text-sky-200 max-w-xl mx-auto text-base md:text-lg">Transparent pricing with delicious unlimited meal options</p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionHeading title="Choose Your Package" subtitle="Affordable plans with or without meals" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 mb-16">
            {packages?.map((pkg, idx) => (
              <Card key={idx} className={`p-8 h-full flex flex-col ${pkg.isPopular ? 'border-2 border-cyan-500 relative shadow-lg' : 'border border-gray-200'}`}>
                {pkg.isPopular && <span className="absolute top-0 right-0 bg-cyan-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-lg rounded-tr-lg">MOST POPULAR</span>}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <div className="text-4xl font-extrabold text-cyan-600 mb-6">₹{pkg.price} <span className="text-base font-normal text-gray-500">/ person</span></div>
                <div className="flex-grow">
                  <ul className="space-y-3 mb-8">
                    {pkg.inclusions?.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-700">
                        <span className="text-cyan-500 mr-2 font-bold">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8 mb-16 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-yellow-800 mb-4 text-center">Unlimited Lunch Menu (₹500 Package)</h3>
            <div className="flex flex-wrap justify-center gap-4 text-center">
              {['Sabji', 'Roti', 'Rice', 'Salad', 'Paneer', 'Dal Tadka'].map((item, i) => (
                <span key={i} className="px-4 py-2 bg-white rounded-full text-yellow-900 font-semibold shadow-sm">{item}</span>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Enquire / Book Tickets</h3>
              <TicketEnquiryForm />
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Important Policies</h3>
              <ul className="space-y-4 text-gray-600">
                <li><strong>Costumes:</strong> Nylon/Lycra swimwear is compulsory. Available on rent at the park.</li>
                <li><strong>Lockers:</strong> Secure lockers available for ₹100.</li>
                <li><strong>Outside Food:</strong> Not allowed inside the park premises.</li>
                <li><strong>Kids:</strong> Kids under 5 years enter for ₹200.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
