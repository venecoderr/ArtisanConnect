import React from 'react';
import { useQueriesContext } from '../../utils/QueriesContext';

export default function DeleteBtn({ productId }) {
    const { mutations } = useQueriesContext()

    const handleDeleteClick = (event , id) => {
        event.stopPropagation()

        mutations.deleteProduct(productId)
    }

    return (
        <section className="mt-10 sm:col-span-2 submit">
             <button className='rounded block' onClick={handleDeleteClick}>
                Delete
            </button>
        </section>
    );
}
