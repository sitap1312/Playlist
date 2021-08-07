import React from 'react'
import Layout from "../../components/Layout/Layout";
import { useParams } from 'react-router';
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getAllPlaylist } from "../../services/playlists.js"

export default function Categories(props) {
  const [playlist, setPlaylist] = useState([])
  const { id } = useParams()

  useEffect(() => {
    fetchData()
  }, [])
  
  const fetchData = async () => {
    const res = await getAllPlaylist()
    console.log(res)
    setPlaylist(res)
  }

  
  const filterByCategory = (category) => {
    const filtered = playlist.filter((cat) => cat.category[0] === category)
    return filtered
  }
  
  return (
    <Layout user={props.user} setUser={props.setUser}>
    <h2>{id}</h2>
      <div className="categoryPlaylist">
      {filterByCategory(id).map((playlist, index) => {
        return (
          <Link key={index} to={`/preview/${playlist._id}`}><img src={playlist?.imgURL} alt={playlist.name} /></Link>
        )
      })}
      </div>
    </Layout>
  )
}
