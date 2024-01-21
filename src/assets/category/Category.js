import React, { useState } from "react";

const Category = ({ CategoryFilterItem, categoryData }) => {
  const [active, setActive] = useState(null);
  return (
    <ul className="tab-menus-items d-flex gap-2 flex-column">
      {categoryData.map((curlem, index) => {
        return (
          <li
            className="tab-item"
            key={index}
            onClick={() => CategoryFilterItem(curlem)}
          >
            <button
              className={`btn btn-sm  ${
                active === curlem ? "btn-primary" : "btn-secondary"
              }`}
              onClick={() => setActive(curlem)}
            >
              {curlem}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Category;
