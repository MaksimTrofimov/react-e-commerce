export function ProductDetail({ isOpen, onClose, product }) {
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}
    >
      <div className="bg-white p-6 rounded-2xl max-w-md relative overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 font-bold cursor-pointer"
        >
          ✕
        </button>

        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full rounded-xl mb-4"
        />

        <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
        <p className="text-lg text-green-600 mb-2">${product.price}</p>
        <p className="text-gray-700 mb-2">{product.description}</p>

        <ul className="text-gray-600 text-sm space-y-1">
          <li>
            <strong>Category:</strong> {product.category}
          </li>
          <li>
            <strong>Brand:</strong> {product.brand}
          </li>
          <li>
            <strong>Stock:</strong> {product.stock}
          </li>
          <li>
            <strong>Rating:</strong> {product.rating}
          </li>
          <li>
            <strong>Discount:</strong> {product.discountPercentage}%
          </li>
          <li>
            <strong>Weight:</strong> {product.weight} g
          </li>
          <li>
            <strong>SKU:</strong> {product.sku}
          </li>
        </ul>
      </div>
    </div>
  );
}
