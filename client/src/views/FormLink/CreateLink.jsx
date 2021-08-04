import { useState } from "react"
// import { createLink } from "../../services/links";
import { useHistory } from "react-router-dom";

export default function CreateLink(props) {
    let history = useHistory()
    let defaultInput = {
        title: "",
        artist: "",
        linkURL: "",
        playlist_id: "",
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
        // await createLink(input)
        history.push("/")
    }
  
    return (
        <div>
            <h1>Add a Link</h1>
            <form onSubmit={handleSubmit}>
                <label>URL Title</label>
                <br />
                <input type="text" name="title" value={input.title} onChange={handleChange}  />
                <br />
                <label>Artist</label>
                <br />
                <input type="text" name="artist" value={input.artist} onChange={handleChange}  />      
                <br />
                <label>LinkURL</label>
                <br />
                <input type="text" name="imgURL" value={input.imgURL} onChange={handleChange}  />                
                <br />
                <button type="submit">Add Link</button>
        </form>
        <div>
          {/* {props.playlists.map((playlist) => {
            return (
              <p>{playlist.link.title}</p>
            )
          })} */}
        </div>
        </div>
    )
} 