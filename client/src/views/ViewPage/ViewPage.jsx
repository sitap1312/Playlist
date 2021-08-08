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
import { Link } from "react-router-dom"

export default function ViewPage(props) {
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

  function hideShow() {
    let x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
<<<<<<< HEAD

  function switchBox1() {
    let x = document.getElementById("editBox");
    x.style.display = "block";
    let y = document.getElementById("newBox");
    y.style.display = "none";
  }

  function switchBox0() {
    let x = document.getElementById("editBox");
    x.style.display = "none";
    let y = document.getElementById("newBox");
    y.style.display = "block";
  }

=======
>>>>>>> userSita2
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
  }
  const handleWatchComplete = ({ played }) => {
    if (played >= 0.98) {
      toNextTrack()
    }
  }

  const handlePlay = (index) => {
    setTrackIndex(index);
  }

  const handleDelete = async (id) => {
    await deleteComment(id);
    fetchPlaylist()
  };

  const handleEdit = (id) => {
    setCommId(id)
    switchBox1()
  };

    return (
      <Layout user={props.user} setUser={props.setUser}>
        <section className="viewPageContainer">
          <div className="playlistInfo">
          <div className="viewPlayTitle">{playlist?.title}</div>
          <div className="viewUser">{playlist.userId?.username}</div>
          <Link className="viewPlayCat" to={`/categories/${playlist?.category}`}>{playlist?.category}</Link>
          </div>
            <ReactPlayer
              className='react-player'
              controls={true}
              playing url={currentVideo}
              onProgress={handleWatchComplete}
              width='100%'
              height="360px"
          />
        <section className="belowPlayer">
        <div className="descBox">
        <div className="viewLabels">DESCRIPTION</div>
        <div className="viewPlayDesc">{playlist?.description}</div>
        </div>
        <div className="buttonContainer">    
        <button className="PlayerBtn" onClick={toPrevTrack}>PREV</button>
        <button className="PlayerBtn" onClick={toNextTrack}>NEXT</button>
        </div>
        </section>
          <div className="ListContainer">
          <div className="ListHeadContainer">
          <div className="playlistHeader">Playlist Items</div>
          <button className="hideShowBtn" onClick={hideShow}>Hide/Show List</button>
          </div>
          <div id="myDIV" className="viewPageList">
          {playlist?.links?.map((link, index) => {
          return (
            <div className="listVids" key={index} onClick={() => handlePlay(index)}>{link.title}---
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
          <EditComment commId={commId} user={props.user} setUser={props.setUser} playlist={playlist} setToggle={setToggle} switchBox0={switchBox0} />
            </div>
            </>)}
          <br />
          <div className="commentBox">
            {playlist?.comments?.slice(0).reverse().map((comment, index) => {
              return (
                <div key={index}>
                  <div className="commentUser">{comment?.username}</div>
                  <div className="commentContent">{comment?.content}</div>
                  {props.user?.username === comment.username && (<>
                    <div className="commButtons">
                      <button className="CommBtn" onClick={() => handleDelete(comment._id)}>DELETE</button>
                      <button className="CommBtn" onClick={() => handleEdit(comment)}>EDIT</button>
                    </div>
                    </>)}
                </div>
              )
            })}
          </div>
          </div>
          </section>
        </Layout>
  )
}
// for the yellow warning for dev tools: https://stackoverflow.com/questions/61339968/devtools-failed-to-load-sourcemap-could-not-load-content-for-chrome-extension
// REACTPLAYER can take in an array of youtube videos but cannot take in an array of soundcloud songs
// how to pass index prop through onClick = https://www.codegrepper.com/code-examples/javascript/how+to+pass+index+onClick+function+react+button
// https://stackoverflow.com/questions/36415904/is-there-a-way-to-use-map-on-an-array-in-reverse-order-with-javascript*/}
