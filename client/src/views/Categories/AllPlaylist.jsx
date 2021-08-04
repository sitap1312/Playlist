import React from 'react'
import Layout from "../../components/Layout/Layout";
import { useState } from "react"
import { Link } from "react-router-dom"

let data = [
  {
    imgURL: "https://ninjatune.net/images/artists/thundercat-main.jpg",
    name: "THUNDERCAT",
    category: "Music",
  },
  {
    imgURL: "https://pyxis.nymag.com/v1/imgs/3ae/a5b/e1a1c69441d44c72a86e1120d71f297423-04-mac-miller-2.rvertical.w570.jpg",
    name: "MAC MILLER",
    category: "Gaming"
  },
  { imgURL: "https://s1.ticketm.net/dam/a/384/2dbd2c80-4042-4429-b5fe-563f7227b384_1477701_TABLET_LANDSCAPE_LARGE_16_9.jpg", name: "JOHN MAYER",
  category: "Sports" }
] 

export default function AllPlaylist() {
  const [playlist, setPlaylist] = useState(data)

  
  return (
    <Layout>
      <h2>Discover</h2>
     <div className="discoverPlaylist">
      {playlist.map((playlist) => {
        return (
          <Link to="/preview/:id"><img src={playlist?.imgURL} alt={playlist.name} /></Link>
        )
      })}
      </div>
    </Layout>
  )
}
