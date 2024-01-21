import React from "react";
import Images from "../../assets/Images";
import "./IncreDecreButton.css";
import { useState } from "react";

const IncreDecreButton = ({ stock }) => {
  const [qty, setQty] = useState(1);
  const setIncress = () => {
    qty < stock ? setQty(qty + 1) : setQty(stock);
  };
  const setDecress = () => {
    qty > 1 ? setQty(qty - 1) : setQty(1);
  };
  return (
    <div className="qtybtn d-flex flex-column gap-2 mt-4">
      <p className="txt-black">Quantity</p>
      <div className="input-group">
        <button className="btn btn-link" onClick={() => setDecress()}>
          <img src={Images.minus} alt="minus" />
        </button>
        <input type="text" className="form-control counter-input" value={qty} />
        <button className="btn btn-link" onClick={() => setIncress()}>
          <img src={Images.plus} alt="plus" />
        </button>
      </div>
    </div>
  );
};

export default IncreDecreButton;
