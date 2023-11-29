"use client"

import HeaderMenu from "../komponen/Utilities/HeaderMenu"
import Pagination from "../komponen/Utilities/Pagination"
import { useEffect, useState } from "react"
import Populer from "../komponen/PopulerAnime/Index"
import { getAnimeResponse } from "../../libs/api-libs"


const page = () => {
    const[page, setPage] = useState(1)
    const [topAnime, setTopAnime] = useState([])

    const fectData = async() => {
        const popAnime = await getAnimeResponse("top/anime", `page=${page}`)
        setTopAnime(popAnime)
    }

    useEffect(() => {
        fectData()
    }, [page])

    return (
        <>
        <HeaderMenu title={`ANIME TERPOPULER ${page}`}/>
        <Populer api={topAnime}/>
        <Pagination page={page} 
        lastPage={topAnime.pagination?.last_visible_page} setPage={setPage}/>
        
        </>
    )
}

export default page