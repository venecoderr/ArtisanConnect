import { useState } from "react"

export default function LogOutBtn() {

    const [ display, setDisplay ] = useState(false)
    return (
    <>
        { display && <p className='text-red-700'>LOGOUT</p> }
    </>
    )   
}