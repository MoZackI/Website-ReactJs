import Link from "next/link"
import InputSearch from "./InputSearch"

const Navbar = () => {
    return (
        <header className="bg-red-700">
            <div className="flex md:flex-row justify-between flex-col p-2 gap-2">
                <Link href="/" className="font-bold text-white text-2xl mt-2">WeeBoyList</Link> 
                <Link href="/"/>
                <div className="flex md:flex-row mt-1 flex-col">
                <InputSearch/>
                </div>
            </div>
        </header>
    )
}

export default Navbar