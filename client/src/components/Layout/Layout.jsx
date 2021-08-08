import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Layout.css'

export default function Layout(props) {
  return (
    <div className="Layout-Page">
      <Navbar user={props.user} setUser={props.setUser} />
      <div>{props.children}</div>
      <Footer />
    </div>
  )
}


