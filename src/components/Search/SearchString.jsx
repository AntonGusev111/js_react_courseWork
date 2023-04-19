import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSearchField } from "../../redux/Actions/actionCreators";

function SearchString() {

  const dispatch = useDispatch();
  const { searchInput, searchValue } = useSelector((state) => state.search);

  const handleSearch = (evt) => {
    const { value } = evt.target;
    dispatch(changeSearchField(value));
  };

  return (
    <div>
      <input
        className="CatalogSearch"
        onChange={handleSearch}
        type="text"
        placeholder="Поиск"
        value = { searchInput }
      />
    </div>
  );
}

export { SearchString };
