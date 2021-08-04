import React from 'react'
import Layout from "../../components/Layout/Layout";
import { useParams } from 'react-router';
import { useState } from "react"

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

export default function Categories() {
  const [playlist, setPlaylist] = useState(data)
  const { id } = useParams()

  const filterByCategory = (category) => {
    const filtered = playlist.filter((cat) => cat.category === category)
    return filtered
  }
  
  return (
    <Layout>
     <h2>{id}</h2>
      <div className="categoryPlaylist">
      {filterByCategory(id).map((playlist) => {
        return (
          <img src={playlist?.imgURL} alt={playlist.name} />
        )
      })}
      </div>
    </Layout>
  )
}
