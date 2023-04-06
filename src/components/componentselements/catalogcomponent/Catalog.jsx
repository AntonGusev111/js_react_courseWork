import React from "react";
import { useState, useEffect } from "react";
import { CatalogList } from "./CatalogList";
import { useSelector, useDispatch } from "react-redux";
import { Categories } from "./categories/Categories";
import { LoadButton } from "./LoadButton";
import { getCatalogRequest } from "../../../redux/actions/actionCreators";
import { SearchString } from "../search/SearchString";

function Catalog({ search }) {
  const [categoryId, setCategory] = useState(" ");
  const [goods, setgoods] = useState([]);
  const [buttonState, setButton] = useState(true);
  const [offset, setOffset] = useState(0);
  const { items, loading, error } = useSelector((state) => state.catalog);
  const { searchValue, searchInput } = useSelector((state) => state.search);

  const dispatch = useDispatch();

  const getData = () =>
    dispatch(
      getCatalogRequest({
        category: categoryId,
        offset: offset,
        q: searchValue,
      })
    );

  const hadleApplyCategory = (id) => {
    if (id != categoryId) {
      setOffset(0);
      setgoods([]);
      setButton(true);
      setCategory(id);
    }
  };

  useEffect(() => {
    getData();
    setgoods([]);
  }, [searchValue]);

  useEffect(() => {
    getData();
  }, [offset]);

  useEffect(() => {
    getData();
  }, [categoryId]);

  useEffect(() => {
    if (items.length < 6) {
      setButton(false);
    }
    setgoods((prev) => [...prev, ...items]);
  }, [items]);

  useEffect(() => {
    setButton(true);
    getData();
  }, []);

  const handleOffset = () => {
    if (items.length > 5) {
      setOffset(offset + 6);
    }
  };

  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      {search ? <SearchString /> : ""}
      <ul className="catalog-categories nav justify-content-center">
        <Categories onChange={hadleApplyCategory} />
      </ul>
      <CatalogList goods={goods} />
      <LoadButton onChange={handleOffset} visible={buttonState} />
    </section>
  );
}

export { Catalog };
