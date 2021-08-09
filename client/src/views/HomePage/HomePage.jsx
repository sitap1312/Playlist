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
  
  const scrollTop = () => {
    window.scrollTo(0,0)
  }

  return (
    <Layout user={props.user} setUser={props.setUser}>
      <div className="homepage">
        <div className="categoryTitle">
          <Link className="seeMore" to="/Discover-all"><h2 onClick={scrollTop} className="categoryDiscover">Discover</h2></Link>
          <Link className="seeMore" to="/Discover-all" onClick={scrollTop} >See more</Link>
        </div>
      <div className="discoverPlaylist">
      {playlist.map((playlist, index) => {
        return (
          <PlaylistCard key={index} playlist={playlist} />
        )
      })}
        </div>
      <div className="categoryTitle">
      <Link className="seeMore" to="/categories/Music"><h2 className="categoryMusic" onClick={scrollTop} >Music</h2></Link><Link className="seeMore"  to="/categories/Music" onClick={scrollTop} >See more</Link>
      </div>
      <div className="discoverPlaylist">
      {filterByCategory("Music").map((playlist, index) => {
        return (
          <PlaylistCard key={index} playlist={playlist} />
        )
      })}
        </div>
      <div className="categoryTitle">
          <Link className="seeMore" to="/categories/Videos"><h2 className="categoryVideos" onClick={scrollTop} >Videos</h2></Link>
          <Link className="seeMore" to="/categories/Videos" onClick={scrollTop} >See more</Link>
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
        <Link className="seeMore"  to="/categories/Gaming"><h2 className="categoryGaming" onClick={scrollTop} >Gaming</h2></Link>
        <Link className="seeMore" to="/categories/Gaming" onClick={scrollTop}>See more</Link>
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
          <Link className="seeMore" to="/categories/Education"><h2 className="categoryEducation" onClick={scrollTop}>Education</h2></Link>
          <Link className="seeMore" to="/categories/Education" onClick={scrollTop}>See more</Link>
      </div>
          <div className="discoverPlaylist">
      {filterByCategory("Education").map((playlist, index) => {
        return (
          <PlaylistCard key={index} playlist={playlist} />
        )
      })}
        </div>
        <div className="categoryTitle">
          <Link className="seeMore" to="/categories/Sports"><h2 className="categorySports" onClick={scrollTop}>Sports</h2></Link>
          <Link className="seeMore" to="/categories/Sports" onClick={scrollTop} >See more</Link>
        </div>
      <div className="discoverPlaylist">
      {filterByCategory("Sports").map((playlist, index) => {
        return (
          <PlaylistCard key={index} playlist={playlist} />
        )
      })}
        </div>
        <div className="categoryTitle">
          <Link className="seeMore" to="/categories/Entertainment"><h2 className="categoryEntertainment" onClick={scrollTop} >Entertainment</h2></Link>
          <Link className="seeMore" to="/categories/Entertainment" onClick={scrollTop}>See more</Link>
          </div>
      <div className="discoverPlaylist">
      {filterByCategory("Entertainment").map((playlist, index) => {
        return (
          <PlaylistCard key={index} playlist={playlist} />
        )
      })}
        </div>
        <div className="categoryTitle">
          <Link className="seeMore" to="/categories/Family"><h2 className="categoryFamily" onClick={scrollTop} >Family</h2></Link>
          <Link className="seeMore" to="/categories/Family" onClick={scrollTop} >See more</Link>
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