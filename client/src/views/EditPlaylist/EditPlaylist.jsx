import Layout from '../../components/Layout/Layout'
import { useState, useEffect } from 'react'
import { getPlaylist, updatePlaylist } from '../../services/playlists'
import { deleteLink, getLink ,updateLink } from '../../services/links'
import { useParams } from 'react-router'
import CreateLink from '../FormLink/CreateLink'

export default function EditPlaylist(props) {
  const [playlist, setPlaylist] = useState({})
  const [newlist, setNewList] = useState({})
  const [toggle, setToggle] = useState(true)
  const [category, setCategory] = useState("Choose Category")
  const { id } = useParams()

  const defaultForm = {
    title: "",
    imgURL: "",
    description: "",
    category: "",
  }

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
    setInput(res)
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
      let updated = await updatePlaylist(id, input)
      setPlaylist(updated)
      fetchPlaylist()
  }

  const handleDelete = async (id) => {
    await deleteLink(id);
    fetchPlaylist()
  };

  return (
    <Layout user={props.user} setUser={props.setUser}>
      <section className="createEditContainer">
      <div className="createFormTitle">Edit Playlist</div><br />
      <section className="createPlaylistContainer">
      <div className="createFormDiv">
      <form onSubmit={handleSubmit}>
      <div className="formLabel">Playlist Title</div>
        <input
          className="login-input"
          type="text"
          placeholder="title"
          value={input.title}
          name="title"
          onChange={handleChange}
            />
      <div className="formLabel">Image URL</div>      
      <input
            className="login-input"
            placeholder='Image URL'
            value={input.imgURL}
            name='imgURL'
            onChange={handleChange}
          />
      <div className="formLabel">Description</div>     
      <input
            className="login-input"
            placeholder='Description'
            value={input.description}
            name='description'
            onChange={handleChange}
            />
      
      <div className="formLabel">Category</div>
      <select className="dropdownInput" type="text" name="category" value={input.category} onChange={handleChange}>
                  <option value="Music">Music</option>
                  <option value="Videos">Video</option>
                  <option value="Gaming">Gaming</option>
                  <option value="Education">Education</option>
                  <option value="Sports">Sport</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Family">Family</option>
            </select>
          <button className="hideShowBtn" onClick={handleSubmit} type="submit">Update playlist</button>
          </form>
            </div>
        <div className="newPlaylistContainer">
        <div className="inputTitle">{playlist?.title}</div>
        <img className="playlistIMG" src={playlist?.imgURL} alt={playlist?.title} />
        <div className="playlistCat">{playlist?.category}</div>
        <div className="playlistDesc">{playlist?.description}</div>
        </div>
        </section>

        <div className="newLinksAdded">
        <div className="createPlaylistItems">Playlist Links</div>
        {playlist.links?.map((link, index) => {
        return (
          <div className="listVidsContainer">
          <div className="listVids" key={index}> {link.title}---{link.artist}---{link.linkURL}</div>
          <button className="commSubmitBtn" onClick={() => handleDelete(link._id)}>DELETE</button>
          </div>
        )
        })}
        </div>
      <CreateLink setToggle={setToggle} newlist={newlist} />
      </section>
    </Layout>
  )
}
