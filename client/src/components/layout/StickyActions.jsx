import { siteConfig } from '../../config/siteConfig';

export default function StickyActions() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3 lg:hidden">
      <a 
        href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
        className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-transform hover:scale-110 active:scale-95"
        aria-label="Call us"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
        </svg>
      </a>
      
      <a 
        href={`https://wa.me/${siteConfig.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#128C7E] transition-transform hover:scale-110 active:scale-95"
        aria-label="WhatsApp us"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12.031 2C6.48 2 1.969 6.469 1.969 11.979c0 1.958.53 3.864 1.503 5.541L2 22l4.63-1.464a10.024 10.024 0 005.4 1.55h.004c5.548 0 10.059-4.469 10.059-9.978 0-2.656-1.044-5.155-2.94-7.031A9.972 9.972 0 0012.031 2zM12.031 20.217h-.003a8.318 8.318 0 01-4.24-1.16l-.304-.178-3.153.996.845-3.047-.197-.31a8.311 8.311 0 01-1.272-4.444c0-4.6 3.784-8.35 8.423-8.35 2.254 0 4.372.87 5.962 2.445A8.322 8.322 0 0120.45 11.98c0 4.601-3.786 8.337-8.419 8.337zm4.618-6.242c-.253-.125-1.501-.734-1.734-.818-.232-.084-.401-.125-.57.125-.169.25-6.55.818-.802 1.026-.152.208-.304.229-.557.104-.253-.125-1.072-.39-2.043-1.253-.755-.672-1.265-1.503-1.413-1.753-.148-.25-.016-.385.11-.51.114-.112.253-.292.38-.438.127-.146.169-.25.253-.417.084-.167.042-.313-.021-.438-.063-.125-.57-1.354-.781-1.854-.206-.486-.416-.42-.57-.428l-.486-.01c-.169 0-.443.063-.675.313-.232.25-.886.854-.886 2.083 0 1.229.907 2.417 1.034 2.583.127.167 1.785 2.687 4.323 3.76.603.255 1.074.406 1.442.52.607.188 1.159.161 1.595.097.488-.07 1.501-.604 1.713-1.187.211-.583.211-1.083.148-1.187-.063-.104-.232-.167-.485-.292z" clipRule="evenodd"/>
        </svg>
      </a>
    </div>
  );
}
