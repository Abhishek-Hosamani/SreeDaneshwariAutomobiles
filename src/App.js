import logo from './logo.svg';
import './App.css';
import { Home } from './Pages/Home/Home';
import ItemCard from './Components/ItemCard';
import { Categories } from './Pages/Categories/Categories';
import Adminadd from './Pages/Admin/Adminadd';
import Adminedit from './Pages/Admin/Adminedit';
import Admin from './Pages/Admin/Adminnav';
import { Routes, Route } from 'react-router-dom'
import { Cart } from './Pages/Cart/Cart'



function App() {
  return (
    <>
      <Cart />
    </>
  );
}

export default App;
