import React from "react";
import "./search.css";
const Search = ({ placeholder, searchOnchangeHandler }) => {
  return (
    <input
      className='search'
      type='search'
      placeholder={placeholder}
      onChange={searchOnchangeHandler}
    />
  );
};

export default Search;
