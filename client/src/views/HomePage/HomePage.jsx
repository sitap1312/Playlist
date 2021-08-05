import { useState, useEffect } from 'react'
import Layout from "../../components/Layout/Layout"
import { Link } from "react-router-dom"
// <<<<<<< test
// import { getPlaylist } from "../../services/playlists.js"

// let data = [
//   {
//     imgURL: "https://ninjatune.net/images/artists/thundercat-main.jpg",
//     name: "THUNDERCAT", 
//     category: "Music",
//   },
//   {
//     imgURL: "https://pyxis.nymag.com/v1/imgs/3ae/a5b/e1a1c69441d44c72a86e1120d71f297423-04-mac-miller-2.rvertical.w570.jpg",
//     name: "MAC MILLER",
//     category: "Gaming"
//   },
//   { imgURL: "https://s1.ticketm.net/dam/a/384/2dbd2c80-4042-4429-b5fe-563f7227b384_1477701_TABLET_LANDSCAPE_LARGE_16_9.jpg", name: "JOHN MAYER",
//   category: "Sports" }
// ]  

// export default function HomePage(props) {
//   const [playlist, setPlaylist] = useState(data)
  


// =======

// let data = [
//   {
//     imgURL: "https://ninjatune.net/images/artists/thundercat-main.jpg",
//     name: "THUNDERCAT", 
//     category: "Music",
//   },
//   {
//     imgURL: "https://pyxis.nymag.com/v1/imgs/3ae/a5b/e1a1c69441d44c72a86e1120d71f297423-04-mac-miller-2.rvertical.w570.jpg",
//     name: "MAC MILLER",
//     category: "Gaming"
//   },
//   { imgURL: "https://s1.ticketm.net/dam/a/384/2dbd2c80-4042-4429-b5fe-563f7227b384_1477701_TABLET_LANDSCAPE_LARGE_16_9.jpg", name: "JOHN MAYER",
//   category: "Sports" }
// ]  

// export default function HomePage() {
//   const [playlist, setPlaylist] = useState(data)
  
// >>>>>>> userSita
  
  const filterByCategory = (category) => {
    const filtered = playlist.filter((cat) => cat.category === category)
    return filtered
  }
  

  return (
// <<<<<<< test
//     <Layout user={props.user} setUser={props.setUser} >
// =======
//     <Layout >
// >>>>>>> userSita
      <h1>PLAYLISTIFY</h1> 
      <Link to="/preview/:id"><button>PREVIEW</button></Link>
      <h2>Discover</h2> <Link to="/Discover-all">See more</Link>
      <div className="discoverPlaylist">
      {playlist.map((playlist) => {
        return (
          <Link to="/preview/:id"><img src={playlist?.imgURL} alt={playlist.name} /></Link>
        )
      })}
      </div>
      <h2>Music</h2> <Link to="/categories/Music">See more</Link>
      <div className="musicPlaylist">
      {filterByCategory("Music").map((playlist) => {
        return (
          <Link to="/preview/:id"><img src={playlist?.imgURL} alt={playlist.name} /></Link>
        )
      })}
      </div>
      <h2>Videos</h2> <Link to="/categories/Videos">See more</Link>
      <div className="videoPlaylist">
      {filterByCategory("Videos").map((playlist) => {
        return (
          <Link to="/preview/:id"><img src={playlist?.imgURL} alt={playlist.name} /></Link>
        )
      })}
      </div>
      <h2>Gaming</h2> <Link to="/categories/Gaming">See more</Link>
      <div className="videoPlaylist">
      {filterByCategory("Gaming").map((playlist) => {
        return (
          <Link to="/preview/:id"><img src={playlist?.imgURL} alt={playlist.name} /></Link>
        )
      })}
      </div>
      <h2>Education</h2> <Link to="/categories/Education">See more</Link>
      <div className="videoPlaylist">
      {filterByCategory("Education").map((playlist) => {
        return (
          <Link to="/preview/:id"><img src={playlist?.imgURL} alt={playlist.name} /></Link>
        )
      })}
      </div>
      <h2>Sports</h2> <Link to="/categories/Sports">See more</Link>
      <div className="videoPlaylist">
      {filterByCategory("Sports").map((playlist) => {
        return (
          <Link to="/preview/:id"><img src={playlist?.imgURL} alt={playlist.name} /></Link>
        )
      })}
      </div>
      <h2>Entertainment</h2> <Link to="/categories/Entertainment">See more</Link>
      <div className="videoPlaylist">
      {filterByCategory("Entertainment").map((playlist) => {
        return (
          <Link to="/preview/:id"><img src={playlist?.imgURL} alt={playlist.name} /></Link>
        )
      })}
      </div>
      <h2>Family</h2> <Link to="/categories/Family">See more</Link>
      <div className="videoPlaylist">
      {filterByCategory("Family").map((playlist) => {
        return (
          <Link to="/preview/:id"><img src={playlist?.imgURL} alt={playlist.name} /></Link>
        )
      })}
      </div>
    </Layout>
  );
}
