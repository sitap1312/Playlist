import { useState, useEffect } from 'react'
import Layout from "../../components/Layout/Layout"
import { Link } from "react-router-dom"
import { getAllPlaylist } from "../../services/playlists.js"

export default function HomePage(props) {
  const [playlist, setPlaylist] = useState([])
  

  useEffect(() => {
    fetchData()
  }, [])
  
  const fetchData = async () => {
    const res = await getAllPlaylist()
    console.log(res)
    setPlaylist(res)
  }
  
  const filterByCategory = (category) => {
    const filtered = playlist.filter((cat) => cat.category[0] === category)
    return filtered
  }
  

  return (
    <Layout user={props.user} setUser={props.setUser} >
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
      {filterByCategory("Video").map((playlist) => {
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
