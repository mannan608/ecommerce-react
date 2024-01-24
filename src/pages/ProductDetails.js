import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ProductImgs from "../components/product/ProductImgs";
import Colors from "../components/product/Colors";
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
  const { addToCart } = useContext(CartContext);
  const [productDetails, setproductDetails] = useState([]);
  const [isActive, setisActive] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  const { id } = useParams();

  const getSingleProduct = async () => {
    const res = await fetch(`https://api.pujakaitem.com/api/products?id=${id}`);
    const data = await res.json();
    setproductDetails(data);
  };

  useEffect(() => {
    getSingleProduct();
  }, []);
  const { name, price, image, description, colors } = productDetails;

  // active color select

  useEffect(() => {
    if (colors?.length > 0) {
      setisActive(colors[0]);
    }
  }, [colors]);
  const cartProductDetails = {
    ...productDetails,
    isActive,
    mainImage,
  };
  // current image

  useEffect(() => {
    if (image?.length > 0) {
      setMainImage(image[0]);
    }
  }, [image]);

  return (
    <div className="component-wrapper">
      <div className="container-fluid">
        <div className="product-information d-flex justify-content-between">
          <ProductImgs
            image={image}
            setMainImage={setMainImage}
            mainImage={mainImage}
          />
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
                  <Colors
                    setisActive={setisActive}
                    colors={colors}
                    isActive={isActive}
                  />
                </div>

                <div className="d-flex flex-column gap-4 mt-4">
                  <div className="cart-action d-flex gap-4">
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      onClick={() => {
                        addToCart(cartProductDetails);
                      }}
                    >
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
