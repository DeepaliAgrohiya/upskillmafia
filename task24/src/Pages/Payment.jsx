import React from 'react';
import { Link } from 'react-router-dom';
// import  useContext  from 'react'
import useCart from '../store/CartContext';

function Payment() {
  const {cart , total ,shoes, addToCart, increaseCounter, decreaseCounter} = useCart();
  return (
  <>
  <div className='flex'>
      <div className='flex flex-wrap justify-center w-2/3 p-2 bg-gray-800 gap-10  '>
        <h1 className='text-white font-bold text-2xl h-fit'>Payment</h1>
      </div>

    <div className="p-4 w-1/3 h-screen bg-slate-200">
      <h2 className="text-xl font-bold mb-4">Cart</h2>
        <div>
          <ul className="space-y-4">
            {cart.map(shoe => (
              <div key={shoe.id} className="flex items-center border-b pb-2">
                <img src={shoe.img} alt={shoe.name} className="h-16 w-16 object-cover mr-4" />
                <div className="flex-1">
                  <div className="font-semibold">{shoe.name}</div>
                  <span>${shoe.price}</span>    
                  <div className='flex justify-center items-center gap-2'>
                    <i onClick={() => decreaseCounter(shoe)} className="fa-solid fa-minus bg-red-400"></i>
                    <div>{shoe.quantity}</div>
                    <i onClick={() => increaseCounter(shoe)} className="fa-solid fa-plus bg-green-400"></i>
                  </div>
                </div>
              </div>
            ))}
          </ul>
          <div className="flex justify-between font-semibold text-lg mt-4 mb-4">
            <span>Total:</span>
            <span>${total}</span>
          </div>
          <Link className='bg-gray-800 text-white p-2 rounded-lg  ' to='/'>Go back to Home</Link>
        </div>
    </div>
  </div>    


    </>
  )
}

export default Payment