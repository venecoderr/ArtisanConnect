import { useState } from 'react'
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import LoginForm from './components/ui/logInForm'
import './App.css'

export default function App(){
  return(
    <>
      <Nav/>
      <Outlet/>
    </>
  )
}