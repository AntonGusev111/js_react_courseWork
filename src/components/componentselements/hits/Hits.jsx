import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getHitsRequest } from "../../../redux/actions/actionCreators";
import { CatalogList } from "../catalogcomponent/CatalogList";

function Hits() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.hits);

  useEffect(() => {
    dispatch(getHitsRequest());
  }, []);

  return (
    <>
      {items && loading && <div>Load...</div>}
      {items.length > 0 ? (
        <>
          {" "}
          <section className="top-sales">
            {" "}
            <h2 className="text-center">Хиты продаж!</h2>{" "}
            <CatalogList goods={items} />{" "}
          </section>
        </>
      ) : (
        ""
      )}
    </>
  );
}

export { Hits };
