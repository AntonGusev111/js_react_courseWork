import React from "react";
import { CatalogList } from "./CatalogList";
import { Hits } from "../hits/Hits";
import { LoadButton } from "./LoadButton";
import { Categories } from "./Categories";
import { useState } from "react";
import goods from "../../testVariables";

function MainPage() {
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
    <>
      <section className="top-sales">
        <Hits goods={goods} />
      </section>
      <section className="catalog">
        <h2 className="text-center">Каталог</h2>
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
    </>
  );
}

export { MainPage };
