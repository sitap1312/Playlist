import Layout from '../../components/Layout/Layout'
import { useState, useEffect } from 'react'
import { getPlaylist, updatePlaylist } from '../../services/playlists'
import { deleteLink, getLink ,updateLink } from '../../services/links'
import { useParams } from 'react-router'
import CreateLink from '../FormLink/CreateLink'
import e from 'cors'



export default function EditPlaylist(props) {
  const [updated, setUpdated] = useState(false)
  const [playlist, setPlaylist] = useState({})
  const [link, setLink] = useState([])
  const [newlist, setNewList] = useState({})
  const [toggle, setToggle] = useState(true)
  const { id } = useParams()


  useEffect(() => {
    fetchPlaylist()
  }, [id])

  // useEffect(() => {
  //   fetchPlaylist()
  // }, [toggle])
  
  const fetchPlaylist = async () => {
    const res = await getPlaylist(id)
    setPlaylist(res)
  }
  useEffect(() => {
    setNewList(playlist)
  },[playlist])

  

  

  const handleChange = async (e) => {
    const { name, value } = e.target
    setPlaylist({
      ...playlist,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const fields = {
      title: playlist.title,
      imgURL: playlist.imgURL,
      description: playlist.description,
      category: playlist.category
    }
    console.log(fields)
    const updated = await updatePlaylist(id, fields)

  }


  // async function handleSubmit(event) {
  //   event.preventDefault();
  //   const fields = {
  //   content: input.content,
  //   };
  //   let id = data._id;
  //   console.log(fields);
  //   let comments = await updateComment(id, fields);
  //   setComments(comments);
  //   props.setToggle(prevToggle => !prevToggle);
  // };

  const handleDelete = async (id) => {
    await deleteLink(id);
    fetchPlaylist()
  };

  return (
    <Layout user={props.user} setUser={props.setUser}>
      <p>Edit Playlist</p><br />
      
      {playlist?.title} <br />
      <form onSubmit={handleSubmit}>
        <input type="text"
          placeholder="Title"
          value={playlist.title}
          name="title"
          required
          onChange={handleChange}
          /><br />
      </form>
      <img
        src={playlist?.imgURL}
        alt={playlist?.title} />
      <br />
      <form onSubmit={handleSubmit}>
      <input
            className='input-name'
            placeholder='Image URL'
            value={playlist.imgURL}
            name='imgURL'
            required
            onChange={handleChange}
          />
      </form >
      {playlist?.description} <br />
      <form onSubmit={handleSubmit} >
      <input
            className='input-name'
            placeholder='Description'
            value={playlist.description}
            name='description'
            required
            onChange={handleChange}
          /><br />
      </form>
      <button type="submit">Update playlist</button>
      {playlist.links?.map((link, index) => {
        return (
          <>
          <div key={index}> {link.title}---{link.artist}---{link.linkURL}</div>
          <button onClick={() => handleDelete(link._id)}>Delete Link</button>
          </>
        )
      })}
      <CreateLink setToggle={setToggle} newlist={newlist} />
    </Layout>
  )
}
