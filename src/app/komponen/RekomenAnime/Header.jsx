import Link from "next/link"

const Header2 = ({Title, LinkHref, LinkTitle}) => {
    return (
    <div className="flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-color-primary">{Title}</h1>
        {LinkHref && LinkTitle ?
        <Link href={LinkHref} className="md:text-xl text-color-primary text-sm underline hover:text-red-700 transition-all">
        {LinkTitle}
        </Link>
        :null
        }
        
    </div>
    )
}

export default Header2