import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CustomerNavbar from './Components/Navbar/CustomerNavbar';
import BusinessNavbar from './Components/Navbar/BusinessNavbar';
import Cart from './Pages/Cart'
import CustomerProfile from './Pages/CustomerProfile'
import BusinessProfile from './Pages/BusinessProfile'
import Search from './Pages/Search'
import BobaHouse from './Pages/BobaHouse'
import Homepage from './Pages/Homepage'

function App() {
  return (
    <div>
      <BrowserRouter>
      <CustomerNavbar />
      <BusinessNavbar />
      <Routes>
        <Route path='/c/cart' element={<Cart/>} />
        <Route path="/c/profile" element={<CustomerProfile/>} />
        <Route path='/c/bobahouse' element={<BobaHouse/>} />
        <Route path='/c' element={<Search/>} />
        <Route path='/b' element={<BusinessProfile/>} />
        <Route path='/' element={<Homepage/>} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
