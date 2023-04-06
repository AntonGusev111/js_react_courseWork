import React from "react";
import { useState, useEffect } from "react";
import { CategoriesList } from "./CategoriesList";
import { useSelector, useDispatch } from "react-redux";
import { getCategoriesRequest } from "../../../../redux/actions/actionCreators";

function Categories({ onChange }) {
  const [state, setState] = useState(" ");
  const [categoriesState, setCategories] = useState([]);
  const dispatch = useDispatch();

  const { items, loading, error } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategoriesRequest());
  }, []);

  useEffect(() => {
    items.splice(0, 0, { id: " ", title: "Все" });
    setCategories(items);
  }, [items]);

  const handleChose = (e) => {
    setState(e.target.id);
    onChange(e.target.id);
  };

  return (
    <>
      {categoriesState.map((element) => {
        return (
          <li
            onClick={handleChose}
            key={element.id}
            className="nav-item-categories"
          >
            <CategoriesList element={element} select={state} />
          </li>
        );
      })}
    </>
  );
}

export { Categories };
