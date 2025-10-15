import logo from '../assets/logo.png';
import cart from '../assets/cart.png';
import { useCart } from '../context/CartContext.jsx';

export function Header() {
  const { buy } = useCart();

  const totalItems = buy.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-blue-950 text-white">
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center py-3">
        <a href="/">
          <img src={logo} alt="Logo" className="w-24 sm:w-28" />
        </a>

        <nav className="flex text-sm sm:text-xl space-x-7 justify-center">
          <a href="/" className="cursor-pointer">
            Home
          </a>
          <a href="/about" className="cursor-pointer">
            About
          </a>
          <a href="/contact" className="cursor-pointer">
            Contact
          </a>
        </nav>

        <div className="relative">
          <a href="/cart">
            <img src={cart} alt="Cart" className="w-8 sm:w-9" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </a>
        </div>
      </div>
    </header>
  );
}
