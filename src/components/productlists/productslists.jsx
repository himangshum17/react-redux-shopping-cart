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
  return (
    <div className='mt-8 grid grid-cols-4 gap-4'>
      {products &&
        products.map(product => <Product key={product.id} {...product} />)}
    </div>
  );
};
export default Productslists;
