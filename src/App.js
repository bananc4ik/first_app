import HomePage from './pages/HomePage';
import ItemDetails from './pages/ItemDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductFilter from './pages/ProductFilter';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/item_detail/:id" element={<ItemDetails />} />
          <Route path='/product_filter' element={ProductFilter}/>

        </Routes>

      </BrowserRouter>

      
    
    </div>
  );
}

export default App;
