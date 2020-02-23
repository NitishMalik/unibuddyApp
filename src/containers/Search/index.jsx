import React from "react";
import "./styles.scss";
import AutoComplete from "../../components/autocomplete";
import Increment from "../../components/increment";

const Search = ({ books }) => (
  <div className="search-container">
    <form onSubmit>
      <AutoComplete />
      <Increment />
      <input type="submit" />
    </form>
  </div>
);

export default Search;
