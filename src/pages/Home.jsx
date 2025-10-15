import { ProductCard } from '../components/ProductCard';
import { ProductService } from '../services/ProductService';
import { useEffect, useState } from 'react';
import { ProductDetail } from '../components/ProductDetail';
import { filterByCategory } from '../utils/filter';
import { CategoryFilter } from '../components/CategoryFilter';
import { useCart } from '../context/CartContext';

export function Home() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { buy, addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await ProductService();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const categories = ['all', ...new Set(products.map((p) => p.category))];
  let filteredProducts = filterByCategory(products, selectedCategory);

  filteredProducts = filteredProducts.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onChange={setSelectedCategory}
      />

      <div className="justify-items-center products grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-4">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.thumbnail}
            onDetails={() => setSelectedProduct(product)}
            onBuy={() => addToCart(product)}
          />
        ))}
      </div>

      <ProductDetail
        isOpen={selectedProduct !== null}
        onClose={() => setSelectedProduct(null)}
        product={selectedProduct}
      />
    </>
  );
}
