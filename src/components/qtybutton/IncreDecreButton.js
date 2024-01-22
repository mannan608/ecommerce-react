// import React, { useContext } from "react";
import Images from "../../assets/Images";
import "./IncreDecreButton.css";
// import { useState } from "react";

const IncreDecreButton = ({ newqty, setIncress, setDecress, item }) => {
  // const { qty } = item;
  // const [newqty, setnewQty] = useState(qty);
  // const setIncress = () => {
  //   setnewQty(newqty + 1);
  // };
  // const setDecress = () => {
  //   setnewQty(newqty - 1);
  // };

  return (
    <div className="qtybtn d-flex flex-column gap-2 mt-4">
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
  );
};

export default IncreDecreButton;
