import { NavLink } from 'react-router';

export default function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center space-x-2 text-sm text-gray-500">
        <li>
          <NavLink to="/" className="hover:text-[var(--color-primary)] transition-colors">
            Home
          </NavLink>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
            {index === items.length - 1 ? (
              <span className="text-gray-800 font-medium" aria-current="page">
                {item.label}
              </span>
            ) : (
              <NavLink to={item.href} className="hover:text-[var(--color-primary)] transition-colors">
                {item.label}
              </NavLink>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
