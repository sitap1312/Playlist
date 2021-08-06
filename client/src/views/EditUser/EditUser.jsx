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



  // useEffect(() => {
  //   editUser()
  // }, [props.user?.id])



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
  const handleDelete = async () => {
    await deleteUser(props.user?.id)
    handleSignOut()
    history.push("/")
  }

  return (
      <Layout user={props.user} setUser={props.setUser}>
      Edit User
      <br/>
      <button onClick={handleDelete}>Delete Account</button>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <br />
        <input
          placeholder={props.user?.username}
          name="username"
          type="text"
          value={formData.username}
          onChange={handleInput}
          required={true}
        />
        <br />
        <label>Email</label>
        <br />
        <input
          placeholder={props.user?.email}
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInput}
        />
        <br />
        <label>Password</label>
        <br />
        <input
          name="password"
          type="password"
          value={formData.password_digest}
          onChange={handleInput}
        />
        <br />
        <button>Update</button>
      </form>
    </Layout>
  )
}
