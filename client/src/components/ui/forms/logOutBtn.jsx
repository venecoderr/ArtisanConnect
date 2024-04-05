import { useState } from "react"
import auth from "../../../utils/auth"

export default function LogOutBtn() {

    const [ display, setDisplay ] = useState(auth.loggedIn())
    
    return (
    <>
        { display && <p className='text-red-700'>LOGOUT</p> }
    </>
    )   
}