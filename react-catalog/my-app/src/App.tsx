import './App.css';
import { Routes, Route } from 'react-router';

import { Header } from './1_Components/Header';
import { Catalog } from './2_Pages/Catalog';
import { About } from './2_Pages/About';

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Catalog />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

// Header
// Dashboard
// ItemPage
// About
// NotFound
