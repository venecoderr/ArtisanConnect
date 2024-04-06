import React from 'react';
import { useQueriesContext } from '../../utils/QueriesContext';

export default function DeleteBtn({ productId }) {
    const { mutations } = useQueriesContext()

    const handleDeleteClick = (event , id) => {
        event.stopPropagation()

        mutations.deleteProduct(productId)
    }

    return (
        <button onClick={handleDeleteClick}>
            Delete
        </button>
    );
}
