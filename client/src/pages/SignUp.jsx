import React from "react";
import Form from '../components/form.jsx'


export default function SignUp(){
    return(
        <div className="w-full p-10 pt-20">
            <img className="element-cover bg-fixed right-0 z-[-1]" src="/assets/cover-2.png"></img>
            <Form formType={'signup'}/>
        </div>
    )
}