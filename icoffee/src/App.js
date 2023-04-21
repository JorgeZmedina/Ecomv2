import './App.css';
// import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import './App.css';
export const AppContext = React.createContext();

function App() {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
    //checks to see if product is in cart. 
      //if in cart, add another quantity plus 1 : check :
      //if not in cart, add one : check :
      //take product past, add quantity field to object, and add new object with new field into cart

      console.log(product)
      if (cartItems.find( item => item.id === product.id)){
        console.log('adding same item to cart')
        const sameProduct = {...product, quantity: (product.quantity + 1)}
        setCartItems([...cartItems, sameProduct])
      } else {
        const newProduct = {...product, quantity:1}
        setCartItems([...cartItems, newProduct])
      }
      console.log(cartItems);
      
  }
  useEffect(() => {
    console.log(cartItems)
  },[cartItems]);

  return (
    // <BrowserRouter>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products addToCart={addToCart} />} />
          <Route path="/Cart" element={<Cart />} />
        </Route>
      </Routes>
      </Router>
    // </BrowserRouter>
  );
}

export default App;
