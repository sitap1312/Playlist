import React from 'react'
import Layout from "../../components/Layout/Layout";
// import { getUSer, updateUser } from "../../services/users";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

export default function EditUser() {
  let history = useHistory()
  const { id } = useParams();
  const [user, setUser] = useState({})

  const data = {
      username: "",
      email: "",
      password: "",
  }
  
  useEffect(() => {
    const fetchUser = async () => {
      // const user = await getUser(id);
      setUser(user);
      setFormData(user)
    }
    fetchUser();
  }, [id])

  const [formData, setFormData] = useState(data);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((user) => ({
      ...user,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    // await updateUser(id, formData)
    history.push(`/`)
  }

  return (
      <Layout>
      Edit User
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <br />
        <input
          id="username"
          type="text"
          value={formData.username}
          onChange={handleInput}
        />
        <br />
        <label>Email</label>
        <br />
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={handleInput}
        />
        <br />
        <label>Password</label>
        <br />
        <input
          id="password"
          type="password"
          value={formData.password}
          onChange={handleInput}
        />
        <br />
        <button>Update</button>
      </form>
    </Layout>
  )
}
