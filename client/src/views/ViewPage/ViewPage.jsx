import React from 'react'
import Layout from "../../components/Layout/Layout";
import ReactPlayer from 'react-player'
import { useState } from "react";

export default function ViewPage() {
  // create variable that carries array of links for a playlist
  const data = {}
  // feed variable at index 0 into useState for currentVideo
  // at the end of the video/music it will trigger playNext which will assign the setCurrentVideo to the next media in the playlist

    const [currentVideo, setCurrentVideo] = useState("https://soundcloud.com/fearloathing/lofi-house-mix-1988-the-stoner-house-edition");
    const playNext = () => {
      // videoData.shift()
      // if (videoData.length > 0) {
      //   updateCurrentVideoId(videoData[0].id.videoId)
      // }
      setCurrentVideo("https://www.youtube.com/watch?v=BHACKCNDMW8")
    }

    return (
        <Layout>
          <h1></h1>
        <ReactPlayer
            className='react-player'
            controls={true}
            url = {currentVideo}
            onEnded={playNext}
            width='100%'
            height='50vh'
          />
          <div>
            Playlist
          </div>
        </Layout>
  )
}
