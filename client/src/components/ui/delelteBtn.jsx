import { useQueriesContext } from "../../utils/QueriesContext"

export default function DeleteBtn({productId}) {
    const { mutations } = useQueriesContext()
    return (
    <>
        <div className="mt-10 sm:col-span-2 submit">
            <button
                type="submit"
                className="block rounded p-3.5 justify-center text-sm text-grey-900 font-semibold shadow-sm"
                onClick={mutations.deleteProduct()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </button>
        </div>  
    </>
    )   
}


