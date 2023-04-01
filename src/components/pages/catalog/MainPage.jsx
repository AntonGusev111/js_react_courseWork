import React from "react";
import { CatalogList } from "./CatalogList";
import { Hits } from "../hits/Hits";
import { LoadButton } from "./LoadButton";
import { Categories } from "./Categories";
import goods from "../../testVariables";

function MainPage() {
  const catigories = [
    { id: 11, title: "All" },
    { id: 12, title: "Мужская обувь" },
    { id: 13, title: "Женская обувь" },
  ];
  return (
    <>
      <section className="top-sales">
        <Hits goods={goods} />
      </section>
      <section className="catalog">
        <h2 className="text-center">Каталог</h2>
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
        <CatalogList goods={goods} />
        <LoadButton />
      </section>
    </>
  );
}

export { MainPage };
