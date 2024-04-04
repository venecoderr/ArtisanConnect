import React from "react";
import SignUpForm from "../components/ui/forms/signUpForm";

const user = [
    {
    id: 1,
    username: "Username",
    role: "Seller",
    imageSrc: '/assets/user.png',
    imageAlt: "Generic Profile Picture",
    },
]

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

export default function Profile() {
    return (
        <div className="h-screen">
          <div className="w-full h-100 bg-gradient-to-r from-stone-300/70 to-amber-100">
            <img className="cover-dashboard object-cover" src="/assets/dashboard-cover.jpg"></img>
            <div className="dashboard-layout mx-auto max-w-2xl p-4 justify-center">
                <p className="username">{user[0].username}</p>
                {/* <img src={user[0].imageSrc} alt={user[0].imageAlt} className="user-picture w-auto"/> */}
                
                <p className="user-description">Thanks for supporting our Community!</p>
                <p className="user-products pt-5">Your Products</p>
    <div id="products-card" className="mt-6 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="product-img h-80 w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    
      </div>
    );
  }