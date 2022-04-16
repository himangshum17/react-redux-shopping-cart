import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { add } from '../../store/slices/cartSlices';

const Product = ({
  title,
  price,
  category,
  image,
  id,
  rating: { rate, count },
}) => {
  const productCartDetails = {
    id,
    title,
    price,
    image,
  };
  const dispatch = useDispatch();
  const handleClick = product => {
    dispatch(add(product));
    toast.success(`Successfully added ${product.title} to your cart!`);
  };
  return (
    <div className='p-4 ring-1 ring-gray-200'>
      <img src={image} alt={title} className='mx-auto h-40 object-contain' />
      <span className='mt-4 inline-block text-xs uppercase tracking-wide text-gray-500'>
        {category}
      </span>
      <h3 className='h-14 text-lg line-clamp-2'>{title}</h3>
      <div className='mt-4 flex items-center justify-between'>
        <h4 className='text-xl font-bold text-indigo-700'>{price}</h4>
        <div className=' inline-flex items-center rounded bg-orange-100 px-2 py-1 text-orange-600'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-4 w-4'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
            />
          </svg>
          <span className='ml-1 text-sm'>
            {rate} ({count})
          </span>
        </div>
      </div>
      <button
        className='mt-4 w-full rounded-lg bg-indigo-700 px-6 py-4 text-center text-indigo-100 transition-all hover:bg-indigo-600'
        type='button'
        onClick={() => handleClick(productCartDetails)}
      >
        Add to Cart
      </button>
    </div>
  );
};
export default Product;
