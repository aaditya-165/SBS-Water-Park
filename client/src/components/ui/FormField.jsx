export default function FormField({ 
  label, 
  name, 
  type = 'text', 
  value, 
  onChange, 
  error, 
  required = false, 
  placeholder, 
  as = 'input',
  options = [],
  rows = 4
}) {
  const baseClasses = `w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 transition-colors ${
    error 
      ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
      : 'border-gray-200 focus:border-[var(--color-primary)] focus:ring-blue-100'
  }`;

  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      
      {as === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          rows={rows}
          className={baseClasses}
        />
      ) : as === 'select' ? (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={baseClasses}
        >
          <option value="" disabled>Select an option</option>
          {options.map((opt, i) => (
            <option key={i} value={opt.value || opt}>{opt.label || opt}</option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={baseClasses}
        />
      )}
      
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}
