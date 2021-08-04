import React from 'react'
import Layout from "../../components/Layout/Layout";
import ReactPlayer from 'react-player'
import { useState } from "react"
import AllComments from '../AllComments/AllComments';

export default function ViewPage() {

  // this is working with the data array
  const data =
    [
      "https://www.youtube.com/watch?v=vVi4sHak14Q",
      "https://www.youtube.com/watch?v=7hEPj13PUGc",
      "https://www.youtube.com/watch?v=F2QyoxdGvbc",
      "https://www.youtube.com/watch?v=oDlVYsghGA0"
    ];
  
    const playlistItems = data.map((link, index) =>
    <li key={index}>
      {link}
    </li>
  );
    
    return (
        <Layout>
          <h1></h1>
        <ReactPlayer
          className='react-player'
          controls={true}
          playing url={data}
          loop={true}
          width='100%'
          height='50vh'
          />
          <div>
          <h3>Playlist Items</h3>
          <ul>{playlistItems}</ul>
          <AllComments />
          </div>
        </Layout>
  )
}

// for the yellow warning for dev tools: https://stackoverflow.com/questions/61339968/devtools-failed-to-load-sourcemap-could-not-load-content-for-chrome-extension