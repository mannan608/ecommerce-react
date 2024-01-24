import React, { useContext, useState, useEffect } from "react";
import Images from "../assets/Images";
import Search from "../components/search/Search";
import Dropdown from "../components/dropdown/Dropdown";
import Product from "../components/product/Product";
import { ProductContext } from "../context/ProductContext";
import Category from "../assets/category/Category";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const { Products } = useContext(ProductContext);

  const [Items, setItems] = useState("");
  const [SrcItem, setSrcItem] = useState();

  const SearchProduct = () => {
    const searchresult = Products?.filter((sitem) => {
      return SrcItem === ""
        ? sitem
        : sitem.name.toLowerCase().includes(Items.toLowerCase());
    });
    setSrcItem(searchresult);
  };

  const categoryData = [...new Set(Products.map((value) => value.category))];

  const CategoryFilterItem = (cate) => {
    const newItem = Products.filter((newval) => newval.category === cate);
    setSrcItem(newItem);
  };
  // End  Category filter

  const SearchItem = (e) => {
    setItems(e.target.value);
  };

  useEffect(() => {
    setSrcItem(Products);
  }, [Products]);

  useEffect(() => {
    SearchProduct();
  }, [Items]);

  const notifyAddedToCart = (product) =>
    toast.success(`${product.name} added to cart!`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      style: {
        backgroundColor: "#fff",
        color: "#000",
      },
    });

  return (
    <div className="component-wrapper">
      <div className="container-fluid">
        <ToastContainer />
        <div className="hero-image d-flex align-items-center justify-content-between">
          <h2 className="fw-600">
            Customize Your Dream Wardrobe <br />
            With Iconic Style
          </h2>
          <div>
            <img src={Images.heroBannar} alt="" className="w-auto h-auto" />
          </div>
        </div>
        <div className="products d-flex justify-content-between mt-5">
          <div className="tab-menus">
            <h4 className="mb-3">All Category</h4>
            <Category
              categoryData={categoryData}
              CategoryFilterItem={CategoryFilterItem}
            />
          </div>
          <div className="categories-product">
            <div className="filter-area d-flex gap-4">
              <div className="w-75">
                <Search SearchItem={SearchItem} />
              </div>
              <div className="w-25">
                <Dropdown
                  categoryData={categoryData}
                  CategoryFilterItem={CategoryFilterItem}
                />
              </div>
            </div>
            <div className="show-result mt-4">
              <div className="row">
                {SrcItem?.map((product) => {
                  return (
                    <Product
                      product={product}
                      key={product.id}
                      notifyAddedToCart={notifyAddedToCart}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
