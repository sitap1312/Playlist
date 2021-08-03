import { useState } from "react"
import { createPlaylist } from "../../services/playlists";
import { useHistory } from "react-router-dom";

export default function CreatePlaylist() {
    let history = useHistory()
    let defaultInput = {
        title: "",
        imgURL: "",
        description: "",
        category: "",
        user_id: "",
    }
    const [input, setInput] = useState(defaultInput)

    function handleChange(event) {
        let {name, value} = event.target
        setInput(prevState => ({
            ...prevState,
            [name]: value,
        }))
    }
    async function handleSubmit(event) {
        event.preventDefault()
        await createPlaylist(input)
        history.push("/")
    }
  
    return (
        <div>
            <h1>Create Playlist</h1>
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
                <input type="text" name="content" value={input.content} onChange={handleChange}  />      
                <br />
                <label>Category</label>
                <br />      
                <input type="text" name="category" value={input.category} onChange={handleChange} />
                <br />
                <button type="submit">Create Playlist</button>
        </form>
        <div>
          <h1>{input.title}</h1>
          <img src={input.imgURL} alt={input.title} />
          <p>{props.username}</p>
        </div>
        </div>
    )
} 