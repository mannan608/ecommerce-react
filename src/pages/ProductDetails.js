import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductImgs from "../components/product/ProductImgs";
import IncreDecreButton from "../components/qtybutton/IncreDecreButton";
import Colors from "../components/product/Colors";

const ProductDetails = () => {
  const [productDetails, setproductDetails] = useState([]);
  const { id } = useParams();

  const getSingleProduct = async () => {
    const res = await fetch(`https://api.pujakaitem.com/api/products?id=${id}`);
    const data = await res.json();
    setproductDetails(data);
  };

  useEffect(() => {
    getSingleProduct();
  }, []);
  const { name, price, image, description, colors, stock } = productDetails;
  return (
    <div className="component-wrapper">
      <div className="container-fluid">
        <div className="product-information d-flex justify-content-between">
          <ProductImgs image={image} />
          <div className="product-content d-flex flex-column">
            <div className="d-flex gap-1 flex-column">
              <h4>{name}</h4>
              <div className="alert alert-primary alert-ex-sm" role="alert">
                instock
              </div>
            </div>
            <div className="d-flex flex-column gap-4">
              <h4>Price {price}</h4>
              <div>
                <p className="txt-black">Available Color</p>
                <div className="color-list d-flex gap-3 mt-2" id="colorlist">
                  <Colors colors={colors} />
                </div>

                <div className="d-flex flex-column gap-4">
                  <IncreDecreButton stock={stock} />
                  <div className="cart-action d-flex gap-4">
                    <button type="button" className="btn btn-primary btn-sm">
                      Add to Cart
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-warning btn-sm"
                    >
                      Add to Wishlist
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-description">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
