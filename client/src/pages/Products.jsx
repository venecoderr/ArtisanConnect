import React from "react";

//let him know that signUpForm throws up an error
// Make a configuration to add all products here and iterate them in map.
// Add button to add it to the Cart
// Bear in mind Stripe configuration
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
        <div className="w-full h-full">
            {/* Products container */}
            <img className="element-cover right-0" src="/assets/cover-2.png"></img>
            <div className="w-full h-full bg-gradient-to-r from-stone-300/70 to-amber-100">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-4 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="products-title">Artisan  <span className="collection"> Collection</span></h2>

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
        </div>
    )
}