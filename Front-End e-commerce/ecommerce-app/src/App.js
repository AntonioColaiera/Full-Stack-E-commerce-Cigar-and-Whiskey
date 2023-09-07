import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import ProductsAPI from './components/Products';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Contacts from './components/Contacts';


function App() {
  return (
    <Router>
      <div className="App">
  
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsAPI/>} />
          <Route path="/contacts" element={<Contacts/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
