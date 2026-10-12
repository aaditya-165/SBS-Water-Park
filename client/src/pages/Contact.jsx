import SEOHead from '../components/ui/SEOHead';
import SectionHeading from '../components/ui/SectionHeading';
import ContactForm from '../components/forms/ContactForm';
import { seoConfig } from '../config/seoConfig';
import { siteConfig } from '../config/siteConfig';

export default function Contact() {
  return (
    <>
      <SEOHead 
        title={seoConfig['/contact']?.title || 'Contact Us - SBS Water Park'} 
        description={seoConfig['/contact']?.description}
      />
      
      <div className="bg-gradient-to-r from-sky-900 via-cyan-900 to-teal-900 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-2">Contact SBS Water Park</h1>
          <p className="text-sky-200 max-w-xl mx-auto text-base md:text-lg">We are here to help you plan your ideal day of fun and excitement</p>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading title="Get in Touch" align="left" />
              <p className="text-lg text-gray-700 mb-8">
                We'd love to hear from you! Whether you have a question about pricing, packages, or just want to say hi, feel free to drop us a message.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-cyan-100 p-3 rounded-full text-cyan-600 mr-4">📍</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Our Address</h4>
                    <p className="text-gray-600">{siteConfig.address}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-cyan-100 p-3 rounded-full text-cyan-600 mr-4">📞</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Phone</h4>
                    <p className="text-gray-600"><a href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-cyan-600">{siteConfig.phone}</a></p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-cyan-100 p-3 rounded-full text-cyan-600 mr-4">✉️</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Email</h4>
                    <p className="text-gray-600"><a href={`mailto:${siteConfig.email}`} className="hover:text-cyan-600">{siteConfig.email}</a></p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-cyan-100 p-3 rounded-full text-cyan-600 mr-4">🕒</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Park Hours</h4>
                    <p className="text-gray-600">{siteConfig.timings}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="h-96 w-full bg-gray-200">
        {/* Placeholder for Map */}
        <div className="w-full h-full flex flex-col items-center justify-center text-gray-500">
          <span className="text-4xl mb-2">🗺️</span>
          <p>Interactive Map View</p>
          <p className="text-sm">({siteConfig.address})</p>
          <a href={siteConfig.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-4 text-cyan-600 font-bold hover:underline">Open in Google Maps</a>
        </div>
      </section>
    </>
  );
}
