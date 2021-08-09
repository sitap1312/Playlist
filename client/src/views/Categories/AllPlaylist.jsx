import React from 'react'
import Layout from "../../components/Layout/Layout";
import { useState, useEffect } from "react"
import { getAllPlaylist } from "../../services/playlists.js"
import PlaylistCard from '../PlaylistCard/PlaylistCard';
import "./Categories.css"

export default function AllPlaylist(props) {
  const [playlist, setPlaylist] = useState([])

  useEffect(() => {
    fetchData()
  }, [])
  
  const fetchData = async () => {
    const res = await getAllPlaylist()
    setPlaylist(res)
  }

  return (
    <Layout user={props.user} setUser={props.setUser}>
      <h2 className="playlistCategory">Discover</h2>
      <div className="allPlaylist">
      {playlist.map((playlist, index) => {
        return (
          <div className="indivPlaylist">
            <PlaylistCard key={index} playlist={playlist} />
          </div> 
        )
      })}
      </div>
    </Layout>
  )
}
