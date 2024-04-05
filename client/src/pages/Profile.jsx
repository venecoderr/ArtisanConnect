import React, { useState,  }from "react";
import auth from '../utils/auth'
import { GET_USER_PRODUCTS } from "../utils/queries";
import { useQuery } from "@apollo/client";
import LogOutBtn from "../components/ui/forms/logOutBtn";
import LogIn from "./LogIn";

export default function Profile() {
  const user = auth.getProfile();
  if (!user) {
    return <LogIn />; // Redirect to login page if user is not logged in
  }

  const { loading, data, error } = useQuery(GET_USER_PRODUCTS, {
    variables: { id: user.id }
  })

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const userProducts = data.userProducts;

  console.log(userProducts); // Check the structure of userProducts

  return (
      <div className="h-screen">
        <div className="w-full h-100 bg-gradient-to-r from-stone-300/70 to-amber-100">
        <img className="cover-dashboard object-cover" src="/assets/dashboard-cover.jpg"></img>
          <div className="dashboard-layout mx-auto max-w-2xl p-4 justify-center">
            <p className="username">Hi, {user.username}</p>
            <p className="user-description">Thanks for supporting our Community!</p>
            {/* <img src='https://placehold.co/400' alt='profile picture' className="user-picture"/> */}
            <p className="user-products">Your Products</p>
            <div id="products-card" className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {userProducts.map((product) => (
                <div key={product.id} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      src={product.imageURL}
                      alt={product.name}
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
                      <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <LogOutBtn/>
      </div>
    );
  }