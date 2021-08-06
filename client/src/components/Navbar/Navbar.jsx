import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "../../services/users";

export default function Nav(props) {
  const handleSignOut = () => {
    signOut();
    props.setUser(null);
  };

  return (
    <div>
      <Link to="/">PLAYLISTIFY</Link>
      {props.user ? (
        <>
          <Link to="/my-account">Hi!, {props.user?.username}</Link>
          <Link to="/create-playlist">CREATE PLAYLIST</Link>
          <button onClick={handleSignOut}>Sign Out</button>
          <Link to="/edit-user">Edit account</Link>

        </>
      ) : (
        <div>
          <Link to="/sign-up">Sign Up</Link>
          <Link to="/sign-in">Sign In</Link>
        </div>
      )}
    </div>
  );
}