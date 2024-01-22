import React, { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [CartItem, setCartItem] = useState([]);

  // total amount
  //   const [total, setTotal] = useState(0);
  //   useEffect(() => {
  //     if (cart) {
  //       const total = cart.reduce((accumulator, currentItem) => {
  //         return accumulator + currentItem.price * currentItem.amount;
  //       }, 0);
  //       setTotal(total);
  //     }
  //   }, [cart]);

  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);
    if (productExit) {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }]);
    }
  };

  // remove form cart
  const RemoveItem = (product) => {
    const itemRemove = CartItem.filter((item) => {
      return item.id !== product.id;
    });
    setCartItem(itemRemove);
  };

  // total amount

  //   const totalAmount = () => {
  //     const amount = CartItem.reduce((price, item) => {
  //       return price + item.price * item.amount;
  //     });
  //     setCartItem(amount);
  //   };
  //   const [totalAmount, settotalAmount] = useState(0);
  //   useEffect(() => {
  //     if (CartItem) {
  //       const total = CartItem.reduce((accumulator, currentItem) => {
  //         return accumulator + currentItem.price * currentItem.total;
  //       }, 0);
  //       settotalAmount(total);
  //     }
  //   }, [CartItem]);

  // add to cart item
  // const addToCart = (item, id) => {
  //     const newItem = { ...item, qty: 1 };
  //     const cartItems = CartItem.find((item) => {
  //     return item.id === id;
  //     });
  //     if (cartItems) {
  //     const newCartItem = [...CartItem].map((item) => {
  //         if (item.id === id) {
  //         return { ...item, qty: cartItems.qty + 1 };
  //         } else {
  //         return item;
  //         }
  //     });
  //     setCartItem(newCartItem);
  //     } else {
  //     setCartItem([...CartItem, newItem]);
  //     }
  // };
  // remove form cart
  //   const RemoveItem = (id) => {
  //     const newItem = cart.filter((item) => {
  //       return item.id !== id;
  //     });
  //     setCart(newItem);
  //   };

  // Incress and Decress
  //   const IncressBtn = (id) => {
  //     const cartItem = cart.find((item) => item.id === id);
  //     AddToCart(cartItem, id);
  //   };
  //   const DecressBtn = (id) => {
  //     const cartItem = cart.find((item) => {
  //       return item.id === id;
  //     });
  //     if (cartItem) {
  //       const newCartItem = cart.map((item) => {
  //         if (item.id === id) {
  //           return { ...item, amount: cartItem.amount - 1 };
  //         } else {
  //           return item;
  //         }
  //       });
  //       setCart(newCartItem);
  //     }
  //     if (cartItem.amount < 2) {
  //       RemoveItem(id);
  //     }
  //   };
  //   let CartItemInfo;
  //   CartItemInfo={
  // id:id + Color,
  // name:product.name,
  // Color,
  // qty,
  // image:product.image[0].url,
  // price:product.price,
  // max:product.stock
  //   }

  // const AddToCart=(id, Color, qty, product){

  // }

  return (
    <CartContext.Provider
      value={{
        CartItem,
        addToCart,
        RemoveItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
