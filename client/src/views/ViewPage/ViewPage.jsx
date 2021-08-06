import React from 'react'
import Layout from "../../components/Layout/Layout";
import ReactPlayer from 'react-player'
import { useState, useEffect } from "react"
import NewComment from '../FormComment/NewComment';
import { getPlaylist } from '../../services/playlists';
import { useParams } from 'react-router';

export default function ViewPage(props) {
  const [playlist, setPlaylist] = useState({})
  const { id } = useParams()
  // const data = [
  //   "https://soundcloud.com/thekidlaroi/stay",
  //   "https://soundcloud.com/thekidlaroi/not-sober-feat-polo-g-stunna",
  //   "https://www.youtube.com/watch?v=RVPeTSUzZ9I",
  //   "https://soundcloud.com/drokenji/drokenji-since-december-prod-census-cv?in=soundcloud-hustle/sets/the-lookout-tomorrows-rap-hits",
  //   "https://www.youtube.com/watch?v=Zj35vRgeXLs&t=1s",
  // ]

  useEffect(() => {
    fetchPlaylist()
    setCurrentVideo(allURLs)
  }, [])
  
  const allURLs = playlist?.links?.map((link) => {
    return link.linkURL
  })
  const fetchPlaylist = async () => {
    const res = await getPlaylist(id)
    console.log(id)
    console.log(res)
    if (res) {
      setPlaylist(res)
    }
  }
  // const data = [playlist?.links[0]?.linkURL]
  console.log("THIESE IS LINKS", playlist)

  // const playlistItems = playlist?.links?.map((link, index) =>
  //   <div key={index}>
  //     <h3>{index}. {link.linkURL}</h3>
  //   </div>
  // );
  
  const [currentVideo, setCurrentVideo] = useState([])
  console.log("THIS IS CURRENT VIDEO",currentVideo)
  const [trackIndex, setTrackIndex] = useState(0);
  const toPrevTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(playlist.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
    fetchVideo()
  }
  const toNextTrack = () => {
    if (trackIndex < playlist.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
    fetchVideo()
  }
  const fetchVideo = () => {
    setCurrentVideo(playlist[trackIndex])
  }
  const handleWatchComplete = ({ played }) => {
    // console.log(played)
    if (played >= 0.99) {
      console.log("Done!")
      toNextTrack()
    }
  }
    return (
      <Layout user={props.user} setUser={props.setUser}>
        <h1>PLAYLIST NAME</h1>
        <h3>{playlist?.title}</h3>
        <ReactPlayer
          className='react-player'
          controls={true}
          playing url={allURLs}
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
            <p>{link.linkURL}</p>
          )
          
        })}
          <NewComment user={props.user} setUser={props.setUser} />
        </div>
      </Layout>
    )
  }
// for the yellow warning for dev tools: https://stackoverflow.com/questions/61339968/devtools-failed-to-load-sourcemap-could-not-load-content-for-chrome-extension
// // REACTPLAYER can take in an array of youtube videos but cannot take in an array of soundcloud songs