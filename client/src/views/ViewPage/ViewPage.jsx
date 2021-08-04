import React from 'react'
import Layout from "../../components/Layout/Layout";
import ReactPlayer from 'react-player'
import { useState } from "react";
export default function ViewPage() {
  // create variable that carries array of links for a playlist
  // feed variable at index 0 into useState for currentVideo
  // at the end of the video/music it will trigger playNext which will assign the setCurrentVideo to the next media in the playlist
    // const [currentVideo, setCurrentVideo] = useState("https://soundcloud.com/fearloathing/lofi-house-mix-1988-the-stoner-house-edition");
    // const playNext = () => {
    //   // videoData.shift()
    //   // if (videoData.length > 0) {
    //   //   updateCurrentVideoId(videoData[0].id.videoId)
    //   // }
    //   setCurrentVideo("https://www.youtube.com/watch?v=BHACKCNDMW8")
    // }
  // this is working with the data array
  let data = [
    {url: "https://soundcloud.com/thundercat-official/dragonball-durag"},
    {url: "https://soundcloud.com/thundercat-official/funny-thing"},
    {url: "https://www.youtube.com/watch?v=jBuKNkVFaMU"},
    {url: "https://soundcloud.com/brainfeeder/thundercat-them-changes"}
  ]
    const [videoIndex, setVideoIndex] = useState(0)
    const [currentVideo, setCurrentVideo] = useState("");
    const playNext = () => {
      const nextIndex = videoIndex + 1
      if (nextIndex >= data.length) {
        currentVideo(data[0])
        setVideoIndex(0)
      } else {
        setCurrentVideo(data[nextIndex])
        setVideoIndex(nextIndex)
      }
    }
  
    const handleClick = (item, index) => {
      setCurrentVideo(item.videoname)
      setVideoIndex(index)
    }
    return (
        <Layout>
          <h1></h1>
        <ReactPlayer
            className='react-player'
            controls={true}
            url={currentVideo}
            onEnded={playNext}
            width='100%'
            height='50vh'
        />
          <div>
          Playlist
          <button onClick={handleClick}>Next</button>
          </div>
        </Layout>
  )
}
// for the yellow warning for dev tools: https://stackoverflow.com/questions/61339968/devtools-failed-to-load-sourcemap-could-not-load-content-for-chrome-extension