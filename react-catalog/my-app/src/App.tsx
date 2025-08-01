import './App.css';
import { Routes, Route } from 'react-router';
import { products } from './lib/data';

import { Header } from './1_Components/Header';
import { Catalog } from './2_Pages/Catalog';
import { ProductDetailPage } from './2_Pages/ProductDetailPage';
import { About } from './2_Pages/About';
import { NotFound } from './2_Pages/NotFound';

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Catalog inventory={products} />} />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
