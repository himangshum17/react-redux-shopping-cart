import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const cartItems = useSelector(state => state.appState.cart);
  return (
    <header className='border-b border-gray-200 py-4'>
      <div className='container flex items-center justify-between'>
        <span className='text-xl font-semibold text-indigo-700'>
          Ecommerce Shop
        </span>
        <nav>
          <ul className='flex items-center space-x-8'>
            <li className='group'>
              <Link className='group-hover:text-indigo-700' to='/'>
                Home
              </Link>
            </li>
            <li className='group relative'>
              <Link className='group-hover:text-indigo-700' to='/cart'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
                  />
                </svg>
                {cartItems.length === 0 ? null : (
                  <span className='absolute -top-2 -right-3 grid h-5 w-5 place-content-center rounded-full bg-indigo-800 text-sm text-indigo-100 ring-1 ring-white'>
                    {cartItems.length}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
