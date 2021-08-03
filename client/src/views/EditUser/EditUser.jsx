import React from 'react'
import Layout from "../../components/Layout/Layout";

export default function EditUser() {
  return (
      <Layout>
      Edit User
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <br />
        <input
          id="username"
          type="text"
          value={input.username}
          onChange={handleInput}
        />
        <br />
        <label>Email</label>
        <br />
        <input
          id="email"
          type="email"
          value={input.email}
          onChange={handleInput}
        />
        <br />
        <label>Password</label>
        <br />
        <input
          id="password"
          type="password"
          value={input.password}
          onChange={handleInput}
        />
        <br />
        <button>Update</button>
      </form>
    </Layout>
  )
}
