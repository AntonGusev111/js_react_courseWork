import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function OrderParametr({ Goods }) {
  const [goodsCount, setCount] = useState(1);
  const [selectSize, setSize] = useState(undefined);

  const handleChangeCount = (e) => {
    const sign = e.target.innerHTML;
    if (sign == "-") {
      setCount(goodsCount - 1 > 0 ? goodsCount - 1 : goodsCount);
    } else {
      setCount(goodsCount + 1 < 11 ? goodsCount + 1 : goodsCount);
    }
  };

  const handleSizeChoise = (e) => {
    setSize(e.target.id);
  };

  return (
    <>
      <div className="text-center">
        <p>
          Размеры в наличии:
          {Goods != undefined
            ? Goods.map((element, index) => {
                if (element.available) {
                  return (
                    <span
                      key={index}
                      id={index}
                      onClick={handleSizeChoise}
                      className={
                        selectSize == index
                          ? "catalog-item-size selected"
                          : "catalog-item-size"
                      }
                    >
                      {element.size}
                    </span>
                  );
                }
              })
            : ""}
        </p>
        <p>
          Количество:
          <span className="btn-group btn-group-sm pl-2">
            <button onClick={handleChangeCount} className="btn btn-secondary">
              -
            </button>
            <span className="btn btn-outline-primary">{goodsCount}</span>
            <button onClick={handleChangeCount} className="btn btn-secondary">
              +
            </button>
          </span>
        </p>
      </div>
      <Link to={"/cart"}>
        <button
          className={
            selectSize == undefined
              ? "btn btn-danger btn-block btn-lg hidden"
              : "btn btn-danger btn-block btn-lg"
          }
        >
          В корзину
        </button>
      </Link>
    </>
  );
}

export { OrderParametr };
