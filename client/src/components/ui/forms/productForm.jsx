import { useState } from "react";
import RequiredField from "./requiredField.jsx";
import { useQueriesContext } from "../../../utils/QueriesContext.jsx";

export default function ProductForm({ product = null }) {
    const { mutations, classNames } = useQueriesContext();

    const [form, setForm] = useState({
        name: product ? product.name : '',
        description: product ? product.description : '',
        price: product ? product.price : '',
        maker: product ? product.maker : '',
        productPictureUrl: product ? product.productPictureUrl : '',
    });

    const [showRequired, setShowRequired] = useState({
        name: false,
        description: false,
        price: false,
        maker: false,
    });
    
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
        setShowRequired({
            ...showRequired,
            [name]: !value
        });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (!form.name) {
            setErrorMessage('Name is required');
            return;
        } else if (!form.description) {
            setErrorMessage('Description is required');
            return;
        } else if (!form.price) {
            setErrorMessage('Price is required');
            return;
        } else if (!form.maker) {
            setErrorMessage('Maker is required');
            return;
        }

        try {
            if (product) {
                // If product is provided, update the existing product
                await mutations.updateProduct({
                    variables: {
                        id: product.id,
                        name: form.name,
                        description: form.description,
                        price: form.price,
                        maker: form.maker,
                        productPictureUrl: form.productPictureUrl,
                    }
                });
            } else {
                // If no product provided, create a new product
                await mutations.addProduct({
                    variables: {
                        name: form.name,
                        description: form.description,
                        price: form.price,
                        artisan: form.maker,
                        productPictureUrl: form.productPictureUrl,
                    }
                });
            }

            // Reset form state
            setForm({
                name: '',
                description: '',
                price: '',
                maker: '',
                productPictureUrl: '',
            });
            setShowRequired({
                name: false,
                description: false,
                price: false,
                maker: false,
            });
            setErrorMessage('');

        } catch (error) {
            console.error('Error occurred during form submission:', error);
            setErrorMessage('An error occurred while processing your request');
        }
    };

    return (
        <>
            <form className="form" onSubmit={handleFormSubmit}>
                <section className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <section>
                        <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                            Name
                        </label>
                        <section className="mt-2.5">
                            <input
                                value={form.name}
                                type="text"
                                name="name"
                                id="name"
                                onMouseLeave={() => setShowRequired({ ...showRequired, name: !form.name })}
                                onChange={handleInputChange}
                                className={classNames(showRequired.name && !form.name && 'border-2 border-red-700', "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-700 sm:text-sm sm:leading-6")}
                            />
                            {showRequired.name && !form.name && <RequiredField />}
                        </section>
                    </section>
                    <section>
                        <label htmlFor="description" className="block text-sm font-semibold leading-6 text-gray-900">
                            Description
                        </label>
                        <section className="mt-2.5">
                            <input
                                value={form.description}
                                type="text"
                                name="description"
                                id="description"
                                onMouseLeave={() => setShowRequired({ ...showRequired, description: !form.description })}
                                onChange={handleInputChange}
                                className={classNames(showRequired.description && !form.description && 'border-2 border-red-700', "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-700 sm:text-sm sm:leading-6")}
                            />
                            {showRequired.description && !form.description && <RequiredField />}
                        </section>
                    </section>
                    <section>
                        <label htmlFor="price" className="block text-sm font-semibold leading-6 text-gray-900">
                            Price
                        </label>
                        <section className="mt-2.5">
                            <input
                                value={form.price}
                                type="number"
                                name="price"
                                id="price"
                                onMouseLeave={() => setShowRequired({ ...showRequired, price: !form.price })}
                                onChange={handleInputChange}
                                className={classNames(showRequired.price && !form.price && 'border-2 border-red-700', "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-700 sm:text-sm sm:leading-6")}
                            />
                            {showRequired.price && !form.price && <RequiredField />}
                        </section>
                    </section>
                    <section>
                        <label htmlFor="maker" className="block text-sm font-semibold leading-6 text-gray-900">
                            Maker
                        </label>
                        <section className="mt-2.5">
                            <input
                                value={form.maker}
                                type="text"
                                name="maker"
                                id="maker"
                                onMouseLeave={() => setShowRequired({ ...showRequired, maker: !form.maker })}
                                onChange={handleInputChange}
                                className={classNames(showRequired.maker && !form.maker && 'border-2 border-red-700', "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-700 sm:text-sm sm:leading-6")}
                            />
                            {showRequired.maker && !form.maker && <RequiredField />}
                        </section>
                    </section>
                
                    <section className="mt-10 sm:col-span-2">
                        <button
                            type="submit"
                            className="block p-3.5 text-center text-sm text-grey-900 font-semibold shadow-sm"
                        >{product ? 'Update Product' : 'Add Product'}</button>
                    </section>
                </section>
            </form>
            {errorMessage && (
                <section className="m-3">
                    <p className="error-text">{errorMessage}</p>
                </section>
            )}
        </>
    )
}
