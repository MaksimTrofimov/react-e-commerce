import { useCart } from '../context/CartContext';
import { Button } from '../components/Button';

export function Cart() {
  const { buy, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } =
    useCart();

  const totalPrice = buy.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (!buy || buy.length === 0) {
    return <p className="text-center mt-10 text-gray-600">Cart empty</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>

      <div className="space-y-4">
        {buy.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-sm p-3 flex flex-col sm:flex-row items-start sm:items-center gap-3"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-40 object-cover rounded sm:w-28 sm:h-24 flex-shrink-0"
            />

            <div className="flex-1 w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex-1">
                <h3 className="font-semibold text-base">{item.title}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  ${item.price.toFixed(2)}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => decreaseQuantity(item.id, -1)}
                  className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300 text-sm text-gray-700 hover:bg-gray-100"
                  aria-label={`Decrease ${item.title}`}
                >
                  −
                </button>

                <div className="min-w-[36px] text-center text-sm">
                  {item.quantity}
                </div>

                <button
                  onClick={() => increaseQuantity(item.id, 1)}
                  className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300 text-sm text-gray-700 hover:bg-gray-100"
                  aria-label={`Increase ${item.title}`}
                >
                  +
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="px-3 py-1 rounded-md bg-red-600 text-white text-sm hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-white p-4 rounded-lg shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="text-lg font-bold">
          Total:{' '}
          <span className="text-green-600">${totalPrice.toFixed(2)}</span>
        </div>

        <div className="flex gap-3">
          <button
            onClick={clearCart}
            className="px-4 py-2 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
