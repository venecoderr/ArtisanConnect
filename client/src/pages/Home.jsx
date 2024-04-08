import React from "react";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home(){
    return(
        <>
             <div id='main' className="h-screen">
                <img className="main-cover element-cover right-0" src="/assets/cover-2.png"></img>
                <div className='img-container absolute left-0 pr-40'>
                    <img className="object-cover w-100 h-screen" src='/assets/Artisan.png'></img>
                </div>
                <div id="main-text">
                    <h1 className="text">Artisan
                    <br></br>
                    <span className="connect">Connect</span></h1>
                </div>
                <div className="absolute button">
                <Link to ="/signup">
                <button className="bg-transparent text-brown-700 font-semibold py-2 px-4 border rounded">
                    Join US!
                </button>
                </Link>
                </div>
            </div>
        </>
    )
}