import React from 'react'
import Layout from "../../components/Layout/Layout";
import ReactPlayer from 'react-player'
import { useState, useEffect } from "react"
import NewComment from '../FormComment/NewComment';
import { getPlaylist } from '../../services/playlists';
import { useParams } from 'react-router';

export default function ViewPage(props) {
  const [playlist, setPlaylist] = useState({})
  const [loading, setLoading] = useState(false);
  const [links, setLinks] = useState([])
  const { id } = useParams()
  const data = [
    "https://soundcloud.com/thekidlaroi/stay",
    "https://soundcloud.com/thekidlaroi/not-sober-feat-polo-g-stunna",
    "https://www.youtube.com/watch?v=RVPeTSUzZ9I",
    "https://soundcloud.com/drokenji/drokenji-since-december-prod-census-cv?in=soundcloud-hustle/sets/the-lookout-tomorrows-rap-hits",
    "https://www.youtube.com/watch?v=Zj35vRgeXLs&t=1s",
  ]
  const data2 = playlist.videoURLs

  useEffect(() => {
    fetchPlaylist()
  }, [])

  useEffect(() => {
    setCurrentVideo(newArray[0]); // This is be executed when `loading` state changes
}, [loading])


  async function fetchPlaylist () {
    let res = await getPlaylist(id)
    // console.log(id)
    // console.log(res)
    if (res) {
      setPlaylist(res)
      setLoading(true);
    }
  }

  let newArray = []
  const allURLs = playlist?.links?.map((link) => {
    // return link.linkURL
    newArray.push(link.linkURL)
  }) 

  const [trackIndex, setTrackIndex] = useState(0);
  const [currentVideo, setCurrentVideo] = useState([])
  const toPrevTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(newArray.length - 1);
    } else {
      setTrackIndex(0);
    }
    fetchVideo()
  }
  const toNextTrack = () => {
    if (trackIndex < newArray.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
    fetchVideo()
  }
  const fetchVideo = () => {
      setCurrentVideo(newArray[trackIndex])
      console.log(newArray[trackIndex])
      console.log(trackIndex)
  }
  const handleWatchComplete = ({ played }) => {
    // console.log(played)
    if (played >= 0.98) {
      console.log("Done!")
      toNextTrack()
    } 
  }


    return (
        <Layout user={props.user} setUser={props.setUser}>
          {/* <h1>PLAYLIST NAME</h1> */}
          <h1>{playlist?.title}</h1>
          <h3>{playlist.userId?.username}</h3>
          <p>{playlist?.description}</p>
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
          {playlist?.links?.map((link) => {
          return (
            <p>{link.title}---{link.artist}---{link.linkURL}</p>
          )})}
          <br />
          {/* <NewComment user={props.user} setUser={props.setUser}/> */}
          </div>
        </Layout>
  )
}
// for the yellow warning for dev tools: https://stackoverflow.com/questions/61339968/devtools-failed-to-load-sourcemap-could-not-load-content-for-chrome-extension
// REACTPLAYER can take in an array of youtube videos but cannot take in an array of soundcloud songs