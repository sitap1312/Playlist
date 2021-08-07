import { get } from "mongoose";
import { useState, useEffect } from "react";
import { updateComment, getComment } from "../../services/comments.js";

export default function EditComment(props) {
  const [comments, setComments] = useState([]);
  const [data, setData] = useState({});
  const [play, setPlay] = useState("");

  useEffect(() => {
    fetchData();
    setPlay(props.playlist._id);
  }, [props.commId._id]);

  console.log(props);

  const fetchData = async () => {
    const res = await getComment(props.commId._id);
    console.log(res);
    setData(res);
  }

  let defaultInput = {
    content: data.content,
    playlistId: ""
  };

  useEffect(() => {
    setInput(defaultInput);
  }, [data]);

  // console.log(props.playlist._id);
  // console.log(play);


  const [input, setInput] = useState(data);

  function handleChange(e) {
    let { name, value } = e.target
    setInput(prevState => ({
      ...prevState,
      [name]: value,
    }))
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const fields = {
    content: input.content,
      // _id: data._id
    };
    let id = data._id;
    //This is where we left off 
    // Edit worked but content is replaced 
    // with previous comment in text area after submition
    console.log(fields);
    let comments = await updateComment(id, fields);
    setComments(comments);
    props.setToggle(prevToggle => !prevToggle);
    // setInput(defaultInput);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <br />
        <h4>{props?.user?.username}</h4>
        <label><strong>Edit Comment</strong></label>
        <br />
        <textarea cols="75" rows="4" type="text" name="content" value={input.content} onChange={handleChange} />
        <br />
        <button type="submit">Submit</button>
      </form>

      <div>
      </div>
    </div>
  )
}