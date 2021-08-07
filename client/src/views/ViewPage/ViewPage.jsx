import React from 'react'
import "./ViewPage.css"
import Layout from "../../components/Layout/Layout";
import ReactPlayer from 'react-player'
import { useState, useEffect } from "react"
import NewComment from '../FormComment/NewComment';
import { getPlaylist } from '../../services/playlists.js';
import { useParams } from 'react-router';
import { deleteComment } from '../../services/comments';
import EditComment from '../FormComment/EditComment';

export default function ViewPage(props) {
  // const [comments, setComments] = useState([]);
  const [playlist, setPlaylist] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    fetchPlaylist()
  }, [toggle]);

  useEffect(() => {
    setCurrentVideo(newArray[trackIndex]); // This is be executed when `loading` state changes
}, [loading])
  
  async function fetchPlaylist () {
    let res = await getPlaylist(id)
    if (res) {
      setPlaylist(res)
      setLoading(true);
    }
  }

  let newArray = []
  const allURLs = playlist?.links?.map((link, index) => {
    <div key={index}></div>
    newArray.push(link.linkURL)
    return newArray
  })

  function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentVideo, setCurrentVideo] = useState([]);
  const [commId, setCommId] = useState("");

  
  useEffect(() => {
    fetchVideo()
}, [trackIndex])
  
  const toPrevTrack = () => {
    if (trackIndex > 0) {
      setTrackIndex(trackIndex - 1);
    } else {
      setTrackIndex(0);
    }
    // console.log("back")
  }
  const toNextTrack = () => {
    if (trackIndex < newArray.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
    // console.log("forward")
  }
  const fetchVideo = () => {
      setCurrentVideo(newArray[trackIndex])
      // console.log(newArray[trackIndex])
      // console.log(trackIndex)
  }
  const handleWatchComplete = ({ played }) => {
    // console.log(played)
    if (played >= 0.98) {
      // console.log("Done!")
      toNextTrack()
    } 
  }

  const handlePlay = (index) => {
    setTrackIndex(index);
    // console.log(index)
    // console.log("selected")
  }

  const handleDelete = async (id) => {
    // console.log(id)
    await deleteComment(id);
    fetchPlaylist()
  };

  const handleEdit = (id) => {
    setCommId(id)
  };

    return (
        <Layout user={props.user} setUser={props.setUser}>
          <h1>{playlist?.title}</h1>
          <h3>{playlist.userId?.username}</h3>
          <p>{playlist?.description}</p>
          <h3>{playlist?.category}</h3>
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
          <button  onClick={myFunction}>Hide/Show List</button>
          <div id="myDIV" className="viewPageList">
          {playlist?.links?.map((link, index) => {
          return (
            <div key={index} onClick={() => handlePlay(index)}>{link.title}---
              {link.artist}</div>
            )
          })}
          </div>
          <br />
          {props.user && (<>
          <div id="newBox">
          <NewComment user={props.user} setUser={props.setUser} playlist={playlist} setToggle={setToggle} />
          </div>
          <div id="editBox">
          <EditComment commId={commId} user={props.user} setUser={props.setUser} playlist={playlist} setToggle={setToggle} />
            </div>
            </>)}
          <br />

          <div >
            {playlist?.comments?.slice(0).reverse().map((comment, index) => {
              return (
                <div key={index}>
                  {comment.username}---
                  {comment.content}
                  {props.user.username === comment.username && (<>
                    <div id="commButtons">
                      <button onClick={() => handleDelete(comment._id)}>DELETE</button>
                      <button onClick={() => handleEdit(comment)}>EDIT</button>
                    </div>
                    </>)}
                </div>
              )
            })}

          </div>
          
          </div>
        </Layout>
  )
}
// for the yellow warning for dev tools: https://stackoverflow.com/questions/61339968/devtools-failed-to-load-sourcemap-could-not-load-content-for-chrome-extension
// REACTPLAYER can take in an array of youtube videos but cannot take in an array of soundcloud songs
// how to pass index prop through onClick = https://www.codegrepper.com/code-examples/javascript/how+to+pass+index+onClick+function+react+button
// https://stackoverflow.com/questions/36415904/is-there-a-way-to-use-map-on-an-array-in-reverse-order-with-javascript*/}