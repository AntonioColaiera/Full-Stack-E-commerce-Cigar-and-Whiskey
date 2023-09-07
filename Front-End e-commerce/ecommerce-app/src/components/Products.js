import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { CartContext } from '../context/cart.js';
import Cart from './Cart.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Products() {
  const [showModal, setshowModal] = useState(false);
  const [products, setProducts] = useState([]);
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  const toggle = () => {
    setshowModal(!showModal);
  };

  const notifyAddedToCart = (product) =>
    toast.success(`${product.name} added to cart!`, {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'colored',
      style: {
        backgroundColor: '#fff',
        color: '#000',
      },
    });

  const notifyRemovedFromCart = (product) =>
    toast.error(`${product.name} removed from cart!`, {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'colored',
      style: {
        backgroundColor: '#000',
        color: '#fff',
      },
    });

  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
    notifyRemovedFromCart(product);
  };

  useEffect(() => {
    // Esegui la chiamata API per recuperare i dati dei prodotti
    axios
      .get('http://localhost:8080/api/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error in the API call:', error);
      });
  }, []);

  return (
    <div className='flex flex-col justify-center'>
      <ToastContainer />
      <div className='mt-20 ml-20 flex flex-col items-center'>
        <h1 className="text-red-800 text-center italic mb-20 text-4xl"> <u>Only the best selections for you....</u></h1>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className='bg-white shadow-md  rounded-lg px-10 py-10 border-4 border-blue-500'>
            <div className='mt-4 flex justify-center items-center'>
              {!cartItems.find((item) => item.id === product.id) ? (
                <button
                  className='px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700
                   focus:outline-none focus:bg-gray-700 mb-10'
                  onClick={() => {
                    addToCart(product);
                    notifyAddedToCart(product);
                  }}
                >
                  Add to cart
                </button>
              ) : (
                <div className='flex gap-4 items-center'>
                  <button
                    className='px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700'
                    onClick={() => {
                      addToCart(product);
                    }}
                  >
                    +
                  </button>
                  <p className='text-gray-600'>{cartItems.find((item) => item.id === product.id).quantity}</p>
                  <button
                    className='px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700'
                    onClick={() => {
                      const cartItem = cartItems.find((item) => item.id === product.id);
                      if (cartItem.quantity === 1) {
                        handleRemoveFromCart(product);
                      } else {
                        removeFromCart(product);
                      }
                    }}
                  >
                    -
                  </button>
                </div>
              )}
            </div>
            <div className='text-center h-24'> 
    <h2 className="text-red-600 text-xl font-medium mb-2">{product.name}</h2>
  </div>
            <img
              src={product.img}
              alt={product.name}
              className="object-cover md:object-scale-down w-full h-52 rounded mb-4"
            />
            <p className="text-blue-500"><u>Price in €:</u> <span className="text-blue-900"> {product.price}</span></p>
            <p className="text-blue-500"><u>Quantity:</u> <span className="text-blue-900">{product.quantity}</span> </p>
            <p className="text-blue-500"><u>Description:</u> <span className="text-blue-900">{product.description}</span></p>
            <p className="text-blue-500">
              <u> Quality:</u> <span className="text-blue-900">{product.tags.map(tag => tag.name).join(', ')}</span>
            </p>
          </div>
        ))}
      </div>
      <Cart showModal={showModal} toggle={toggle}/>
    </div>
  );
}
