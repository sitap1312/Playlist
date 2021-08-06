import React from 'react'
import Layout from "../../components/Layout/Layout";
import { useParams } from 'react-router';
import { useState } from "react"
import { Link } from "react-router-dom"

export default function UserPlaylist() {
  const [playlist, setPlaylist] = useState(data)
  const { id } = useParams()

  useEffect(() => {
    fetchData()
  }, [])
  
  const fetchData = async () => {
    const res = await getAllPlaylist()
    console.log(res)
    setPlaylist(res)
  }

  // need to filter by userId using the current user logged on from the props or through back end
  const filterByUser = (category) => {
    const filtered = playlist.filter((cat) => cat.userId === category)
    return filtered
  }
  
  // we need to add the delete playlists function on this page as it is the user's own playlists
  return (
    <Layout>
    <h2>{id}</h2>
      <div className="categoryPlaylist">
      {filterByUser(id).map((playlist) => {
        return (
          <Link to="/preview/:id"><img src={playlist?.imgURL} alt={playlist.name} /></Link>
        )
      })}
      </div>
    </Layout>
  )
}
