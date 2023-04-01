import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "../pages/catalog/MainPage";
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage";
import { About } from "../pages/about/About";
import { Contacts } from "../pages/contacts/Contacts";
import { Catalog } from "../pages/catalog/Catalog";
import { Cart } from "../pages/cart/Cart";
import { SinglePage } from "../pages/singlepage/SinglePage";

function ProjectRouter() {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/" element={<MainPage />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/about" element={<About />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/catalog/:id" element={<SinglePage />} />
    </Routes>
  );
}

export { ProjectRouter };