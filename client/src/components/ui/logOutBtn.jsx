import { useState } from "react"
import auth from "../../utils/auth"

export default function LogOutBtn() {

    const [ display, setDisplay ] = useState(auth.loggedIn())

    return (
    <>
        { display && <section className="mt-10 sm:col-span-2 submit">
                        <button
                            type="submit"
                            className="block rounded p-3.5 justify-center text-sm text-grey-900 font-semibold shadow-sm"
                            onClick={auth.logout}>LogOut</button>
                    </section> }
    </>
    )   
}