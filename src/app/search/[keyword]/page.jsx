`use client`

import AnimeList from "@/app/komponen/PopulerAnime/Index"
import Header from "@/app/komponen/PopulerAnime/header"
import { getAnimeResponse } from "@/libs/api-libs"

const page = async ({params}) => {

const {keyword} = params
const decodeKeyword = decodeURI(keyword)
const searchAnime = await getAnimeResponse("anime", `q=${decodeKeyword}`)

return (
<>
  {/**Anime Populer */}
    <section>
    <Header Title={`Pencarian Untuk ${decodeKeyword}...`}/>
    <AnimeList api={searchAnime}/>
    </section>
</>
)
}

export default page
