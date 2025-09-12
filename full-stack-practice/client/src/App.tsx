import { Routes, Route } from 'react-router';
import './App.css';

import { Header } from './1_Components/Header';
import { Catalog } from './2_Pages/Catalog';
import { ProductDetailPage } from './2_Pages/ProductDetailPage';
import { About } from './2_Pages/About';
import { NotFound } from './2_Pages/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/about" element={<About />} />
          <Route index element={<Catalog />} />
          <Route path="/products/:productId" element={<ProductDetailPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
