import { useState } from "react";
import SignUpForm from "./ui/forms/signUpForm";
import LogInForm from './ui/forms/logInForm';
import ProductForm from "./ui/forms/productForm";

export default function Form({formType}) {
    return (
        <>
            <section className="container h-screen">
                {formType === 'signup' && <SignUpForm />}
                {formType === 'login' && <LogInForm />}
                {formType === 'product' && <ProductForm />}
            </section>
        </>
    );
}
