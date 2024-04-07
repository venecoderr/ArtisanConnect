import React, { useState }from "react";
import { Link } from "react-router-dom";
import { GET_USER_PRODUCTS } from "../utils/queries";
import { useQuery } from "@apollo/client";
import {useParams} from "react-router-dom"
import Home from './Home' 

export default function PublicProfile() {
  const { id } = useParams();
  const { loading, data, error } = useQuery(GET_USER_PRODUCTS, {
    variables: { id: id }
  })

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const userProducts = data.userProducts;

  if (userProducts.length === 0) {
    return <Home />;
  }

  return (
    <>
      <div className="h-screen">
        <div className="w-full h-100 bg-gradient-to-r from-stone-300/70 to-amber-100">
        <img className="cover-dashboard object-cover" src="/assets/dashboard-cover.jpg"></img>
          <div className="dashboard-layout mx-auto max-w-2xl p-4 justify-center">
            {/* <p className="username">{userProducts[0].artisan.username}'s products</p> */}
            <p className="user-description">Thanks for supporting our Community!</p>
            <p className="user-products">Your Products</p>
            <div id="products-card" className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {userProducts.map((product) => (
                <Link to={`/product/${product.id}`} className="group" key={product.id}>
                  <div className="group relative">
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
                          {product.name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                      </div>
                      <p className="text-sm font-medium text-gray-900">{product.price}</p>
                    </div>
                  </div>
                </Link>        
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
    );
  }