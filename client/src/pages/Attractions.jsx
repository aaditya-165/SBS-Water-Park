import { Link } from 'react-router';
import SEOHead from '../components/ui/SEOHead';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { seoConfig } from '../config/seoConfig';
import { attractions } from '../data/attractions';

export default function Attractions() {
  return (
    <>
      <SEOHead 
        title={seoConfig['/attractions']?.title || 'Attractions - SBS Water Park'} 
        description={seoConfig['/attractions']?.description}
      />
      
      <div className="bg-gradient-to-r from-sky-900 via-cyan-900 to-teal-900 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-2">Water Slides, Rain Dance & Attractions</h1>
          <p className="text-sky-200 max-w-xl mx-auto text-base md:text-lg">Exciting water rides, family splash zones, and DJ rain dances</p>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionHeading title="Explore Our Attractions" subtitle="Fun for the whole family" />
          
          <div className="space-y-16 mt-12">
            {attractions?.map((attr, idx) => (
              <div key={idx} className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center bg-white rounded-2xl shadow-sm overflow-hidden p-6 md:p-8`}>
                <div className="w-full lg:w-1/2 aspect-[4/3] bg-cyan-100 rounded-xl overflow-hidden relative">
                <img
                  src={attr.image}
                  alt={attr.name}
                  className="w-full h-full object-cover"
                />
              </div>
                <div className="w-full lg:w-1/2 space-y-4">
                  <h2 className="text-3xl font-bold text-gray-900">{attr.name}</h2>
                  <p className="text-lg text-gray-600">{attr.description}</p>
                  
                  <div className="pt-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Safety & Guidelines:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      {attr.guidelines?.map((guide, i) => (
                        <li key={i}>{guide}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-6">
                    <Button as={Link} to="/tickets" variant="primary">Book Tickets</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
