import { useState } from "react"

import { createLink } from "../../services/links.js";


export default function CreateLink(props) {
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
      await createLink(fields)
      setInput(defaultInput)
      props.fetchPlaylist()
    }
  
    return (
      <section className="createLinkContainer">
        <div className="createLinkTitle">Add a Link</div>
            <form onSubmit={handleSubmit}>
                <div className="formLabel">Link Title</div>
                
                <input className="login-input" type="text" name="title" value={input.title} onChange={handleChange}  />
                
                <div className="formLabel">Artist/Author/Creator</div>
                
                <input className="login-input" type="text" name="artist" value={input.artist} onChange={handleChange}  />      
                
                <div className="formLabel">LinkURL</div>
                
                <input className="login-input" type="text" name="linkURL" value={input.linkURL} onChange={handleChange}  />                
                <br />
          <button className="hideShowBtn" type="submit">Add Link</button>
        </form>
        </section>
    )
}