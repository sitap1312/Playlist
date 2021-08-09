import React from 'react'
import Layout from "../../components/Layout/Layout";
import { getUser, updateUser } from "../../services/users";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { signOut, deleteUser } from '../../services/users';

export default function EditUser(props) {
  let history = useHistory()
  const { id } = useParams();
  const [current, setCurrent] = useState({})
  const [loading, setLoading] = useState(false)


  const defaultInput = {
    username: "",
    email: "",
    password: "",
  }
  const [formData, setFormData] = useState(defaultInput);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((user) => ({
      ...user,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    await updateUser(props.user?.id,formData)
    handleSignOut()
    history.push(`/sign-in`)
  }
  const handleSignOut = () => {
    signOut();
    props.setUser(null);
  };

  const handleDelete =async () => {
    let entry = prompt("Please enter email address to confirm DELETE:", "");
    if (entry === null || entry === "") {
      alert("NO INPUT - DELETION CANCELLED")
    } else if (entry === props.user?.email) {
      alert("DELETION COMPLETE")
    await deleteUser(props.user?.id)
    handleSignOut()
    history.push("/")
    } else {
      alert("INCORRECT PASSCODE - TRY AGAIN TO CONFIRM")
    }
  }

  return (
    <Layout user={props.user} setUser={props.setUser}>
      <section className="signup-page">
        <div className="signup-form">
          <div className="login-title">EDIT ACCOUNT</div>
          <br />

          <form onSubmit={handleSubmit}>

            <input
              className="login-input"
              placeholder={props.user?.username}
              name="username"
              type="text"
              value={formData.username}
              onChange={handleInput}
              required={true} />
            <br />

            <br />
            <input
              className="login-input"
              placeholder={props.user?.email}
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInput} />
            <br />

            <br />
            <input
              className="login-input"
              name="password"
              type="password"
              value={formData.password_digest}
              onChange={handleInput} placeholder="••••••••••••" />
            <br />

            <div>
            <button className="signup-btn" type="submit">UPDATE</button>
            </div>

            <br />

            <div>
              <button className="delete-btn" type="submit" onClick={handleDelete}>DELETE ACCOUNT</button>
            </div>
            </form>
          </div>
        </section>
    </Layout>
  )
}
