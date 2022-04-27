import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, STATUSES } from '../../store/slices/productSlice';
import Product from './product';

const Productslists = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector(state => state.product);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  if (status === STATUSES.LOADING) {
    return (
      <div className='mt-8 flex items-center justify-center'>
        <h2 className='text-lg font-medium text-indigo-700'>
          Loading Products...
        </h2>
      </div>
    );
  }
  if (status === STATUSES.ERROR) {
    return (
      <div className='mt-8 flex items-center justify-center'>
        <h2 className='text-lg font-medium text-red-700'>
          Something went wrong.
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
