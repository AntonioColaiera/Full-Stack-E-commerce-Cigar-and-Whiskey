import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { CartContext } from "../context/cart";
import { ToastContainer, toast } from 'react-toastify';

const ProductsCarousel = () => {
  const [products, setProducts] = useState([]);
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

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
    axios.get('http://localhost:8080/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error in the API call:', error);
      });
  }, []);

  return (
    <div className="container mx-auto mt-10">
      <ToastContainer />
    <div className='mb-20'></div>
      <Carousel showThumbs={false} showArrows={false} infiniteLoop={true} showStatus={false} autoPlay={true} interval={3000}>
        {products.map(product => (
          <div
            key={product.id}
            className="border border-blue-500 p-4 rounded-lg shadow-md w-1/2 mx-auto"
          >
            <img
              src={product.img}
              alt={product.name}
              className="object-contain h-24 md:h-32 lg:h-48 mx-auto "
            />
            <div className="bg-blue-500 text-white p-2 rounded-lg mt-2 mb-4">
              <div className='mt-1 flex justify-center items-center mb-2'>
                {!cartItems.find((item) => item.id === product.id) ? (
                  <button
                    className='px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700'
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
    notifyRemovedFromCart(product); // Aggiungi notifica di rimozione dal carrello
  }}
                    >
                      -
                    </button>
                  </div>
                )}
              </div>
              <p className="text font-semibold">Price: €{product.price}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductsCarousel;
