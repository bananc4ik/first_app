import HomePage from './pages/HomePage';
import ItemDetails from './pages/ItemDetails';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ProductFilter from './pages/ProductFilter';
import Auth from '../src/pages/Auth';
import Basket from '../src/pages/Basket';

function App() {
  // const isAuth = !!localStorage.getItem("user_token");
  return (
    <div className="App">

      <BrowserRouter>

        <Routes>

          <Route path="/" element={<HomePage/>} />;
          <Route path="/item_detail/:id" element={<ItemDetails />} />;
          <Route path='/product_filter' element={<ProductFilter/>}/>;
          <Route path='/auth' element={<Auth/>}/>;
          <Route path='/basket' element={<Basket/>}/>;
          

        </Routes>

        

      </BrowserRouter>

      
    
    </div>
  );
}

export default App;
