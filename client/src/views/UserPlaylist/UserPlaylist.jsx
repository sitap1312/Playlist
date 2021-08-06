import React from 'react'
import Layout from "../../components/Layout/Layout";
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getUser } from '../../services/users';
import { deletePlaylist } from '../../services/playlists';

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
    console.log(id)
    await deletePlaylist(id);
    fetchUser()
    };

  return (
    <Layout user={props.user} setUser={props.setUser}>
      <h2>{props.user?.username}'s Playlists</h2>
      <div className="categoryPlaylist">
        {user?.playlist?.map((playlist, index) => {
          return (
              <div key={index}>
              <Link  to={`/preview/${playlist._id}`}>
              <h4 >{playlist.title}</h4>
              <img src={playlist.imgURL} alt={playlist.title} />
              <p>{props.user.username}</p>
              </Link>
              <button onClick={() => handleDelete(playlist._id)}>Delete playlist</button>
              </div>
          )
        })}
      </div>
    </Layout>
  )
}
