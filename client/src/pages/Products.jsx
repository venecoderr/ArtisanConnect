import React from "react";

//let him know that signUpForm throws up an error
const products = [
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
  ]

export default function Products(){
    return(
        <>
            <div className="img-container">
                <img className="img-products" src="/assets/products-cover.jpg"></img>
            </div>

            {/* Products container */}
            
        </>
    )
}