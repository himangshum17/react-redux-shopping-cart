import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../store/slices/cartSlices';

const Cart = () => {
  const cartDatas = useSelector(state => state.appState.cart);
  const dispatch = useDispatch();
  const handleRemove = cartData => {
    dispatch(remove(cartData.id));
    toast.success(`Successfully removed ${cartData.title} from your cart!`);
  };
  const productPriceSum = cartDatas
    ?.reduce(
      (initialPrice, currentPrice) => initialPrice + currentPrice.price,
      0
    )
    .toFixed(2);
  return (
    <section className='py-12'>
      <div className='container'>
        <h2 className='text-xl font-medium'>Cart</h2>
        {cartDatas.length === 0 ? (
          <h3 className='mt-2 text-sm text-gray-500'>Your Cart is empty</h3>
        ) : (
          <table className='mt-8 w-full table-auto'>
            <thead className='border-b border-gray-200 bg-white text-left'>
              <tr>
                <th className='p-3 text-sm uppercase tracking-wide'>
                  Product Image
                </th>
                <th className='p-3 text-sm uppercase tracking-wide'>
                  Product Name
                </th>
                <th className='p-3 text-sm uppercase tracking-wide'>
                  Product Price
                </th>
                <th className='p-3 text-sm uppercase tracking-wide'>Action</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200'>
              {cartDatas &&
                cartDatas.map(cartData => (
                  <tr key={cartData.id} className='odd:bg-gray-100'>
                    <td className='px-3 py-4'>
                      <img
                        src={cartData.image}
                        className='h-16 w-16 object-contain'
                        alt=''
                      />
                    </td>
                    <td className='px-3 py-4'>{cartData.title}</td>
                    <td className='px-3 py-4'>{cartData.price}</td>
                    <td className='px-3 py-4'>
                      <button
                        onClick={() => handleRemove(cartData)}
                        className='text-gray-500 hover:text-red-500'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-6 w-6'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                          strokeWidth={2}>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              <tr>
                <td colSpan='2' className='px-3 py-4 text-right'>
                  Total Price :
                </td>
                <td className='px-3 py-4'>
                  <h4 className='text-lg font-bold'>{productPriceSum}</h4>
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
};
export default Cart;
