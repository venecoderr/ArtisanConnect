import { Link } from 'react-router-dom'
import ProductBtn from '../ProductBtn'
import DeleteBtn from '../delelteBtn'

export default function ProfileProduct({ product }) {
    return (
        <>
        <div key={product.id} className="group relative">
            <Link to={`/product/${product.id}`} className="group">
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
                            <span aria-hidden="true" className="absolute inset-0" />
                            {product.name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
            </Link>
            <div>
                <ProductBtn className='grid-cols-1' product={product}/>
                {/* <DeleteBtn productId={product.id}/> */}
            </div>
        </div>
        </>
    )
}