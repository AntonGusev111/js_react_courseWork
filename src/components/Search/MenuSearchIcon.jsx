import React from "react";
import { useState } from "react";
import searchMenuIcon from "../../assets/searchIcon.png";
import { useDispatch } from "react-redux";
import { changeSearchField } from "../../redux/Actions/actionCreators";
//import {Redirect} from "react-router-dom";  //Uncaught SyntaxError: The requested module '/node_modules/.vite/deps/react-router-dom.js?v=dda6d809' does not provide an export named 'Redirect'

function MenuSearchIcon() {
  const [inputValue, setValue] = useState("");
  const [inputVisible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };

  const handleChangeSearch = () => {
    const value = document.querySelector(".searchVal");
    setVisible(!inputVisible);
    if (inputVisible) {
      setValue("");
    }
    if (value.length > 0) {
      dispatch(changeSearchField(value));
    }
  };

  return (
    <div>
      <input
        onChange={handleChangeValue}
        value={inputValue}
        className={
          inputVisible ? "searchVal searchInputMenu" : "searchVal invisible"
        }
      ></input>
      <img
        onClick={handleChangeSearch}
        className="searchIconMenu"
        src={searchMenuIcon}
        alt=""
      />
    </div>
  );
}

export { MenuSearchIcon };
