import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import { createComment } from "../../services/comments.js";
// import { useHistory } from "react-router-dom";
// import Layout from "../../components/Layout/Layout";


export default function NewComment(props) {
  const [comments, setComments] = useState([]);
  // let history = useHistory();
  // const { id } = useParams();

  const [play, setPlay] = useState("");

  useEffect(() => {
    setPlay(props.playlist._id);
  }, [props]);

  // console.log(props.playlist._id);
  console.log(play);

  let defaultInput = {
    content: "",
    playlistId: ""
  };

  const [input, setInput] = useState(defaultInput);

  function handleChange(e) {
    let { name, value } = e.target

    setInput(prevState => ({
      ...prevState,
      [name]: value,
    }))
  };

  async function handleSubmit(event) {
    event.preventDefault()

    const fields = {
      content: input.content,
      playlistId: play
    };

    console.log(fields);
    let comments = await createComment(fields);
    setComments(comments);
    props.setToggle(prevToggle => !prevToggle);

    setInput(defaultInput);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <br />
        <h4>{props?.user?.username}</h4>
        <label>Add Comment</label>
        <br />
        <textarea cols="75" rows="4" type="text" value={input} name="content" value={input.content} onChange={handleChange} />
        <br />
        <button type="submit">Submit</button>
      </form>

      <div>
        {/* Display comments here.. */}
      </div>
    </div>
  )
}