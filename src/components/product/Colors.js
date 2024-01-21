import React from "react";
import { useState, useEffect } from "react";
import "./Product.css";

const Colors = ({ colors }) => {
  const [isActive, setisActive] = useState(null);

  useEffect(() => {
    if (colors?.length > 0) {
      setisActive(colors[0]);
    }
  }, [colors]);

  return (
    <>
      {colors?.map((curColor, index) => {
        return (
          <button
            className={`btn btn-sm  ${
              isActive === curColor ? "activeColor" : null
            }`}
            key={index}
            style={{ background: curColor }}
            onClick={() => setisActive(curColor)}
          ></button>
        );
      })}
    </>
  );
};

export default Colors;
