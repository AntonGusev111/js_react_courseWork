import React from 'react';
import { Routes, Route } from "react-router-dom";
import MainPage from "../components/dynamic/MainPage"
import N404 from '../components/StaticPages/404'
import About from '../components/StaticPages/About';
import Contacts from '../components/StaticPages/Contacts'
import Catalog from '../components/dynamic/Catalog';
import Cart from '../components/dynamic/Cart/'
import SinglePage from '../components/dynamic/SinglePage';

export default function ProjectRouters() {
  return (
    <Routes>
        <Route path="*" element={<N404 />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/catalog.html" element={<Catalog />} />
        <Route path="/about.html" element={<About />} />
        <Route path="/contacts.html" element={<Contacts />} />
        <Route path="/cart.html" element={<Cart />} />
        <Route path='/catalog/:id.html' element={<SinglePage />} />
    </Routes>
  )
}
