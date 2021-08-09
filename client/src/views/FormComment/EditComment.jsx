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
    };
    let id = data._id;
    console.log(fields);
    let comments = await updateComment(id, fields);
    setComments(comments);
    props.setToggle(prevToggle => !prevToggle);
    props.switchBox0()
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div className="commFormHeader">
        <div className="commFormLabel">Edit Comment</div>
        <div className="commFormUser">{props?.user?.username}</div>
        </div>
        <div className="inputDiv">
        <input className="commInput" type="text" name="content" value={input.content} onChange={handleChange} />
        <div className="commBtnDiv">
        <button className="commSubmitBtn" onClick={props.switchBox0}>CANCEL</button>
        <button className="commSubmitBtn" type="submit">SUBMIT</button>
        </div>
        </div>
      </form>
    </div>
  )
}