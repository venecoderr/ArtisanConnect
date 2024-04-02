import { useState } from "react";
import SignUpForm from "./ui/signUpForm";
import LogInFrom from './ui/logInForm';
import { useFormContext } from "../utils/FormContext";

export default function Form() {
    const [formType, setFormType] = useState('signup')
    const { addUser, updateUser, deleteUser, addProduct, updateProduct, deleteProduct, validateEmail, classNames } = useFormContext();

    return (
        <>
            {formType === 'signup' && <SignUpForm addUser={addUser} validateEmail={validateEmail} classNames={classNames}/>}
            {formType === 'login' && <LogInFrom validateEmail={validateEmail} classNames={classNames}/>}
        </>
    );
}
