import React from 'react'
import { Link } from "react-router-dom"
import "./PlaylistCard.css"

export default function PlaylistCard(props) {
  const scrollTop = () => {
    window.scrollTo(0,0)
  }
  
  return (
    <div>
      <Link className="link" to={`/preview/${props.playlist._id}` }><div className="playlistCardContainer" onClick={scrollTop} >
          <img className="playlistCardImg" src={props.playlist?.imgURL} alt={props.playlist?.title}/>
        <h2 className="playlistCardTitle">{props.playlist?.title}</h2>
        <div className="playlistCardDescription">{props.playlist.description}</div>
      </div> </Link>
    </div>
  )
}