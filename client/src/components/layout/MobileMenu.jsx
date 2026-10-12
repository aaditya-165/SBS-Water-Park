import { useEffect } from 'react';
import { NavLink } from 'react-router';
import Button from '../ui/Button';
import { siteConfig } from '../../config/siteConfig';

export default function MobileMenu({ isOpen, onClose, navLinks, currentPath }) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('scroll-lock');
    } else {
      document.body.classList.remove('scroll-lock');
    }
    return () => document.body.classList.remove('scroll-lock');
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Menu Panel */}
      <div className={`fixed inset-y-0 right-0 w-4/5 max-w-sm bg-white shadow-2xl flex flex-col transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between p-4 border-b">
          <span className="text-xl font-bold text-[var(--color-primary)]">Menu</span>
          <button 
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-gray-800 focus:outline-none"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          <nav className="flex flex-col px-4 space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={onClose}
                className={({ isActive }) => 
                  `block py-3 px-4 rounded-lg text-base font-medium transition-colors ${
                    isActive 
                      ? 'bg-blue-50 text-[var(--color-primary)]' 
                      : 'text-gray-700 hover:bg-gray-50 hover:text-[var(--color-primary)]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="p-4 border-t space-y-3 bg-gray-50">
          <Button href="/contact" className="w-full" onClick={onClose}>
            BOOK NOW
          </Button>
          <div className="flex space-x-3">
            <Button href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} variant="call" className="flex-1 justify-center">
              Call Us
            </Button>
            <Button href={`https://wa.me/${siteConfig.whatsapp}`} variant="whatsapp" className="flex-1 justify-center">
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
