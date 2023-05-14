import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import NavBar from './NavBar/NavBar.jsx';
import ItemListContainer from './ItemListContainer/ItemListContainer.jsx';
import { Checkout } from './Checkout/Checkout';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer.jsx';
import Footer from './Footer/Footer';
import Cart from './Cart/Cart';



export const App = () => {

  

  return (
    <div className="App">
      <BrowserRouter>
        
          <NavBar />
          <ToastContainer />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/Item/:id" element={<ItemDetailContainer />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/cart' element={<Cart />} />
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
            
          </Routes>
          <Footer />
        
      </BrowserRouter>
      
    </div>
    
  );
}

export default App;