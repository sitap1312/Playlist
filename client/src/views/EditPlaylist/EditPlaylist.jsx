import Layout from '../../components/Layout/Layout'
import { useState, useEffect } from 'react'
import { getPlaylist, updatePlaylist } from '../../services/playlists'
import { deleteLink, getLink ,updateLink } from '../../services/links'
import { useParams } from 'react-router'
import CreateLink from '../FormLink/CreateLink'


const defaultForm = {
  title: "",
  imgURL: "",
  description: "",
  category: "",
}

export default function EditPlaylist(props) {
  const [playlist, setPlaylist] = useState({})
  const [newlist, setNewList] = useState({})
  const [toggle, setToggle] = useState(true)
  const [category, setCategory] = useState("Choose Category")
  const { id } = useParams()

  const [input, setInput] = useState(defaultForm)


  useEffect(() => {
    fetchPlaylist()
  }, [id])

  useEffect(() => {
    fetchPlaylist()
  }, [toggle])
  
  const fetchPlaylist = async () => {
    const res = await getPlaylist(id)
    setPlaylist(res)
  }
  useEffect(() => {
    setNewList(playlist)
  },[playlist])

  

  

  function handleChange(event) {
    let {name, value} = event.target
    setInput(prevState => ({
        ...prevState,
        [name]: value,
    }))
  setCategory(event.target.value)
}

  const handleSubmit = async (e) => {
      e.preventDefault()
      let updated = await updatePlaylist(id,input)
      setPlaylist(updated)
      fetchPlaylist()
  }

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
          placeholder="title"
          value={input.title}
          name="title"
          required
          onChange={handleChange}
          /><br />
      <img
        src={playlist?.imgURL}
        alt={playlist?.title} />
      <br />
      <input
            className='input-name'
            placeholder='Image URL'
            value={input.imgURL}
            name='imgURL'
            required
            onChange={handleChange}
          />
      {playlist?.description} <br />
      <input
            className='input-name'
            placeholder='Description'
            value={input.description}
            name='description'
            required
            onChange={handleChange}
          /><br />
      <select type="text" name="category" value={input.category} onChange={handleChange}>
                  <option value="Music">Music</option>
                  <option value="Videos">Video</option>
                  <option value="Gaming">Gaming</option>
                  <option value="Education">Education</option>
                  <option value="Sports">Sport</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Family">Family</option>
            </select>
          </form>
      <button onClick={handleSubmit} type="submit">Update playlist</button>
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
