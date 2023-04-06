import React from "react";
import { Catalog } from "../../componentselements/catalogcomponent/Catalog";

function CatalogPage() {
  return (
    <div>
      <Catalog search={true} />
    </div>
  );
}

export { CatalogPage };
