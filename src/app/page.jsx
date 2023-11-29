`'use client'`


import Header from "./komponen/PopulerAnime/header"
import Populer from "./komponen/PopulerAnime/Index"
import { getAnimeRecResponse, getAnimeResponse, reproduce } from "../libs/api-libs"




const page = async () => {
    const topAnime = await getAnimeResponse ("top/anime", "limit=18")
    let recomendedAnime = await getAnimeRecResponse ("recommendations/anime", "entry")
    recomendedAnime = reproduce (recomendedAnime, 18)

    return (
        <>
            {/**Anime Populer */}
            <section>
                <Header Title="Paling Populer" LinkTitle="Lihat Semua" LinkHref="/populer" />
                <Populer api={topAnime} />
            </section>
            {/**Anime Rekomendasi */}
            <section>
                <Header Title="Rekomendasi"/>
                <Populer api={recomendedAnime} />
            </section>
        </>
    )
        
}

export default page
