import React, { useState} from "react";
import { AiOutlineMenu, 
        AiOutlineHome, 
        AiOutlineUser, 
        AiOutlineFolderOpen, 
        AiOutlineSolution } from 'react-icons/ai'
import { Link } from "react-router-dom";

export default function Nav(){

    const [nav, setNav ] = useState(false);
    const handleNav = () =>{
        setNav(!nav);
    };

    return(
        <>
            <div className="flex lg:flex-1">
                <AiOutlineMenu onClick={handleNav} className="absolute top-4 right-4 z-[99] md:hidden"/>
                {/* Apply some conditionals => If our nav statement is true, display some html */}
                    {
                        nav ? (
                            <>
                             <div className="fixed w-full h-screen bg-gradient-to-r from-amber-100 to-stone-300/70 flex flex-col justify-center items-center z-20">
                                <Link to='/' className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-brown-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-200">
                                    <AiOutlineHome size={20}/>
                                    <span className="pl-4">HOME</span>
                                </Link>
                                <Link to='/about' className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-brown-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-200">
                                    <AiOutlineUser size={20}/>
                                    <span className="pl-4">ABOUT US</span>
                                </Link>
                                <Link to='/products' className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-brown-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-200">
                                    <AiOutlineFolderOpen size={20}/>
                                    <span className="pl-4">PRODUCTS</span>
                                </Link>
                                <Link to='/profile' className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-brown-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-200">
                                    <AiOutlineSolution size={20}/>
                                    <span className="pl-4">DASHBOARD</span>
                                </Link>
                            </div>
                            </>
                           
                        ) : (
                           ''
                        )}

                <div id="title-name" className="md:block hidden fixed top-[2%] z-10 right-4 ">
                    <div className="flex flex-row">
                            <Link id="navbar" to='/' className="justify-between m-3 border-b-2">HOME</Link>
                            <Link id="navbar" to='/about' className="justify-between m-3 border-b-2">ABOUT</Link>
                            <Link id="navbar" to='/products' className="justify-between m-3 border-b-2">PRODUCTS</Link>
                            <Link id="navbar" to='/profile' className="justify-between m-3 border-b-2">DASHBOARD</Link>
                    </div>
                </div>  
            </div>
        </>
    )
}