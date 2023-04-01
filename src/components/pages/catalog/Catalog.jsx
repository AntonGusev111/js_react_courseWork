import React from "react";
import { CatalogList } from "./CatalogList";
import { Categories } from "./Categories";
import { LoadButton } from "./LoadButton";

import goods from "../../testVariables";
import { useState } from "react";

function Catalog() {
  const [state, setState] = useState(11);

  const catigories = [
    { id: 11, title: "All" },
    { id: 12, title: "Мужская обувь" },
    { id: 13, title: "Женская обувь" },
  ];

  const handleChose = (e) => {
    setState(e.target.id);
  };

  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      <input type="text" className="form-control" placeholder="Поиск" />
      <ul className="catalog-categories nav justify-content-center">
        {catigories.map((element) => {
          return (
            <li
              onClick={handleChose}
              key={element.id}
              className="nav-item-categories"
            >
              <Categories element={element} select={state} />
            </li>
          );
        })}
      </ul>
      <CatalogList goods={goods} />
      <LoadButton />
    </section>
  );
}

export { Catalog };
