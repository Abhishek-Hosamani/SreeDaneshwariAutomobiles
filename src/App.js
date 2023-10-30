import './App.css';
import Home from './Pages/Home/Home';
import Adminadd from './Pages/Admin/Adminadd';
import Adminedit from './Pages/Admin/Adminedit';
import Admin from './Pages/Admin/Adminnav';
import { Routes, Route } from 'react-router-dom'
import Cart from './Pages/Cart/Cart'
import Login from './Pages/Login/Login'
import Product from './Pages/Products/Product'
import Categories from './Pages/Categories/Categories'
function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='cart' element={<Cart />} />
        <Route path='login' element={<Login />} />
        <Route path='admin' element={<Admin />} >
          <Route index element={<Adminadd />} />
          <Route path='addproduct' element={<Adminadd />} />
          <Route path='edit' element={<Adminedit />} />
        </Route>
        <Route path='category' element={<Categories />}>
          <Route path=':catName' element={<Categories />} />
        </Route>

        <Route path='category/product' element={<Product />} />
      </Routes>


    </>
  );
}

export default App;
