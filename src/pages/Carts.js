import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
// import IncreDecreButton from "../components/qtybutton/IncreDecreButton";
import { Link } from "react-router-dom";
import CartProduct from "../components/cartitems/CartProduct";

const Carts = () => {
  const { CartItem, RemoveItem } = useContext(CartContext);

  // console.log("mannan price", CartItem);

  return (
    <div className="component-wrapper">
      <div className="container-fluid">
        <div className="breadcump-area">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="#">Home</Link>
              </li>
              <li className="breadcrumb-item " aria-current="page">
                <Link to="#">product</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                <Link to="#">Pocket Bag</Link>
              </li>
            </ol>
          </nav>
        </div>
        <div className="product-carts d-flex">
          <div className="product-cart d-flex flex-column">
            <div className="section-head">
              <h4>My Carts</h4>
            </div>
            <div className="cart-items d-flex flex-column gap-3 mt-4">
              {CartItem.map((item) => {
                return (
                  <CartProduct
                    key={item.id}
                    item={item}
                    RemoveItem={RemoveItem}
                  />
                );
              })}
            </div>
          </div>
          <div className="cart-items-summary">
            <h6>Order Summery</h6>
            <ul className="list-group mt-4 gap-3">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <p>
                  Sub Total ({CartItem.length === 0 ? "" : CartItem.length})
                </p>
                <p className="txt-black">{}</p>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <p>Coupon Code</p>
                <div>
                  <input
                    type="text"
                    className="form-control counter-input "
                    value="0"
                  />
                </div>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <p className="txt-black">Total</p>
                <p className="txt-black">20500$</p>
              </li>
            </ul>
            <div className="process-order mt-4">
              <Link to="/payment">
                <button type="button" class="btn btn-primary btn-sm w-100">
                  Process to Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carts;
