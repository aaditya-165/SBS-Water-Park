import { Link } from 'react-router';
import SEOHead from '../components/ui/SEOHead';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { seoConfig } from '../config/seoConfig';
import { siteConfig } from '../config/siteConfig';

export default function About() {
  return (
    <>
      <SEOHead 
        title={seoConfig['/about']?.title || 'About Us - SBS Water Park'} 
        description={seoConfig['/about']?.description}
      />
      
      <div className="bg-gradient-to-r from-sky-900 via-cyan-900 to-teal-900 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-2">About SBS Water Park</h1>
          <p className="text-sky-200 max-w-xl mx-auto text-base md:text-lg">Pulgaon's premier family water resort & amusement destination</p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg prose-cyan mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Welcome to <strong>SBS Water Park</strong>, the premier family entertainment destination in Pulgaon, Wardha District. 
              Our mission is to provide a safe, thrilling, and unforgettable experience for families, friends, and thrill-seekers of all ages.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Our Story & Vibe</h2>
            <p className="text-gray-700 mb-6">
              Born from a vision to bring world-class water amusement to the heart of Maharashtra, SBS Water Park has grown into a beloved destination. 
              We blend thrilling water rides with a relaxing family resort vibe, ensuring there's something for everyone.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Safety & Hygiene First</h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8">
              <li><strong>Certified Lifeguards:</strong> Stationed at every pool and attraction.</li>
              <li><strong>RO Water Filtration:</strong> Crystal clear, continuously filtered water in all pools.</li>
              <li><strong>Strict Guidelines:</strong> Enforced dress codes and safety rules for peace of mind.</li>
            </ul>

            <div className="bg-cyan-50 p-8 rounded-2xl mt-12 mb-12 border border-cyan-100">
              <h3 className="text-2xl font-bold text-cyan-900 mb-4">Visit Us</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900">Timings</h4>
                  <p className="text-gray-700">{siteConfig.timings}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Location</h4>
                  <p className="text-gray-700">{siteConfig.address}</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button as={Link} to="/tickets" variant="primary" size="lg">Book Your Tickets Now</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
