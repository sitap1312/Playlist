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
    // eslint-disable-next-line
  }, [])

  const fetchUser = async () => {
    const user = await getUser(props.user?.id)
    setUser(user)
  }

  const handleDelete = async (id) => {
    await deletePlaylist(id);
    fetchUser()
    };

  return (
    <Layout user={props.user} setUser={props.setUser}>
        <h2 className="userNamePlaylist">{props.user?.username}'s Playlists</h2>
          <div className="userPlaylist">
            {user?.playlist?.map((playlist, index) => {
              return (
                <div className="indivPlaylist" key={index}>
                  <PlaylistCard key={index} playlist={playlist} />
                  <Link className="linkToEditPlaylist" to={`/edit-playlist/${playlist._id}`}><button className="editPlaylistBtn">Edit</button></Link>
                  <button className="deletePlaylistBtn" onClick={() => handleDelete(playlist._id)}>Delete</button>
                </div>
              )
            })}
          </div>
    </Layout>
  )
}
