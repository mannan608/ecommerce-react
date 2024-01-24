import Images from "../../assets/Images";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./Product.css";
import { useContext } from "react";

const Product = ({ product, notifyAddedToCart }) => {
  const { id, image, name, price } = product;
  const { addToCart } = useContext(CartContext);
  return (
    <div className="col-lg-3 col-md-4">
      <div className="product">
        <div className="card">
          <div className="product-img">
            <img src={image} alt="product Name" />
          </div>
          <div className="card-body d-flex flex-column gap-1">
            <Link to={`/productdetails`}>
              <p>{name}</p>
            </Link>
            <div className="d-flex justify-content-between align-items-center">
              <div className="product-price d-flex align-items-center gap-2">
                <p>{price} </p>
                <del>$2</del>
              </div>
              <div className="cart_action">
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => {
                    addToCart(product);
                    notifyAddedToCart(product);
                  }}
                >
                  <img
                    src={Images.cart_btn_20}
                    alt="product Name"
                    className="cart_btn_20"
                  />
                  <img
                    src={Images.cart_btn_20_hover}
                    alt="product Name"
                    className="cart_btn_20_hover"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="quick-action">
            <div className="wishlist-icon">
              <img src={Images.cardWishlist} alt="" className="w-auto h-auto" />
            </div>
            <Link to={`/productdetails/${id}`}>
              <div className="quick-view">
                <img src={Images.cardEye} alt="" className="w-auto h-auto" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
