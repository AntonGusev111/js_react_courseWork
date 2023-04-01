import React from "react";

function Categories({ element, select }) {
  return (
    <a
      id={element.id}
      className={
        element.id == select
          ? "nav-link-categories linkactive"
          : "nav-link-categories "
      }
    >
      {element.title}
    </a>
  );
}

export { Categories };
