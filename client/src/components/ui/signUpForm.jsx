import { useState } from "react";
import { classNames, validateEmail } from "../utils/utils";
import RequiredField from "../components/UI/requiredField";

export default function Form(){
    //States
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState({address: '', valid: true})
    const [message, setMessage] = useState('')
    const [form, setForm] = useState({
      sender: '',
      email: '',
      message: '',
      sentOn: ''
    })
    const [showRequired, setShowRequired] = useState({
        firstName: false,
        lastName: false,
        email: false,
        message: false
    })
    const [errorMessage, setErrorMessage] = useState('')

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
        
        // Based on the input type, we set the state of either email, username, and password
        if (inputType === 'first-name') {
          setFirstName(inputValue);
        } else if (inputType === 'last-name') {
          setLastName(inputValue);
        } else if (inputType === 'email') {
          const validEmail = validateEmail(inputValue)
          setEmail({ address: inputValue, valid: validEmail});
          console.log(email)
        } else {
          setMessage(inputValue);
        }
    };
    
    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
    
        // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
        if (!validateEmail(email)) {
          setErrorMessage('Invalid e-mail');
          return;
        }else if(!firstName || !lastName){
          setErrorMessage('Missing name');
          return;
        }else if(!message){
          setErrorMessage('Missing message');
          return;
        }
    
        setForm({
          sender: `${firstName} ${lastName}`,
          email: email,
          message: message
        })
    
        console.log(form)
    
        setFirstName('');
        setLastName('');
        setEmail({address: '', valid: true});
        setMessage('');
    };

   return (
    <>
        <form className="form" onSubmit={handleFormSubmit}>
            <section className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <section>
                    <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                    First name
                    </label>
                    <section className="mt-2.5">
                    <input
                    value={firstName}
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    onBlur={() => { 
                        !firstName ? setShowRequired({...showRequired, firstName: true}) : setShowRequired({...showRequired, firstName: false})
                        }}
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-700 sm:text-sm sm:leading-6"
                    />
                    {showRequired.firstName && <RequiredField/>}
                </section>
                </section>
                <section>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                    Last name
                </label>
                <section className="mt-2.5">
                    <input
                    value={lastName}
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    onBlur={() => { 
                        !lastName ? setShowRequired({...showRequired, lastName: true}) : setShowRequired({...showRequired, lastName: false})
                    }}
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-700 sm:text-sm sm:leading-6"
                    />
                    {showRequired.lastName && <RequiredField/>}
                </section>
                </section>
                <section className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                    Email
                </label>
                <section className="mt-2.5">
                    <input
                    value={email.address}
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    onBlur={() => { 
                        !email.address ? setShowRequired({...showRequired, email: true}) : setShowRequired({...showRequired, email: false})
                    }}
                    onChange={handleInputChange}
                    className={classNames(!email.valid ? 'border-2 border-red-700' : '', "block w-full rounded-md px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-700 sm:text-sm sm:leading-6")}
                    />
                    {!email.valid && (<p className='text-red-700'>Invalid e-mail</p>)}
                    {showRequired.email && <RequiredField/>}
                </section>

                </section>
                <section className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                    Message
                </label>
                <section className="mt-2.5">
                    <textarea
                    name="message"
                    id="message"
                    rows={4}
                    onBlur={() => { 
                        !message ? setShowRequired({...showRequired, message: true}) : setShowRequired({...showRequired, message: false})
                    }}
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-700 sm:text-sm sm:leading-6"
                    defaultValue={''}
                    />
                    {showRequired.message && <RequiredField/>}
                </section>
                </section>
                <section className="mt-10 sm:col-span-2">
                <button
                    type="submit"
                    className="block w-full rounded-md accent-bg px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:main-bg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
                >
                    Let's talk
                </button>
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