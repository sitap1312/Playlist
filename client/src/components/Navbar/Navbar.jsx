import "./Navbar.css"
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
   
        <div className="navbar-logo">   
        <Link to="/" className="navLogoContainer">
          <img className="nav-logo" src="https://i.imgur.com/xidyTP5.png" alt="logo"/>
          <div lassName="title" >PLAYLISTIFY</div>
              
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
        <div className="sign-btns">
          <Link  className="nav-link" to="/sign-up">Sign Up </Link>
          <Link   className="nav-link" to="/sign-in">Sign In</Link>
        </div>
        )}
        </div>
      </section>
  );
}