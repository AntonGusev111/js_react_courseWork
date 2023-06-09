import React from "react";

function CategoriesLoader() {
  return (
    <div className="CategoriesLoadercontainer1">
      <div
        aria-busy="true"
        aria-label="Loading"
        role="progressbar"
        className="CategoriesLoadercontainer"
      >
        <div className="swing">
          <div className="swing-l"></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div className="swing-r"></div>
        </div>
        <div className="shadow">
          <div className="shadow-l"></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div className="shadow-r"></div>
        </div>
      </div>
    </div>
  );
}

export { CategoriesLoader };
