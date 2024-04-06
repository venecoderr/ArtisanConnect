import React, { useState } from "react";
import { useQuery, useMutation } from '@apollo/client';
import { GET_PRODUCT } from '../utils/queries';
import { ADD_TO_CART } from "../utils/mutations";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

export default function ProductPage() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PRODUCT, { variables: { id: id } });
  const [quantity, setQuantity] = useState(1);
  const [addToCart] = useMutation(ADD_TO_CART);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const product = data.product;

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (quantity > 0) {
      try {
        await addToCart({ variables: { productId: product.id, quantity: quantity } });
        const stripe = await stripePromise;
        const response = await stripe.redirectToCheckout({
          lineItems: [{ price: product.priceId, quantity: quantity }],
          mode: 'payment',
          successUrl: `${window.location.origin}/profile`,
          cancelUrl: `${window.location.origin}/profile`,
        });
        if (response.error) {
          console.error(response.error.message);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="w-full h-screen bg-gradient-to-r from-stone-300/70 to-amber-100">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <img src={product.imageURL} alt={product.name} />
      <p>Sold by: <Link to={`/profile/public/${product.artisan.id}`} className="group">{product.artisan.username}</Link></p>
      <Elements stripe={stripePromise}>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="quantity">QTY: </label>
          <button type="button" onClick={handleDecrement}>-</button>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            min="1"
          />
          <button type="button" onClick={handleIncrement}>+</button>
          <button type="submit">Checkout</button>
        </form>
      </Elements>
    </div>
  );
}
