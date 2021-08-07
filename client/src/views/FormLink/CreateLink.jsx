import { useState } from "react"

import { createLink } from "../../services/links.js";


export default function CreateLink(props) {
  const [song, setSong] = useState("")
  const id = props.newlist._id

  let defaultInput = {
    title: "",
    artist: "",
    linkURL: "",
    playlistId: "",
  };


  const [input, setInput] = useState(defaultInput)

    function handleChange(event) {
        let {name, value} = event.target
        setInput(prevState => ({
            ...prevState,
            [name]: value,
        }))
  };

    async function handleSubmit(event) {
      event.preventDefault()
      const fields = {
        title: input.title,
        artist: input.artist,
        linkURL: input.linkURL,
        playlistId: id,
      };
        let song = await createLink(fields)
      setSong(song)
      props.setToggle(prevToggle => !prevToggle);
      setInput(defaultInput)
    }
  
    return (
      <div>
            <h1>Add a Link</h1>
            <h1>{props.newlist.title}</h1>
            <form onSubmit={handleSubmit}>
                <label>Link Title</label>
                <br />
                <input type="text" name="title" value={input.title} onChange={handleChange}  />
                <br />
                <label>Artist/Author/Creator</label>
                <br />
                <input type="text" name="artist" value={input.artist} onChange={handleChange}  />      
                <br />
                <label>LinkURL</label>
                <br />
                <input type="text" name="linkURL" value={input.linkURL} onChange={handleChange}  />                
                <br />
                <button type="submit">Add Link</button>
        </form>
        </div>
    )
}