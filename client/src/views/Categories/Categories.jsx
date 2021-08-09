import React from 'react'
import Layout from "../../components/Layout/Layout";
import { useParams } from 'react-router';
import { useState, useEffect } from "react"
import { getAllPlaylist } from "../../services/playlists.js"
import PlaylistCard from '../PlaylistCard/PlaylistCard';
import "./Categories.css"

export default function Categories(props) {
  const [playlist, setPlaylist] = useState([])
  const { id } = useParams()

  useEffect(() => {
    fetchData()
  }, [])
  
  const fetchData = async () => {
    const res = await getAllPlaylist()
    setPlaylist(res)
  }

  
  const filterByCategory = (category) => {
    const filtered = playlist.filter((cat) => cat.category[0] === category)
    return filtered
  }
  
  return (
    <Layout user={props.user} setUser={props.setUser}>
      <div className="viewPlaylists"> 
    <h2 className="categoryPlaylistName">{id}</h2>
      <div className="allPlaylist">
      {filterByCategory(id).map((playlist, index) => {
        return (
          <PlaylistCard key={index} playlist={playlist} />
        )
      })}
        </div>
      </div>
    </Layout>
  )
}