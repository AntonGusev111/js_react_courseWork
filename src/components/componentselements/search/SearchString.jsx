import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeSearchField } from "../../../redux/actions/actionCreators";

function SearchString() {
  const dispatch = useDispatch();

  const handleSearch = (evt) => {
    const { value } = evt.target;
    dispatch(changeSearchField(value));
  };

  return (
    <div>
      <input
        className="CatalogSearch"
        onChange={handleSearch}
        type="search"
        placeholder="Поиск"
      />
    </div>
  );
}

export { SearchString };
