import SEOHead from '../components/ui/SEOHead';
import SectionHeading from '../components/ui/SectionHeading';
import SchoolTripForm from '../components/forms/SchoolTripForm';
import { seoConfig } from '../config/seoConfig';

export default function SchoolPicnic() {
  return (
    <>
      <SEOHead 
        title={seoConfig['/school-picnic']?.title || 'School Picnic - SBS Water Park'} 
        description={seoConfig['/school-picnic']?.description}
      />
      
      <div className="bg-gradient-to-r from-sky-900 via-cyan-900 to-teal-900 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-2">School Picnic & Student Tours</h1>
          <p className="text-sky-200 max-w-xl mx-auto text-base md:text-lg">Safe, supervised, and fun-filled water day outings with custom school packages</p>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading title="Safe & Fun School Outings" align="left" />
              <p className="text-lg text-gray-700 mb-6">
                SBS Water Park is the ideal destination for school picnics. We provide a safe, fully supervised environment where students can let loose, bond with classmates, and create lasting memories.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Us?</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-cyan-500 text-xl mr-3">🛡️</span>
                  <div>
                    <strong className="block text-gray-900">Highest Safety Standards</strong>
                    <span className="text-gray-600">Certified lifeguards and strict teacher-student ratio guidelines.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 text-xl mr-3">🍱</span>
                  <div>
                    <strong className="block text-gray-900">Student Lunch Packages</strong>
                    <span className="text-gray-600">Hygienic, kid-friendly vegetarian buffet meals included.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 text-xl mr-3">🚿</span>
                  <div>
                    <strong className="block text-gray-900">Dedicated Facilities</strong>
                    <span className="text-gray-600">Spacious changing rooms and secure lockers for large groups.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 text-xl mr-3">💰</span>
                  <div>
                    <strong className="block text-gray-900">Special Group Discounts</strong>
                    <span className="text-gray-600">Highly affordable tiered pricing for schools.</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a School Quote</h3>
              <SchoolTripForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
