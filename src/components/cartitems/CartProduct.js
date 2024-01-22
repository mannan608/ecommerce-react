// import React, { useContext } from "react";
import { useState } from "react";
import IncreDecreButton from "../qtybutton/IncreDecreButton";
import "./CartItem.css";
// import { CartContext } from "../../context/CartContext";

const CartProduct = ({ item, RemoveItem }) => {
  // const { CartItem } = useContext(CartContext);
  const { name, price, colors, image, qty } = item;

  const [newqty, setnewQty] = useState(qty);
  const setIncress = () => {
    setnewQty(newqty + 1);
  };
  const setDecress = () => {
    setnewQty(newqty - 1);
  };

  return (
    <div className="cart-item d-flex justify-content-between ">
      <div className="cart-item-info d-flex gap-3 w-50">
        <div className="cart-item-img">
          <img src={image} alt={name} />
        </div>
        <div className="cart-item-name">
          <p className="txt-black">{name}</p>

          <button
            className={`btn btn-exx-sm  `}
            style={{ background: colors[0] }}
          ></button>
        </div>
      </div>
      <div className="price">
        <span>
          <p>{price}</p>
        </span>
        <del>28$</del>
      </div>
      <IncreDecreButton
        newqty={newqty}
        setIncress={setIncress}
        setDecress={setDecress}
      />

      <div
        className="cart-item-action d-flex justify-content-center align-items-center"
        onClick={() => RemoveItem(item)}
      >
        <i className="fa-regular fa-trash-can"></i>
      </div>
    </div>
  );
};

export default CartProduct;
