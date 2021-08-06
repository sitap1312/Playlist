import { useState } from "react"
import { createComment } from "../../services/comments";
import { useHistory } from "react-router-dom";

export default function NewComment(props) {
  let history = useHistory()
  let id = (props.user?.id)
  let defaultInput = {
    content: "",
    user_id: id,
  }
  const [input, setInput] = useState(defaultInput)

  function handleChange(event) {
    let { name, value } = event.target
    setInput(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }
  async function handleSubmit(event) {
    event.preventDefault()
    await createComment(input)
    history.push("/")
    //console.log(input)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <br />
        <h4>{props?.user?.username}</h4>
        <label>Add Comment</label>
        <br />
        <input type="text" name="content" value={input.content} onChange={handleChange} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}