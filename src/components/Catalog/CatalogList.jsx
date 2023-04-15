import React from "react";

import { RenderCatalog } from "./RenderCatalog";

function CatalogList({ goods }) {
  return (
    <>
      <div className="row-catalog">
        {goods.map((object) => {
          return <RenderCatalog key={object.id} object={object} />;
        })}
      </div>
    </>
  );
}

export { CatalogList };
