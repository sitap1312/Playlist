import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "../../services/users";
import { useHistory } from "react-router";

export default function Nav(props) {
  let history = useHistory()

  const handleSignOut = () => {
    signOut();
    props.setUser(null);
    history.push("/")
  };

  return (
    <section className= "navbar-page"> 
    <input type="checkbox" id="nav-check"></input>
        <div className="navbar-logo">   
          <Link to="/" className="navLogoContainer">
            <img className="nav-logo" src="https://i.imgur.com/xidyTP5.png" alt="logo"/>
            <div className="title" >PLAYLISTIFY</div>   
          </Link>
        </div>
        <div className="options"> 
          {props.user ? (
          <>
            <div className="navbar-options">
              <Link className="nav-link" to="/my-account">Hi! {props.user?.username} </Link>
            </div>

            <div className="navbar-options">
              <Link   className="nav-link" to="/create-playlist">Create Playlist</Link>
            </div>

            <div className="navbar-options">
              <Link   className="nav-link" to="/edit-user"> Edit Account </Link>
            </div>

            <div className="navbar-options" >
              <button className="signout-btn" type="submit" onClick={handleSignOut}>SIGN OUT</button>
            </div>
        </>
        ) : (
        <div className="loginButtonContainer">

          <div className="navbar-options">
            <Link  className="loginButtons" to="/sign-up">SIGN UP</Link>
          </div>

          <div className="navbar-options">
            <Link className="loginButtons" to="/sign-in">SIGN IN</Link>
          </div>

        </div>
        )}
      </div>
      </section>
  );
}