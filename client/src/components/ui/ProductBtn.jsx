import React, { useState } from 'react';
import Form from '../form';

export default function ProductBtn({ product }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropup-container">
      <button onClick={toggleDropdown}>
        {product ? 'Edit' : 'Add new product'}
      </button>
      {isOpen && (
        <div className="dropup-content p-4">
            <Form formType='product' product={product}/>
        </div>
      )}
    </div>
  );
}
