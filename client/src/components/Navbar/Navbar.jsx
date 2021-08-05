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
          <div>{props.user?.username}</div>
          <Link to="/create-playlist">CREATE PLAYLIST</Link>
          <button onClick={handleSignOut}>Sign Out</button>
        </>
      ) : (
        <div>
          <Link to="/sign-up">Sign Up</Link>
          <Link to="/sign-in">Sign In</Link>
          <Link to="/create-playlist">Create Playlist</Link>
        </div>
      )}
    </div>
  );
}