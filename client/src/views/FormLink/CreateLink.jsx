import { useState } from "react"
import { createLink } from "../../services/links";

export default function CreateLink(props) {
  const [song, setSong] = useState("")
  const id = props.newlist._id
    let defaultInput = {
        title: "",
        artist: "",
        linkURL: "",
      playlistId: "",
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
      console.log(id)
      console.log(defaultInput)
      console.log(input)
      const fields = {
        title: input.title,
        artist: input.artist,
        linkURL: input.linkURL,
        playlistId: id,
      };
        let song = await createLink(fields)
      setSong(song)
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
        <div>
          {/* show the song that was just added */}
          <h1>Title: {song.title}</h1>
          <h1>Artist: {song.artist}</h1>
          <h1>URL: {song.linkURL}</h1>
          {/* show full list of all songs added to the playlist */}
          {props.newlist?.links?.map((playlist) => {
            return (
              <p>{playlist.links.title}</p>
            )
          })}
        </div>
        </div>
    )
} 