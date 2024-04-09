import React from 'react';
import { useQueriesContext } from '../../utils/QueriesContext';

export default function DeleteBtn({ productId }) {
    const { mutations } = useQueriesContext()

    const handleDeleteClick = async ( event ) => {
        event.stopPropagation()

        await mutations.deleteProduct({variables: { id: productId}})

        window.location.reload()
    }

    return (
        <section className="mt-10 sm:col-span-2 dropup-container submit">
             <button className='redBtn rounded block p-3' onClick={handleDeleteClick}>
                Delete
            </button>
        </section>
    );
}
