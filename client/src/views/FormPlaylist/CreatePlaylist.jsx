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
  const [category, setCategory] = useState("Select a category below")
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
      setCategory(event.target.value)
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
    }, [newlist])
  
    useEffect(() => {
      fetchPlaylist()
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
                <label>Playlist Title</label>
                <br />
                <input type="text" name="title" value={input.title} onChange={handleChange}  />
                <br />
                <label>Image URL</label>
                <br />
                <input type="text" name="imgURL" value={input.imgURL} onChange={handleChange}  />                
                <br />
                <label>Description</label>
                <br />
                <input type="text" name="description" value={input.description} onChange={handleChange}  />      
                <br />
                <label>Category</label>
                <br />      
                <select type="text" name="category" value={input.category} onChange={handleChange} required={true}>
                  <option value="Music">Music</option>
                  <option value="Videos">Video</option>
                  <option value="Gaming">Gaming</option>
                  <option value="Education">Education</option>
                  <option value="Sports">Sport</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Family">Family</option>
                </select>
                <br />
                <button type="submit">Create Playlist</button>
            </form>
            </div>
          </div>
        <div className="newPlaylistContainer">
          <div className="inputTitle">{input.title}</div>
          <img className="playlistIMG" src={input.imgURL} alt={input.title} />
          <div className="creatorName">{props.user?.username}</div>
          <div className="playlistDesc">{input.description}</div>
          </div>
          </section>
        <div className="newLinksAdded">
        {playlist.links?.map((link, index) => {
        return (
          <>
          <div key={index}> {link.title}---{link.artist}---{link.linkURL}</div>
          <button onClick={() => handleDelete(link._id)}>Delete Link</button>
          </>
        )
        })}
          </div>
          <CreateLink setToggle={setToggle} newlist={newlist} />
          </section>
        </Layout>
    )
} 