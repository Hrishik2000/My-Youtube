import React, { useEffect, useState } from 'react'
import {YOUTUBE_API_URL} from "../constants"
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';



const VideoContainer = () => {
  const [videos,setVideos] =useState([]);
  

  useEffect(()=>{
    fetchVideos();
  },[])


  const fetchVideos = async ()=>{

    const data = await fetch(YOUTUBE_API_URL);
    const json =  await data.json();
    //console.log(json);
    setVideos(json.items);
    //console.log(videos);


  } 

  return (
    <div className='flex flex-wrap justify-center  '>
      {videos.map((video)=> <Link key={video?.id} to={'watch?v='+video?.id}>
            <VideoCard  info ={video}/>
            </Link>)}
      
    </div>
  )
}

export default VideoContainer
