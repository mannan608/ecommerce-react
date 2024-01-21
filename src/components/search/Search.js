import React from "react";
import Images from "../../assets/Images";

const Search = ({ SearchItem }) => {
  return (
    <div className="search-box">
      <input
        type="text"
        className="form-control"
        placeholder="Search Every Things"
        id="searchInput"
        onChange={(e) => SearchItem(e)}
      />
      <img
        src={Images.search}
        alt="Search Icon"
        className="search_icon w-auto h-auto"
      />
    </div>
  );
};

export default Search;
