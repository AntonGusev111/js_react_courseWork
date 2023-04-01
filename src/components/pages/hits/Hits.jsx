import React from "react";
import { CatalogList } from "../catalog/CatalogList";

function Hits({ goods }) {
  return (
    <>
      <h2 className="text-center">Хиты продаж!</h2>
      <CatalogList goods={goods} />
    </>
  );
}

export { Hits };
