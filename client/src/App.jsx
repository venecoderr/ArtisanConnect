import { useState } from 'react'
import { Outlet } from "react-router-dom";
import { QueriesProvider } from './utils/QueriesContext.jsx';
import Nav from "./components/Nav";

export default function App(){
  return(
    <div 
    className="main-div w-full h-100 bg-gradient-to-r from-amber-100 to-stone-300/70"
    >
        <QueriesProvider>
          <Nav/>

          <Outlet/>
        </QueriesProvider>
    </div>
  )
}