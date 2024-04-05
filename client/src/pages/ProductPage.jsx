import React from "react";
import { useQuery } from '@apollo/client';
import { GET_PRODUCT } from '../utils/queries';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import {useParams} from "react-router-dom"

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

//still cannot run seed so products wont load just yet

export default function ProductPage() {
    const { id } = useParams(); // 
    const { loading, error, data } = useQuery(GET_PRODUCT, { variables: { id: id } });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>; 

  const product = data.product;

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission or Stripe payment here
  };

  return (
    <div className="w-full h-screen bg-gradient-to-r from-stone-300/70 to-amber-100">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <img src={product.imageURL} />
      <Elements stripe={stripePromise}>
        <form onSubmit={handleFormSubmit}>
          <button type="submit">Submit</button>
        </form>
      </Elements>
    </div>
  );
}
