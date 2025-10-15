import axios from 'axios';

export const ProductService = async () => {
  async function axiosProducts() {
    const response = await axios.get('https://dummyjson.com/products');
    return response.data.products;
  }

  return axiosProducts();
};
