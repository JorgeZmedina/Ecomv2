import './App.css';
// import React, { useState } from 'react';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import './App.css';
export const AppContext = React.createContext();

function App() {
  return (
    // <BrowserRouter>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/Cart" element={<Cart />} />
        </Route>
      </Routes>
      </Router>
    // </BrowserRouter>
  );
}
export default App;
