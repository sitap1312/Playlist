import React from 'react'
import Layout from "../../components/Layout/Layout";
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getUser } from '../../services/users';
import { deletePlaylist } from '../../services/playlists';
import PlaylistCard from '../PlaylistCard/PlaylistCard';
import "./UserPlaylist.css"

export default function UserPlaylist(props) {
  const [user, setUser] = useState({})


  useEffect(() => {
    fetchUser()
  }, [])

  const fetchUser = async () => {
    const user = await getUser(props.user?.id)
    setUser(user)
  }
  // console.log(user)

  const handleDelete = async (id) => {
    // console.log(id)
    await deletePlaylist(id);
    fetchUser()
    };

  return (
    <Layout user={props.user} setUser={props.setUser}>
        <h2 className="userNamePlaylist">{props.user?.username}'s Playlists</h2>
          <div className="userPlaylist">
            {user?.playlist?.map((playlist, index) => {
              return (
                <div key={index}>
                  <PlaylistCard key={index} playlist={playlist} />
                  <button onClick={() => handleDelete(playlist._id)}>Delete playlist</button>
                  <Link to={`/edit-playlist/${playlist._id}`}><button>Edit Playlist</button></Link>
                </div>
              )
            })}
          </div>
    </Layout>
  )
}
