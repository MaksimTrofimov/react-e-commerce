import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [buy, setBuy] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(buy));
  }, [buy]);

  const addToCart = (product) => {
    setBuy((prevBuy) => {
      const existing = prevBuy.find((item) => item.id === product.id);
      if (existing) {
        return prevBuy.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevBuy, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) =>
    setBuy((prevBuy) => prevBuy.filter((item) => item.id !== id));

  const clearCart = () => setBuy([]);

  const increaseQuantity = (id) => {
    setBuy((prevBuy) =>
      prevBuy.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setBuy((prevBuy) =>
      prevBuy.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        buy,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
