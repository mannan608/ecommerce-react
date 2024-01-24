import { useState } from "react";
import "./CartItem.css";
import Images from "../../assets/Images";

const CartProduct = (cartProductDetails) => {
  const { item, RemoveItem } = cartProductDetails;
  const [newqty, setnewQty] = useState(item.qty);
  const setIncress = () => {
    setnewQty(newqty + 1);
  };
  const setDecress = () => {
    newqty > 1 ? setnewQty(newqty - 1) : setnewQty(1);
  };
  let total = 0;
  total = item.price * newqty;

  return (
    <div className="cart-item d-flex justify-content-between align-items-center ">
      <div className="cart-item-info d-flex gap-3 w-50">
        {item.mainImage ? (
          <div className="cart-item-img">
            <img src={item.mainImage.url} alt={item.name} />
          </div>
        ) : (
          <div className="cart-item-img">
            <img src={item.image} alt={item.name} />
          </div>
        )}

        <div className="cart-item-name">
          <p className="txt-black">{item.name}</p>
          {item.isActive ? (
            <button
              className={`btn btn-exx-sm  `}
              style={{ background: item.isActive }}
            ></button>
          ) : (
            <button
              className={`btn btn-exx-sm  `}
              style={{ background: item.colors[0] }}
            ></button>
          )}
        </div>
      </div>
      <div className="price">
        <span>
          <p>{total}</p>
        </span>
      </div>

      <div className="qtybtn d-flex flex-column gap-2 ">
        <div className="input-group">
          <button className="btn btn-link" onClick={() => setDecress()}>
            <img src={Images.minus} alt="minus" />
          </button>
          <input
            type="text"
            className="form-control counter-input"
            value={newqty}
          />
          <button className="btn btn-link" onClick={() => setIncress()}>
            <img src={Images.plus} alt="plus" />
          </button>
        </div>
      </div>

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
