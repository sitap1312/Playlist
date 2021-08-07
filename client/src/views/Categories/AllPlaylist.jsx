import React from 'react'
import Layout from "../../components/Layout/Layout";
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getAllPlaylist } from "../../services/playlists.js"

export default function AllPlaylist() {
  const [playlist, setPlaylist] = useState([])

  useEffect(() => {
    fetchData()
  }, [])
  
  const fetchData = async () => {
    const res = await getAllPlaylist()
    console.log(res)
    setPlaylist(res)
  }

  return (
    <Layout>
      <h2>Discover</h2>
      <div className="allPlaylist">
      {playlist.map((playlist) => {
        return (
          <Link to="/preview/:id"><img src={playlist?.imgURL} alt={playlist.name} /></Link>
        )
      })}
      </div>
    </Layout>
  )
}
