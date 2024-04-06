import React from "react";
import auth from '../utils/auth'
import { GET_USER_PRODUCTS } from "../utils/queries";
import { useQuery } from "@apollo/client";
import ProfileProduct from "../components/ui/forms/profileProductCard";
import ProductBtn from '../components/ui/ProductBtn'
import LogOutBtn from "../components/ui/logOutBtn";
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

  return (
      <div className="h-screen">
        <div className="w-full h-100 bg-gradient-to-r from-stone-300/70 to-amber-100">
          <img className="cover-dashboard object-cover" src="/assets/dashboard-cover.jpg"></img>
          <div className="dashboard-layout mx-auto max-w-2xl p-4 justify-center">
            <p className="username">Hi, {user.username}</p>
            <p className="user-description">Thanks for supporting our Community!</p>
            <p className="user-products">Your Products</p>
            <div id="products-card" className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {userProducts.map((product) => (
                <ProfileProduct key={product.id} product={product}/>
              ))}
            </div>
          </div>
          <div>
            <LogOutBtn/>
            <ProductBtn/>
          </div>
        </div>
      </div>
    );
  }