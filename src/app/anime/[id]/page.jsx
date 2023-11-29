import VideoPlayer from "@/app/komponen/Utilities/VideoPlayer"
import { getAnimeResponse } from "@/libs/api-libs"
import Image from "next/image"

const Page = async({params :{id}}) =>{
    const anime = await getAnimeResponse(`anime/${id}`)
    return (
        <>
        <div className="pt-4 px-4">
        <h1 className="text-2xl font-bold text-color-primary">{anime.data.title}</h1>
        </div>
        <div className="pt-4 px-4 flex gap-2 text-color-primary overflow-x-auto">
        <div className="w-36 flex flex-col justify-center items-center rounded border 
            border-color-primary p-2">
            <h3>STATUS</h3>
            <p>{anime.data.status}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center rounded border 
            border-color-primary p-2">
            <h3>TAHUN RILIS</h3>
            <p>{anime.data.year}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center rounded border 
            border-color-primary p-2">
            <h3>PERINGKAT</h3>
            <p>{anime.data.rank}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center rounded border 
            border-color-primary p-2">
            <h3>SKOR</h3>
            <p>{anime.data.score}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center rounded border 
            border-color-primary p-2">
            <h3>EPISODE</h3>
            <p>{anime.data.episodes}</p>
            </div>
        </div>
            
        <div className="flex sm:flex-nowrap flex-wrap pt-4 px-4 gap-2 text-color-primary">
            <div className="table border-color-primary pt-4 px-4 gap-2 w-full">
            <Image 
            src={anime.data.images.webp.image_url}
            alt={anime.data.images.jpg.image_url}
            width={350}
            height={350}
            className="w-full rounded object-cover"
            />
            </div>
            <p className="text-justify text-l">{anime.data.synopsis}</p>
        </div>
        <div>
            <VideoPlayer youtubeId={anime.data.trailer.youtube_id}/>
        </div>
        </>
    )
}

export default Page