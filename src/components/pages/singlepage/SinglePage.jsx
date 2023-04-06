import React from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { getGoodRequest } from "../../../redux/actions/actionCreators";
import { useState, useEffect } from "react";
import { OrderParametr } from "./OrderParametr";
import { PTable } from "./PTable";
import { GoodPhoto } from "./GoodPhoto";

function SinglePage() {
  const { items, loading, error } = useSelector((state) => state.singleGood);
  const [singleGoods, setSingleGoods] = useState("");
  const param = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGoodRequest(param.id));
  }, []);

  useEffect(() => {
    setSingleGoods(items);
  }, [items]);

  return (
    <>
      {items && loading && <div>Load...</div>}
      <section className="catalog-item">
        <h2 className="text-center">{items.title}</h2>
        <div className="row-single">
          <GoodPhoto photo={items.images} />
          <div className="col-7">
            <PTable singleGoods={singleGoods} />
            <OrderParametr Goods={singleGoods.sizes} />
          </div>
        </div>
      </section>
    </>
  );
}

export { SinglePage };
