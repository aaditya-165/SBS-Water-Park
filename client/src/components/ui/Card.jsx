export default function Card({ children, className = '', hover = true }) {
  const baseClasses = 'bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden';
  const hoverClasses = hover ? 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1' : '';
  
  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
}
