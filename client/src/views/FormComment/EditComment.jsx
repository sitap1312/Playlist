import { useState, useEffect } from "react";
import { updateComment, getComment } from "../../services/comments.js";

export default function EditComment(props) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  const fetchData = async () => {
    const res = await getComment(props.commId._id);
    setData(res);
  }

  let defaultInput = {
    content: data.content,
    playlistId: ""
  };

  useEffect(() => {
    setInput(defaultInput);
    // eslint-disable-next-line
  }, [data]);

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
    await updateComment(id, fields);
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