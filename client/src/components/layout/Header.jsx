import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router';
import MobileMenu from './MobileMenu';
import { siteConfig } from '../../config/siteConfig';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Attractions', path: '/attractions' },
  { name: 'Tickets', path: '/tickets' },
  { name: 'Offers', path: '/offers' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'School Trips', path: '/school-picnic' },
  { name: 'Haldi', path: '/haldi-parties' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full z-40 transition-all duration-200 h-16 sm:h-[72px] ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80'
            : 'bg-white/95 backdrop-blur-md border-b border-sky-100 shadow-xs'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full gap-3 md:gap-5">

            {/* Logo - Large, Prominent & Sharp */}
            <div className="flex-shrink-0 flex items-center">
              <NavLink to="/" className="flex items-center gap-2.5 group">
                {siteConfig.logoUrl && !logoError ? (
                  <img
                    src={siteConfig.logoUrl}
                    alt={siteConfig.name}
                    onError={() => setLogoError(true)}
                    className="h-12 sm:h-14 md:h-[62px] w-auto max-w-[280px] object-contain group-hover:scale-105 transition-transform drop-shadow-xs"
                  />
                ) : (
                  <div className="flex items-center gap-2">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-sky-600 via-cyan-500 to-teal-400 flex items-center justify-center text-2xl shadow-md group-hover:scale-105 transition-transform">
                      🌊
                    </div>
                    <div className="flex flex-col leading-tight">
                      <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors">
                        SBS <span className="text-sky-600">Water Park</span>
                      </span>
                      <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400">
                        Pulgaon • Wardha
                      </span>
                    </div>
                  </div>
                )}
              </NavLink>
            </div>

            {/* Desktop Navigation - Clear, Large & Centered */}
            <nav className="hidden lg:flex items-center justify-center gap-1 xl:gap-2.5 flex-1 px-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `whitespace-nowrap px-3.5 py-1.5 rounded-full text-[15px] xl:text-[16px] font-bold transition-all duration-150 ${
                      isActive
                        ? 'bg-sky-500 text-white shadow-xs'
                        : 'text-slate-700 hover:text-sky-600 hover:bg-sky-50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Action Button - Shifted Left away from the edge */}
            <div className="hidden lg:flex items-center flex-shrink-0 mr-4 sm:mr-8 xl:mr-12">
              <NavLink
                to="/contact"
                className="px-6 py-2 rounded-full text-sm xl:text-base font-bold text-white bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 shadow-md hover:shadow-lg hover:scale-105 transition-all whitespace-nowrap"
              >
                BOOK NOW
              </NavLink>
            </div>

            {/* Mobile Actions */}
            <div className="lg:hidden flex items-center gap-2.5">
              <NavLink
                to="/contact"
                className="px-4 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-sky-500 to-cyan-500 shadow-sm"
              >
                BOOK NOW
              </NavLink>
              <button
                type="button"
                className="p-1.5 rounded-lg text-slate-700 hover:text-sky-600 hover:bg-sky-50 focus:outline-none transition-colors"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
        currentPath={location.pathname}
      />
    </>
  );
}
