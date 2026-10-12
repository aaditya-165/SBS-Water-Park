export default function Loader({ text = 'Loading...' }) {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div className="w-12 h-12 border-4 border-blue-100 border-t-[var(--color-primary)] rounded-full animate-spin"></div>
      {text && <p className="mt-4 text-gray-500 font-medium">{text}</p>}
    </div>
  );
}
