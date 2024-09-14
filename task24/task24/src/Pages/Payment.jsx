import React from 'react'
import { Link } from 'react-router-dom'
// import  useContext  from 'react'
import useCart from '../store/CartContext'

function Payment() {
  const {addToCart, increaseCounter, decreaseCounter} = useCart();
  return (
  <>
  <div className='flex'>
      <div className='flex flex-wrap justify-center w-2/3 p-2 bg-yellow-100 gap-10  '>
        {shoes.map(shoe => (
          <div key={shoe.id} className='flex flex-col items-center text-center w-1/4 p-2'>
            <div className='h-60 w-48 rounded-lg shadow-xl flex flex-col items-center overflow-hidden'>
              <img className='bg-contain h-1/2 w-full object-cover' src={shoe.img} alt={shoe.name} />
              <div className='bg-yellow-500 w-full h-1/2 border border-white rounded-lg flex flex-col items-center'>
                <div><b>{shoe.name}</b></div>
                <div>${shoe.price}</div>
                <button className='bg-yellow-500 border border-black rounded-lg w-28 p-1' onClick={() => addToCart(shoe)}>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    <div className="p-4 w-1/3 bg-slate-200">
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
          <div className="flex justify-between font-semibold text-lg mt-4">
            <span>Total:</span>
            <span>${total}</span>
          </div>
        </div>
    </div>
  </div>    

    <Link to='/'>Go back to shopping</Link>
    </>
  )
}

export default Payment