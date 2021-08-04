import React from 'react'
import Layout from "../../components/Layout/Layout";
import ReactPlayer from 'react-player'
import { useState } from "react"
import AllComments from '../AllComments/AllComments';
export default function ViewPage() {
  const data = [
    "https://soundcloud.com/thekidlaroi/stay",
    "https://soundcloud.com/thekidlaroi/not-sober-feat-polo-g-stunna",
    "https://www.youtube.com/watch?v=RVPeTSUzZ9I",
    "https://soundcloud.com/drokenji/drokenji-since-december-prod-census-cv?in=soundcloud-hustle/sets/the-lookout-tomorrows-rap-hits",
    "https://www.youtube.com/watch?v=Zj35vRgeXLs&t=1s",
  ]
  const playlistItems = data.map((link, index) =>
  <div key={index}> 
      <h3>{index}. {link}</h3>
  </div>
  );
  const [currentVideo, setCurrentVideo] = useState(data[0])
  const [trackIndex, setTrackIndex] = useState(0);
  const toPrevTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(data.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
    fetchVideo()
  }
  const toNextTrack = () => {
    if (trackIndex < data.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
    fetchVideo()
  }
  const fetchVideo = () => {
    setCurrentVideo(data[trackIndex])
  }
  const handleWatchComplete = ({ played }) => {
    // console.log(played)
    if (played >= 0.95) {
      console.log("Done!")
      toNextTrack()
    } 
  }
    return (
        <Layout>
          <h1>PLAYLIST NAME</h1>
          {/* <img src="https://wallpaperaccess.com/full/39608.jpg" width='500px' height="500px" /> */}
        <h3>SHAHROZE</h3>
            <ReactPlayer
              className='react-player'
              controls={true}
              playing url={currentVideo}
              onProgress={handleWatchComplete}
              width='100%'
              height='50vh'
        />
        <button onClick={toPrevTrack}>PREV</button>
        <button onClick={toNextTrack}>NEXT</button>
          <div>
          <h3>Playlist Items</h3>
          <div>{playlistItems}</div>
          <AllComments />
          </div>
        </Layout>
  )
}
// for the yellow warning for dev tools: https://stackoverflow.com/questions/61339968/devtools-failed-to-load-sourcemap-could-not-load-content-for-chrome-extension
// REACTPLAYER can take in an array of youtube videos but cannot take in an array of soundcloud songs