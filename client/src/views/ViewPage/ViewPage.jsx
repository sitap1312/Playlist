import React from 'react'
import Layout from "../../components/Layout/Layout";
import ReactPlayer from 'react-player'

export default function ViewPage() {
      return (
        <Layout>
          <h1></h1>
          <ReactPlayer
            className='react-player'
            url='https://www.youtube.com/watch?v=BHACKCNDMW8'
            // url='https://soundcloud.com/fearloathing/lofi-house-mix-1988-the-stoner-house-edition'
            width='100%'
            height='50vh'
          />
          <div>
            Playlist
            
          </div>
        </Layout>
  )
}

