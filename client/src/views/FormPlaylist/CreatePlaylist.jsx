import { useState } from "react"
import Layout from "../../components/Layout/Layout";
// <<<<<<< test
// import { createPlaylist } from "../../services/playlists";
// =======
// // import { createPlaylist } from "../../services/playlists";
// >>>>>>> userSita
import { useHistory } from "react-router-dom";
import CreateLink from "../FormLink/CreateLink";

export default function CreatePlaylist(props) {
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
// <<<<<<< test
//         await createPlaylist(input)
// =======
//         // await createPlaylist(input)
// >>>>>>> userSita
        history.push("/")
    }
  
    return (
// <<<<<<< test
//       <Layout user={props.user} setUser={props.setUser}>
// =======
//         <Layout>
// >>>>>>> userSita
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
// <<<<<<< test
//                 <input type="text" name="description" value={input.description} onChange={handleChange}  />      
// =======
//                 <input type="text" name="content" value={input.content} onChange={handleChange}  />      
// >>>>>>> userSita
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
        <CreateLink/>
        </Layout>
    )
} 