import { useState } from "react"
import Layout from "../../components/Layout/Layout";
import { createPlaylist } from "../../services/playlists";

import CreateLink from "../FormLink/CreateLink";

export default function CreatePlaylist(props) {
    let id = (props.user.id)
    let defaultInput = {
        title: "",
        imgURL: "",
        description: "",
        category: "",
        userId: id,
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
      // console.log(input)

        history.push("/")
    }
  
    return (
      <Layout user={props.user} setUser={props.setUser}>

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
                <input type="text" name="description" value={input.description} onChange={handleChange}  />      

                <br />
                <label>Category</label>
                <br />      
                <input type="text" name="category" value={input.category} onChange={handleChange} />
                <br />
                {/* <label>{props.user.id}</label>
                <br />      
                <input type="text" name="userId" value={props.user.id} onChange={handleChange} />
                <br /> */}
                <button type="submit">Create Playlist</button>
        </form>
        <div>
          <h1>{input.title}</h1>
          <img src={input.imgURL} alt={input.title} />
          <p>{props.username}</p>
        </div>
        <CreateLink/>
        </Layout>
    )
} 