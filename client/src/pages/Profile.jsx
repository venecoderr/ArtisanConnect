import React from "react";
import auth from '../utils/auth'
import { GET_USER_PRODUCTS } from "../utils/queries";
import { useQuery } from "@apollo/client";

export default function Profile() {
    const user = auth.getProfile()
    const { loading, data, error } = useQuery(GET_USER_PRODUCTS, {
      variables: { id: user.id }
    })
    const products = data.userProducts
    return (
    <>
    <img className="element-cover right-0" src="/assets/cover-2.png"></img>
    <div className="w-full h-screen bg-gradient-to-r from-stone-300/70 to-amber-100">
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-4 sm:py-24 lg:max-w-7xl lg:px-8">
    <p className="username">Hi, {user.username}</p>
    <img src='https://placehold.co/400' alt='profile picture' className="user-picture"/>

    <p className="user-products">Your Products</p>
    <div id="products-card" className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
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
    
      </>
    );
  }