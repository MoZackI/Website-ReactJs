"use client"
import { useState } from "react"
import Youtube from "react-youtube"

const VideoPlayer = ({ youtubeId }) => {

    const [isOpen, setIsOpen] = useState (true)

    const handleVideo = () => {
        setIsOpen((prevState) => !prevState)
    }

    const option = {
        width:"300",
        height:"250"       
    }

    const Player = () => {
        return (
            <div className="fixed bottom-2 right-2">
            <button onClick={handleVideo}
            className="text-color-primary float-right bg-color-secondary px-3 mb-1">
                X
            </button>
            <Youtube
            videoId={youtubeId}
            onReady={(event) => event.target.pauseVideo()}
            opts={option}
            />
        </div>
        )
    }
    return isOpen ? <Player /> : <button onClick={handleVideo} className="fixed bottom-5 right-5 w-32 bg-color-primary text-color-dark">TONTON TRAILER</button>
}

export default VideoPlayer