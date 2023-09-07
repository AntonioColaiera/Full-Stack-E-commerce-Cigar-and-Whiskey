import React from 'react';
import ProductsCarousel from './ProductsCarousel';
import Footer from  './Footer'
import '../App.css';

function Home() {
  return (
    <div>
      
      <div className="carousels-container">
        <ProductsCarousel />
      </div>
      
      <Footer className="fixed bottom-0 w-full bg-transparent text-white text-center py-4 italic" />
    </div>
  );
}

export default Home;
