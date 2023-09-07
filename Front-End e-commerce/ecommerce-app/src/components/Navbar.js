import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import { CartContext } from "../context/cart";


const Navbar = () => {
  const [showCart, setShowCart] = useState(false);
  const { cartItems } = useContext(CartContext);
  

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <nav className="left-0 right-0 z-10 bg-transparent h-14">
      <div className="container mx-auto flex justify-between items-center p-4">
        <ul className="flex flex-col md:flex-row md:space-x-8 p-4 rounded-xl border-2 border-white">
          <li>
            <Link to="/" className="text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="text-yellow-700">
              Cigar & Whiskey
            </Link>
          </li>
          <li>
          <Link to="/contacts" className="text-white">
              Contacts
            </Link>
          </li>
        </ul>

        
   
      <div className="container mx-auto flex justify-center max-w-sm">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-24 h-24 rounded-full border-4 border-blue-500"
        />
      </div>
   
        <div className="relative ml-auto rounded-xl p-4 border-2 border-white">
        <button
            className='px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700'
            onClick={toggleCart}
          > 
          <img src="/img/cart.png" alt="icon cart" className="w-6 h-6 mr-2 inline-block align-middle" />
            ({cartItems.length})
          </button>
  {showCart && (
    <div className="absolute right-0 top-8 mt-2 w-64 bg-white border border-gray-300 rounded shadow-lg">
      <Cart showModal={showCart} toggle={toggleCart} />
    </div>
  )}
</div>

      </div>
    </nav>
  );
};

export default Navbar;
