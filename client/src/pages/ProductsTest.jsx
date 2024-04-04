import React, {useState} from "react";

export default function ProductsTest(){
    return(
        <>
        <div>
        <img className="element-cover bg-fixed right-0 z-[-1]" src="/assets/cover-2.png"></img>
        <div className="pt-14">
        <h2 className="products-title">Artisan  <span className="collection"> Collection</span></h2>
            
            <div class="grid grid-cols-3 gap-4 p-6">
                <div className="product-img">
                    <img src="/assets/carousel-img.jpg"></img>
                </div>
                <div className="product-img">
                    <img src="/assets/carousel-img.jpg"></img>
                </div>
                <div className="product-img">
                    <img src="/assets/carousel-img.jpg"></img>
                </div>
                <div className="col-span-2 product-img">
                    <img src="/assets/carousel-img.jpg"></img>
                </div>
                <div className="product-img">
                    <img src="/assets/carousel-img.jpg"></img>
                </div>
                <div className="product-img">
                    <img src="/assets/carousel-img.jpg"></img>
                </div>
                <div className="col-span-2 product-img">
                    <img src="/assets/carousel-img.jpg"></img>
                </div>
            </div> 
            </div>
        </div>
       
        </>
    )
}