"use client"

import HeaderMenu from "../komponen/Utilities/HeaderMenu"
import Pagination from "../komponen/Utilities/Pagination"
import { useEffect, useState } from "react"
import Populer from "../komponen/PopulerAnime/Index"


const page = () => {
    const[page, setPage] = useState(1)
    const [rekAnime, setTopAnime] = useState([])

    const fectData = async() => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?page=${page}`)
        const data = await response.json()
        setTopAnime(data)
    }

    useEffect(() => {
        fectData()
    }, [page])

    return (
        <>
        <HeaderMenu title={`Rekomendasi by Admin ${page}`}/>
        <Populer api={rekAnime}/>
        <Pagination page={page} 
        lastPage={rekAnime.pagination?.last_visible_page} setPage={setPage}/>
        
        </>
    )
}

export default page