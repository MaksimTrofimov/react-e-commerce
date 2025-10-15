export function filterByCategory(products, category) {
  if (category === 'all') return products;
  return products.filter((product) => product.category === category);
}
