"use client"

import { FileSearch } from "@phosphor-icons/react"

const page  = () => {
    return(
        <div className="min-h-screen max-w-xl1 mx-auto flex justify-center items-center">
            <div className="flex justify-center items-center">
                <FileSearch size={44} className="text-red-700"/>
                <h2 className="text-red-700 text-2xl font-bold">NOT FOUND</h2>
            </div>
        </div>
    )
}

export default page