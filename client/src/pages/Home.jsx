import React from "react";

export default function Home(){
    return(
        <>
             <div id='main'>
                <img className="bg-cover right-0" src="/assets/cover-2.png"></img>
                <div className='img-container absolute left-0 pr-40'>
                    <img className="object-cover w-100 h-screen" src='/assets/Artisan.png'></img>
                </div>
                <div id="main-text">
                    <h1 className="text">Artisan
                    <br></br>
                    <span className="connect">Connect</span></h1>
                </div>
                <div className="absolute button">
                <button class="bg-transparent text-brown-700 font-semibold py-2 px-4 border rounded">
                    Join US!
                </button>
                </div>
            </div>
        </>
    )
}