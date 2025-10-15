export function Button({ label, color, onClick }) {
  const colorClasses =
    {
      green: 'bg-green-600 hover:bg-green-700',
      blue: 'bg-blue-600 hover:bg-blue-700',
      red: 'bg-red-600 hover:bg-red-700',
    }[color] || 'bg-gray-600 hover:bg-gray-700';

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg text-white font-semibold cursor-pointer transition-colors duration-300 ${colorClasses}`}
    >
      {label}
    </button>
  );
}
