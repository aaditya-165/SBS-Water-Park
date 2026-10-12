import { Link } from 'react-router';

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href, 
  to,
  onClick, 
  type = 'button', 
  disabled = false, 
  className = '' 
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white hover:from-[var(--color-primary-dark)] hover:to-[var(--color-primary)] focus:ring-[var(--color-primary)]',
    secondary: 'bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-light)] focus:ring-[var(--color-accent)]',
    outline: 'bg-transparent border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-blue-50 focus:ring-[var(--color-primary)]',
    whatsapp: 'bg-[#25D366] text-white hover:bg-[#128C7E] focus:ring-[#25D366]',
    call: 'bg-white border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white focus:ring-[var(--color-primary)]'
  };

  const sizes = {
    sm: 'text-sm px-4 py-2',
    md: 'text-base px-6 py-3',
    lg: 'text-lg px-8 py-4'
  };

  const classes = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button 
      type={type} 
      className={classes} 
      onClick={onClick} 
      disabled={disabled}
    >
      {children}
    </button>
  );
}
