import { useState, useEffect } from "react"
import "./CreatePlaylist.css"
import Layout from "../../components/Layout/Layout";
import { createPlaylist, getPlaylist } from "../../services/playlists.js";
import CreateLink from "../FormLink/CreateLink";
import { deleteLink, } from '../../services/links'

let defaultInput = {
  title: "",
  imgURL: "",
  description: "",
  category: "Music",
}

export default function CreatePlaylist(props) {
  const [input, setInput] = useState(defaultInput)
  const [playlist, setPlaylist] = useState({})
  const [newlist, setNewList] = useState({})
  const [toggle, setToggle] = useState(true)

    function handleChange(event) {
        let {name, value} = event.target
        setInput(prevState => ({
            ...prevState,
            [name]: value,
        }))
    }
    async function handleSubmit(event) {
        event.preventDefault()
      let newlist = await createPlaylist(input)
      setNewList(newlist)
      myFunction()
    }
  
    function myFunction() {
      var x = document.getElementById("myDIV");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }

    }
  
    useEffect(() => {
      fetchPlaylist()
      // eslint-disable-next-line
    }, [newlist])
  
    useEffect(() => {
      fetchPlaylist()
      // eslint-disable-next-line
    }, [toggle])
    
    const fetchPlaylist = async () => {
      const res = await getPlaylist(newlist._id)
      setPlaylist(res)
    }
  
    const handleDelete = async (id) => {
      await deleteLink(id);
      fetchPlaylist()
    };
  
    return (
      <Layout user={props.user} setUser={props.setUser}>
        <section className="createEditContainer">
          <div className="createFormTitle">Create Playlist</div>
          <button className="hideShowBtn" onClick={myFunction}>Hide/Show Form</button>
            <section className="createPlaylistContainer">
            <div id="myDIV">
            <div className="createFormDiv">
            <form onSubmit={handleSubmit}>
                <div className="formLabel">Playlist Title</div>
                <input className="login-input" type="text" name="title" value={input.title} onChange={handleChange}  />
                <div className="formLabel">Image URL</div>
                <input className="login-input" type="text" name="imgURL" value={input.imgURL} onChange={handleChange}  />                
                <div className="formLabel">Description</div>
                <input className="login-input" type="text" name="description" value={input.description} onChange={handleChange}  />      
                
                <div className="formLabel">Category</div>
                <select className="dropdownInput" type="text" name="category" value={input.category} onChange={handleChange} required={true}>
                  <option value="Music">Music</option>
                  <option value="Videos">Video</option>
                  <option value="Gaming">Gaming</option>
                  <option value="Education">Education</option>
                  <option value="Sports">Sport</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Family">Family</option>
                </select>
                <br />
                <button className="hideShowBtn" type="submit">Create Playlist</button>
            </form>
            </div>
          </div>
        <div className="newPlaylistContainer">
          <img className="playlistIMG" src={input.imgURL} alt={input.title} />
          <div className="inputTitle">{input.title}</div>
          <div className="playlistCat">{input.category}</div>
          <div className="playlistDesc">{input.description}</div>
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