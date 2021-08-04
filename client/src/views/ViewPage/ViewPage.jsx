import React from 'react'
import Layout from "../../components/Layout/Layout";
import ReactPlayer from 'react-player'
import { useState, useEffect } from "react";

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
    "https://soundcloud.com/thundercat-official/dragonball-durag",
    "https://soundcloud.com/thundercat-official/funny-thing",
    "https://www.youtube.com/watch?v=jBuKNkVFaMU",
    "https://soundcloud.com/brainfeeder/thundercat-them-changes"
  ]
    // const [currentVideo, setCurrentVideo] = useState(data[0]);
    // const playNext = () => {
    //   data.shift()
    //   if (data.length > 0) {
    //   setCurrentVideo(data[0])
    //   }
    // }

    const [toggle, setToggle] = useState(false)
  
    useEffect(() => {
      playNext()
    }, [toggle])
  
  let index = 0
  const [currentVideo, setCurrentVideo] = useState(data[index]);
  const playNext = () => {
    if (data.length > 0) {
      index++;
      console.log(index)
      setCurrentVideo(data[index])
    }
  }

  const playPrevious = () => {
    if (data.length > 0) {
      index++;
      console.log(index)
      setCurrentVideo(data[index])
    }
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
          <button onClick={playNext}>Next</button>
          <button onClick={playPrevious}>Previous</button>
          </div>
        </Layout>
  )
}

// for the yellow warning for dev tools: https://stackoverflow.com/questions/61339968/devtools-failed-to-load-sourcemap-could-not-load-content-for-chrome-extension