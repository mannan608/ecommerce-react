import React, { useState, useRef, useEffect } from "react";

const Dropdown = ({ CategoryFilterItem, categoryData }) => {
  const [isVisible, setisVisible] = useState(false);

  const [selectIndex, setselectIndex] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setisVisible(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="custom-dropdown">
      <label className="form-control" onClick={(e) => setisVisible(!isVisible)}>
        {selectIndex != null ? categoryData[selectIndex] : "Select Item"}
      </label>

      <span className="arrow-icon"></span>
      {isVisible ? (
        <ul id="myOptions" className="options-list">
          {categoryData.map((item, index) => {
            return (
              <option
                key={index}
                onClick={(e) => {
                  setselectIndex(index);
                  setisVisible(false);
                  CategoryFilterItem(item);
                }}
              >
                {item}
              </option>
            );
          })}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Dropdown;
