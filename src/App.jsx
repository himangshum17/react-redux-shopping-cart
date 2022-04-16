import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components';
import Cart from './pages/cart';
import Home from './pages/home';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='cart' element={<Cart />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
