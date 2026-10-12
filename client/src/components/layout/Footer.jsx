import { NavLink } from 'react-router';
import { siteConfig } from '../../config/siteConfig';
import { getWhatsAppUrl, whatsappMessages } from '../../utils/whatsapp';

export default function Footer() {
  const yr = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="h-[3px] bg-gradient-to-r from-sky-500 via-teal-400 to-amber-400" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          <div className="space-y-2">
            <NavLink to="/" className="inline-block">
              {siteConfig.logoUrl ? (
                <img src={siteConfig.logoUrl} alt={siteConfig.name} className="h-10 w-auto object-contain" />
              ) : (
                <span className="text-lg font-black text-white">SBS <span className="text-sky-400">Water Park</span></span>
              )}
            </NavLink>
            <p className="text-sm text-slate-400 leading-snug">{siteConfig.tagline} — Pulgaon&#39;s favourite family water resort.</p>
            <div className="flex items-center gap-2 pt-1">
              <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-7 h-7 rounded-md bg-slate-800/80 flex items-center justify-center text-pink-400 hover:bg-pink-500 hover:text-white transition-all">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
              </a>
              <a href={getWhatsAppUrl(whatsappMessages.general)} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-7 h-7 rounded-md bg-slate-800/80 flex items-center justify-center text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.062-1.116-.076-.252-.083-.578-.198-1.002-.38-1.782-.767-2.935-2.587-3.023-2.705-.089-.118-.725-.963-.725-1.836 0-.873.456-1.303.619-1.482.163-.178.356-.223.475-.223.119 0 .237.001.341.006.109.006.255-.041.399.304.149.356.505 1.233.549 1.323.044.089.074.193.015.312-.059.119-.089.193-.178.297-.089.104-.187.232-.267.311-.089.089-.182.186-.078.365.104.178.464.766.996 1.24.685.611 1.263.8 1.442.889.178.089.282.074.386-.045.104-.118.445-.519.564-.697.119-.178.237-.149.396-.089.159.059 1.007.475 1.18.564.173.089.289.133.332.208.043.074.043.43-.101.835z" /></svg>
              </a>
              <span className="text-xs text-slate-500">Pulgaon, Wardha</span>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-white mb-2">Quick Links</h4>
            <ul className="space-y-1 text-sm text-slate-400">
              <li><NavLink to="/" className="hover:text-sky-400 transition-colors">Home</NavLink></li>
              <li><NavLink to="/about" className="hover:text-sky-400 transition-colors">About Us</NavLink></li>
              <li><NavLink to="/attractions" className="hover:text-sky-400 transition-colors">Attractions</NavLink></li>
              <li><NavLink to="/tickets" className="hover:text-sky-400 transition-colors">Tickets</NavLink></li>
              <li><NavLink to="/gallery" className="hover:text-sky-400 transition-colors">Gallery</NavLink></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-white mb-2">Bookings</h4>
            <ul className="space-y-1 text-sm text-slate-400">
              <li><NavLink to="/school-picnic" className="hover:text-sky-400 transition-colors">School Picnics</NavLink></li>
              <li><NavLink to="/haldi-parties" className="hover:text-sky-400 transition-colors">Haldi Ceremony</NavLink></li>
              <li><NavLink to="/offers" className="hover:text-sky-400 transition-colors">Offers</NavLink></li>
              <li><NavLink to="/faq" className="hover:text-sky-400 transition-colors">FAQ</NavLink></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-bold uppercase tracking-wide text-white mb-2">Contact</h4>
            <ul className="space-y-1.5 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors font-medium">{siteConfig.phone}</a>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">{siteConfig.email}</a>
              </li>
              <li className="flex items-center gap-2">
                <span>🕒</span>
                <span>{siteConfig.timings}</span>
              </li>
            </ul>
            <div className="flex items-center gap-2 pt-1">
              <NavLink to="/contact" className="px-4 py-1.5 rounded-lg text-xs font-bold bg-sky-500 hover:bg-sky-400 text-white transition-all">BOOK NOW</NavLink>
              <a href={getWhatsAppUrl(whatsappMessages.general)} target="_blank" rel="noopener noreferrer" className="px-4 py-1.5 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-all">WHATSAPP</a>
            </div>
          </div>
        </div>
        <div className="mt-4 pt-3 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-1 text-xs text-slate-500">
          <p>&#169; {yr} {siteConfig.name}. All Rights Reserved.</p>
          <p>Water Rides &#8226; Rain Dance &#8226; Family Resort</p>
        </div>
      </div>
    </footer>
  );
}

