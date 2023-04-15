import React from "react";
import { Hits } from "../../components/Hits/Hits"; //../../componentselements/hits/Hits
import { Catalog } from "../../components/Catalog/Catalog"; //../../componentselements/catalogcomponent/Catalog

function MainPage() {
  return (
    <>
      <Hits />
      <Catalog search={false} />
    </>
  );
}

export { MainPage };
