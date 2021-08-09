import "./FormComment.css"
import { useState, useEffect } from "react";
import { createComment } from "../../services/comments.js";


export default function NewComment(props) {
  const [play, setPlay] = useState("");

  useEffect(() => {
    setPlay(props.playlist._id);
  }, [props]);

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

    await createComment(fields);
    props.setToggle(prevToggle => !prevToggle);

    setInput(defaultInput);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="commFormHeader">
        <div className="commFormLabel">Add Comment</div>
        <div className="commFormUser">{props?.user?.username}</div>
        </div>
        <div className="inputDiv">
          <input className="commInput" type="text" value={input.content} name="content" placeholder="enter a public comment" onChange={handleChange} />
        <div className="commBtnDiv">
        <button className="commSubmitBtn" type="submit">SUBMIT</button>
        </div>
        </div>
      </form>
    </div>
  )
}