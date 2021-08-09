import { useState, useEffect } from 'react'
import Layout from "../../components/Layout/Layout"
import { Link } from "react-router-dom"
import { getAllPlaylist } from "../../services/playlists.js"
import PlaylistCard from '../PlaylistCard/PlaylistCard'
import "./HomePage.css"


export default function HomePage(props) {
  const [playlist, setPlaylist] = useState([])
  

  useEffect(() => {
    fetchData()
  }, [])
  
  const fetchData = async () => {
    const res = await getAllPlaylist()
    setPlaylist(res)
  }

  
  const filterByCategory = (category) => {
    const filtered = playlist.filter((cat) => cat.category[0] === category)
    return filtered
  }
  

  return (
    <Layout user={props.user} setUser={props.setUser}>
      <div className="homepage">
        <div className="categoryTitle">
          <h2 className="categoryDiscover">Discover</h2> <Link className="seeMore" to="/Discover-all">See more</Link>
        </div>
      <div className="discoverPlaylist">
      {playlist.map((playlist, index) => {
        return (
          <PlaylistCard key={index} playlist={playlist} />
        )
      })}
        </div>
      <div className="categoryTitle">
        <h2 className="categoryMusic" >Music</h2> <Link className="seeMore"  to="/categories/Music">See more</Link>
      </div>
      <div className="discoverPlaylist">
      {filterByCategory("Music").map((playlist, index) => {
        return (
          <PlaylistCard key={index} playlist={playlist} />
        )
      })}
        </div>
      <div className="categoryTitle">
        <h2 className="categoryVideos">Videos</h2> <Link className="seeMore"  to="/categories/Videos">See more</Link>
      </div>
          <div className="discoverPlaylist">
      {filterByCategory("Videos").map((playlist, index) => {
        return (
          <PlaylistCard key={index} playlist={playlist} />
        )
      })}
        </div>
        <div>
        <div className="categoryTitle">
      <h2 className="categoryGaming">Gaming</h2> <Link className="seeMore"  to="/categories/Gaming">See more</Link>
      </div>
          <div className="discoverPlaylist">
      {filterByCategory("Gaming").map((playlist, index) => {
        return (
          <PlaylistCard key={index} playlist={playlist} />
        )
      })}
          </div>
          </div>
        <div className="categoryTitle">
      <h2 className="categoryEducation">Education</h2> <Link className="seeMore"  to="/categories/Education">See more</Link>
      </div>
          <div className="discoverPlaylist">
      {filterByCategory("Education").map((playlist, index) => {
        return (
          <PlaylistCard key={index} playlist={playlist} />
        )
      })}
        </div>
        <div className="categoryTitle">
      <h2 className="categorySports">Sports</h2> <Link className="seeMore"  to="/categories/Sports">See more</Link>
        </div>
      <div className="discoverPlaylist">
      {filterByCategory("Sports").map((playlist, index) => {
        return (
          <PlaylistCard key={index} playlist={playlist} />
        )
      })}
        </div>
        <div className="categoryTitle">
          <h2 className="categoryEntertainment">Entertainment</h2> <Link className="seeMore"  to="/categories/Entertainment">See more</Link>
          </div>
      <div className="discoverPlaylist">
      {filterByCategory("Entertainment").map((playlist, index) => {
        return (
          <PlaylistCard key={index} playlist={playlist} />
        )
      })}
        </div>
        <div className="categoryTitle">
          <h2 className="categoryFamily">Family</h2> <Link className="seeMore"  to="/categories/Family">See more</Link>
          </div>
      <div className="discoverPlaylist">
      {filterByCategory("Family").map((playlist, index) => {
        return (
          <PlaylistCard key={index} playlist={playlist} />
        )
      })}
        </div>
      </div>
    </Layout>
  );
}