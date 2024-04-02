import { useState } from "react";
import SignUpForm from "./ui/signUpForm";
import LogInFrom from './ui/logInForm';

export default function Form() {
    const [formType, setFormType] = useState('signup')

    return (
        <>
            {formType === 'signup' && <SignUpForm />}
            {formType === 'login' && <LogInFrom />}
        </>
    );
}
