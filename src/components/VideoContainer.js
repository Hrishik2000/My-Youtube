import React, { useEffect, useState,useContext } from 'react'
import {YOUTUBE_API_URL,YOUTUBE_VIDEO_BY_QUERY} from "../constants"
import VideoCard, { AddCard } from './VideoCard';
import { Link } from 'react-router-dom';
import SelectedQueryContext from './utils/selectedQueryContext'



const VideoContainer = () => {
  const [videos,setVideos] =useState([]);
  const [queryResults,setQueryResults] = useState([]);
  const {query} = useContext(SelectedQueryContext);

  useEffect(()=>{
    fetchVideos();
  },[])

 const searchByQuery = async () => {
    const APIwithQuery = YOUTUBE_VIDEO_BY_QUERY.replace("{}", query);
    try {
      const data = await fetch(APIwithQuery);
      const json = await data.json();
      console.log(json.items);
      setQueryResults(json.items);
      
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(()=>{
    searchByQuery()
  },[query])

  const fetchVideos = async ()=>{

    const data = await fetch(YOUTUBE_API_URL);
    const json =  await data.json();
    //console.log(json);
    setVideos(json.items);
    console.log(videos);


  } 

  return (
    <div className='flex flex-wrap justify-around '>
        {/* add card HIGHER ORDER COMPNENT */}
        {/* videos[0] && this check is required as videos is empty for the first time */}
        {videos[0] && <AddCard info ={videos[0]}/>}
      {videos.map((video)=> <Link key={video?.id} to={'watch?v='+video?.id}>
            <VideoCard  info ={video}/>
            </Link>)}
      
    </div>
  )
}

export default VideoContainer
