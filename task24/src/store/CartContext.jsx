// import React from 'react';
// import { createContext, useContext, useState } from 'react'

// export const CartContext = createContext();

// export const CartProvider = ({children}) => {
    
//     const shoes = [
//         { id: "001", name: "Nike Air Max", quantity:1, price: 50, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFkjBVzlnF8IY1V6aRPtaU5sHA30u-nyKf1yHaBDfgMaq3UG4Fni0_-wJt7Q&s" },
//         { id: "002", name: "Campus Men's Sneakers", quantity:1, price: 60, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS50c6UEPRYGpnoVvvWz7KiVG3NFnz8Amf9FQ&s" },
//         { id: "003", name: "Campus Men's OG-03 Sneakers", quantity:1, price: 100, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa3CNerfXUbeOvq0uhPORgQbZTE4lWHoCsmw&s" },
//         { id: "004", name: "Nike Women Shoe", quantity:1, price: 90, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSut7qUNntMV1RPFq3kXlABeizBGUwUQqMMkQ&s" },
//         { id: "005", name: "Redtape", price: 70, quantity:1, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5WnBP-1aYoPJ2EViBUUOCMJ3ZFEXrgOAaFg&s" },
//         { id: "006", name: "Campus Men's OG-03 Sneakers", quantity:1, price: 100, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa3CNerfXUbeOvq0uhPORgQbZTE4lWHoCsmw&s" },
//         { id: "007", name: "Nike Air Max", price: 50, quantity:1, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFkjBVzlnF8IY1V6aRPtaU5sHA30u-nyKf1yHaBDfgMaq3UG4Fni0_-wJt7Q&s" },
//         { id: "008", name: "Campus Men's Sneakers", quantity:1, price: 60, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS50c6UEPRYGpnoVvvWz7KiVG3NFnz8Amf9FQ&s" },
//         { id: "009", name: "Redtape", price: 70, quantity:1, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5WnBP-1aYoPJ2EViBUUOCMJ3ZFEXrgOAaFg&s" }
//       ];
    
//       const [cart, setCart] = useState([]);
//       const [total, setTotal] = useState(0);
    
//       const addToCart = (shoeItem) => {
//         const isItemInCart = cart.some(shoe => shoe.id === shoeItem.id);
//         if (!isItemInCart) {
//           setCart([...cart, shoeItem]);
//           setTotal((total) => total + shoeItem.price);
//         } else {
//           console.log("Item already in cart");
//         }
//       };
    
//       const increaseCounter = (shoeItem) => {
//         setCart(cart => cart.map(shoe => shoe.id === shoeItem.id ? { ...shoe, quantity: shoe.quantity + 1 } : shoe));
//           setTotal( (total) => total + shoeItem.price);
    
//       };
      
//       const decreaseCounter = (shoeItem) => {
//         setCart(cart => cart.map(shoe => shoe.id === shoeItem.id ? { ...shoe, quantity: shoe.quantity - 1 } : shoe).filter(shoe => shoe.quantity > 0));
//             setTotal( (total) => total - shoeItem.price);
        
//       };

//       return (
//         <CartContext.Provider value={{addToCart, increaseCounter, decreaseCounter}}>
//             {children}
//         </CartContext.Provider>
//       )
// }

// export default function useCart() {
//     return useContext(CartContext);
// }


import React, { createContext, useContext, useState } from 'react';

// Create CartContext
export const CartContext = createContext();

// Provide CartContext
export const CartProvider = ({ children }) => {
  // Shoes data
  const shoes = [
    { id: "001", name: "Nike Air Max", quantity: 1, price: 50, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFkjBVzlnF8IY1V6aRPtaU5sHA30u-nyKf1yHaBDfgMaq3UG4Fni0_-wJt7Q&s" },
    { id: "002", name: "Campus Men's Sneakers", quantity: 1, price: 60, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS50c6UEPRYGpnoVvvWz7KiVG3NFnz8Amf9FQ&s" },
    { id: "003", name: "Campus Men's OG-03 Sneakers", quantity: 1, price: 100, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa3CNerfXUbeOvq0uhPORgQbZTE4lWHoCsmw&s" },
    { id: "004", name: "Nike Women Shoe", quantity: 1, price: 90, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSut7qUNntMV1RPFq3kXlABeizBGUwUQqMMkQ&s" },
    { id: "005", name: "Redtape", price: 70, quantity: 1, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5WnBP-1aYoPJ2EViBUUOCMJ3ZFEXrgOAaFg&s" },
    { id: "006", name: "Campus Men's OG-03 Sneakers", quantity: 1, price: 100, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa3CNerfXUbeOvq0uhPORgQbZTE4lWHoCsmw&s" },
    { id: "007", name: "Nike Air Max", price: 50, quantity: 1, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFkjBVzlnF8IY1V6aRPtaU5sHA30u-nyKf1yHaBDfgMaq3UG4Fni0_-wJt7Q&s" },
    { id: "008", name: "Campus Men's Sneakers", quantity: 1, price: 60, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS50c6UEPRYGpnoVvvWz7KiVG3NFnz8Amf9FQ&s" },
    { id: "009", name: "Redtape", price: 70, quantity: 1, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5WnBP-1aYoPJ2EViBUUOCMJ3ZFEXrgOAaFg&s" }
  ];

  // Cart state
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  // Add item to cart
  const addToCart = (shoeItem) => {
    setCart(cart => {
      const isItemInCart = cart.find(shoe => shoe.id === shoeItem.id);
      if (!isItemInCart) {
        setTotal(total => total + shoeItem.price);
        return [...cart, { ...shoeItem, quantity: 1 }];
      } else {
        console.log("Item already in cart");
        return cart;
      }
    });
  };

  // Increase item quantity
  const increaseCounter = (shoeItem) => {
    setCart(cart => {
      const updatedCart = cart.map(shoe =>
        shoe.id === shoeItem.id ? { ...shoe, quantity: shoe.quantity + 1 } : shoe
      );
      setTotal(total => total + shoeItem.price);
      return updatedCart;
    });
  };

  // Decrease item quantity
  const decreaseCounter = (shoeItem) => {
    setCart(cart => {
      const updatedCart = cart.map(shoe =>
        shoe.id === shoeItem.id ? { ...shoe, quantity: shoe.quantity - 1 } : shoe
      ).filter(shoe => shoe.quantity > 0);
      setTotal(total => total - shoeItem.price);
      return updatedCart;
    });
  };

  return (
    <CartContext.Provider value={{ shoes, cart, addToCart, increaseCounter, decreaseCounter, total }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook for using CartContext
export default function useCart() {
  return useContext(CartContext);
}
