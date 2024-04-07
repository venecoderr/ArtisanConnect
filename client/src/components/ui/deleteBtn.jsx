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
        <div className="dropup-container">
            <button key={productId} onClick={handleDeleteClick} className="dropup-btn">
                Delete
            </button>
        </div>
    );
}
