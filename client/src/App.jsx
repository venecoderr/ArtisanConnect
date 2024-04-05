import { useState } from 'react'
import { Outlet, Route, Routes, RouterProvider } from "react-router-dom";
import { QueriesProvider } from './utils/QueriesContext.jsx';
import Nav from "./components/Nav";
import Products from './pages/Products.jsx';
import ProductPage from './pages/ProductPage.jsx';

export default function App(){
  return(
    <div className="w-full h-100 bg-gradient-to-r from-amber-100 to-stone-300/70">

        <QueriesProvider>
          <Nav/>
          <Outlet/>
        </QueriesProvider>
        <Routes>
   <Route path="*" exact element={<Products />} />
   <Route path="/product/:id" element={<ProductPage />} />
  </Routes>
 
    </div>
  )
}