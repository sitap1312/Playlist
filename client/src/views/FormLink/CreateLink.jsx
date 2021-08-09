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
      <section className="createLinkContainer">
        <div className="createLinkTitle">Add a Link</div>
            <form onSubmit={handleSubmit}>
                <div className="formLabel">Link Title</div>
                
                <input class="login-input" type="text" name="title" value={input.title} onChange={handleChange}  />
                
                <div className="formLabel">Artist/Author/Creator</div>
                
                <input class="login-input" type="text" name="artist" value={input.artist} onChange={handleChange}  />      
                
                <div className="formLabel">LinkURL</div>
                
                <input class="login-input" type="text" name="linkURL" value={input.linkURL} onChange={handleChange}  />                
                <br />
          <button className="hideShowBtn" type="submit">Add Link</button>
        </form>
        </section>
    )
}