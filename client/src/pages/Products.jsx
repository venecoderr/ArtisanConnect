import React from "react";
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../utils/queries';
import { Link } from 'react-router-dom'; // Import Link for navigation

export default function Products() {
  
  //react scroll animations
 

  const { loading, data, error } = useQuery(GET_PRODUCTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  
  return(
    <>
      {/* Products container */}
      <div className="h-100">
      <img className="products-bg element-cover bg-fixed right-0 z-[-1]" src="/assets/cover-2.png"></img>
        <div className="full-container mx-auto max-w-2xl px-4 py-16 sm:px-4 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="products-title">Artisan <span className="collection">Collection</span></h2>
          <div id="products-card" className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {loading ? (
              <div className="h-100">
                <img src={spinner} alt="loading"></img>
              </div>
            ) : (
              data.products.map((product) => (
                <div key={product.id} className="group relative">
                  <Link to={`/product/${product.id}`} className="group">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                      <img
                        src={product.imageURL} // Use imageURL from the product
                        alt={`Image of ${product.name}`} // Use product name for alt text
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
                      <p className="text-sm font-medium text-gray-900">${product.price}</p>
                    </div>
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}