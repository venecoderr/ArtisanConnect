import React, {useState} from "react";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function About(){
    const slides = [
        {
            url: '/assets/carousel-img.jpg'
        },
        {
            url: '/assets/carousel-img2.jpg'
        },
        {
            url: '/assets/carousel-img3.jpg'
        },
        {
            url: '/assets/carousel-img4.jpg'
        },
    ];
    
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide= ()=>{
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex -1;
        setCurrentIndex(newIndex);
    };

    const nextSlide= ()=>{
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    };

    return(
        <div className="about-page h-full">
        <img className="element-cover bg-fixed right-0 z-[-1]" src="/assets/cover-2.png"></img>
            <div className="carousel w-full h-80 m-auto relative">
                <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className="w-full h-full bg-center bg-cover duration-500">
                    {/* left arrow */}
                    <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 text-white cursor-pointer">
                        <MdKeyboardDoubleArrowLeft onClick={prevSlide} size={30}/>
                    </div>

                    {/* right arrow */}
                    <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 text-white cursor-pointer">
                        <MdKeyboardDoubleArrowRight onClick={nextSlide} size={30}/>
                    </div>
                </div>
            </div>

            <div className="text-about">
                <p id="about">Welcome to Artisan Connect!</p>
                <span id="about-description">We're a vibrant, community-driven marketplace designed to bridge the gap between local artisans and enthusiasts of handmade, unique products.
            Our platform empowers local creators by providing them with a digital space to showcase and sell their creations, ranging from handmade jewelry and crafts to bespoke furniture and art. 
            By fostering direct connections between artisans and buyers, ArtisanConnect not only supports the growth of local economies but also promotes sustainable consumer practices.</span>
            </div>
        </div>
    );
};
        