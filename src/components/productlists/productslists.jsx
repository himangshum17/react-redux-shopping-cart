import { useEffect, useState } from 'react';
import Product from './product';

const Productslists = () => {
  const [products, setProducts] = useState(null);
  const fetchProductsData = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const responseData = await response.json();
    setProducts(responseData);
  };
  useEffect(() => {
    fetchProductsData();
  }, []);
  if (!products) {
    return (
      <div className='mt-8 flex items-center justify-center'>
        <h2 className='text-lg font-medium text-indigo-700'>
          Loading Products...
        </h2>
      </div>
    );
  }
  return (
    <div className='mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
      {products.map(product => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};
export default Productslists;
