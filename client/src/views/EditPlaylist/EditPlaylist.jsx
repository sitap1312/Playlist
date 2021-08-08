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
      <div className="createFormDiv"></div>
        {playlist?.title}
        <br />
      <form onSubmit={handleSubmit}>
      <div className="formLabel">Playlist Title</div>
        <input
          className='input-name'
          type="text"
          placeholder="title"
          value={input.title}
          name="title"
          required
          onChange={handleChange}
            />
      <div className="formLabel">Image URL</div>      
      <input
            className='input-name'
            placeholder='Image URL'
            value={input.imgURL}
            name='imgURL'
            required
            onChange={handleChange}
          />
      <div className="formLabel">Description</div>     
      <input
            className="login-input"
            placeholder='Description'
            value={input.description}
            name='description'
            required
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
          </form>
          <button className="hideShowBtn" onClick={handleSubmit} type="submit">Update playlist</button>
          </section>
      
        <div className="newPlaylistContainer">
        <div className="inputTitle">{playlist?.title}</div>
        <img className="playlistIMG" src={playlist?.imgURL} alt={playlist?.title} />
        <div className="playlistCat">{playlist?.category}</div>
        <div className="playlistDesc">{playlist?.description}</div>
        </div>
        
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
