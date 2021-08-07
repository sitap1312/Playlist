import React from 'react'
import Layout from "../../components/Layout/Layout";
import { useParams } from 'react-router';
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getUser } from '../../services/users';

export default function UserPlaylist(props) {
  const [user, setUser] = useState({})


  useEffect(() => {
    fetchUser()
  }, [])

  const fetchUser = async () => {
    const user = await getUser(props.user?.id)
    setUser(user)
  }
  console.log(user)

  return (
    <Layout user={props.user} setUser={props.setUser}>
      <h2>{props.user?.username}'s Playlists</h2>
      <div className="categoryPlaylist">
        {user?.playlist?.map((playlist, index) => {
          return (
            <>
              <Link to={`/edit-playlist/${playlist._id}`}>
                <h4 key={index}>{playlist.title}</h4>
                <img src={playlist.imgURL} alt={playlist.title} />
              </Link>
              <p>{props.user.username}</p>
              <button>Delete playlist</button>
            </>
          )
        })}
      </div>
    </Layout>
  )
}
