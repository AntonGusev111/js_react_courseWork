import React from "react";
import { Catalog } from "../../components/Catalog/Catalog";

function CatalogPage() {
  return (
    <div>
      <Catalog search={true} />
    </div>
  );
}

export { CatalogPage };
