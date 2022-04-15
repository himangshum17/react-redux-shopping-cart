import { Route, Routes } from 'react-router-dom';
import Cart from './pages/cart';
import Home from './pages/home';

function App() {
  return (
    <div className='container'>
      <h1 className='text-3xl font-bold underline'>
        React Redux Shopping Cart
      </h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
