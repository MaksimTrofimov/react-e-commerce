import { capitalize } from '../utils/capitalize';

export function CategoryFilter({ categories, selectedCategory, onChange }) {
  return (
    <div className="mb-4">
      <select
        className="border rounded-lg px-4 py-2"
        value={selectedCategory}
        onChange={(e) => onChange(e.target.value)}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {capitalize(category)}
          </option>
        ))}
      </select>
    </div>
  );
}
