import { Link, NavLink } from "react-router-dom";
import Images from "../../assets/Images";
import "./Navbar.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Navbar = () => {
  const { CartItem } = useContext(CartContext);

  return (
    <div className="navbar-wrapper d-flex align-items-center">
      <div className="container-fluid">
        <nav className="navbar">
          <div className="navbar-links d-flex align-items-center">
            <div className="mobile-nav-toggler">
              <img src="../images/icon/fa_bar.svg" alt="" />
            </div>
            <div className="brand-logo">
              <Link to="/">
                <img src={Images.logo} alt="logo"></img>
              </Link>
            </div>
            <div className="navbar-menu">
              <ul className="navbar-nav" id="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    HOME
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    ABOUT
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    CONTACT
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <div className="navbar-action d-flex align-items-center gap-4">
            <Link to="/wholesale">
              <button type="button" className="btn btn-link">
                Contact for wholesale
              </button>
            </Link>

            <Link className="carts-link wishlist d-flex gap-3" to="/wishlist">
              <div className="navbar-wishlist position-relative">
                <img src={Images.wishlist} alt="wishlist" />
                <span className="badge text-bg-danger">4</span>
              </div>
              Wishlist
            </Link>

            <Link className="carts-link cart d-flex gap-3" to="/carts">
              <div className="cart-icon d-flex align-items-center justify-content-center position-relative">
                <img src={Images.cart} alt="cart" />
                <span className="badge text-bg-danger">
                  {CartItem.length === 0 ? "" : CartItem.length}
                </span>
              </div>
              Your Cart
            </Link>
            <Link className="user_account" to="/dashboard">
              <img src={Images.user} alt="profileImg" />
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
