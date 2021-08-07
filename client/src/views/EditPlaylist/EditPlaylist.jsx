import Layout from '../../components/Layout/Layout'
import { useState, useEffect } from 'react'
import { getPlaylist, updatePlaylist } from '../../services/playlists'
import { getLink ,updateLink } from '../../services/links'
import { useParams } from 'react-router'


export default function EditPlaylist(props) {
  const [updated, setUpdated] = useState(false)
  const [playlist, setPlaylist] = useState({})
  const [link, setLink] = useState([])


  const { id } = useParams()
  useEffect(() => {
    fetchPlaylist()
    fetchLinks()
  }, [props])
  
  const fetchPlaylist = async () => {
    const res = await getPlaylist(id)
    setPlaylist(res)
  }
  const fetchLinks = async () => {
    const res = await getLink(playlist?.links[0]?._id)
    console.log(res)
    setLink(res)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const updated = await updatePlaylist(id)
  }
  // console.log(playlist.links[0]?._id)


  return (
    <Layout user={props.user} setUser={props.setUser}>
      <p>Edit Playlist</p><br />
      {playlist?.title} <br />
      <input type="text" /><br />
      <img src={playlist?.imgURL} alt={playlist?.title} /><br />
      <input type="text" /><br />
      {playlist?.description} <br />
      <input type="text" /><br />
      {/* {link.map((link) => {
        return (
          <>
            <p>Change links?</p>
            <p>{link.title}</p><br />
            <input type="text" />
            <p>{link.artist}</p><br />
            <input type="text" />
            <p>{link.linkURL}</p><br />
            <input type="text" />
        </>
        )
      })}<br/> */}
      <p>Change links?</p>
            <p>{link.title}</p><br />
            <input type="text" />
            <p>{link.artist}</p><br />
            <input type="text" />
            <p>{link.linkURL}</p><br />
            <input type="text" />
    </Layout>
  )
}
