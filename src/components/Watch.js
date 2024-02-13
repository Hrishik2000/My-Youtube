import React from 'react'
import { useDispatch } from 'react-redux';
import {ToggleFalse} from "./utils/appSlice"
//import { YOUTUBE_VIDEO_BY_ID } from '../constants';
import { useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentsContainer';

const Watch = () => {
   
    const dispatch = useDispatch();
    let [searchParams] = useSearchParams();
    let id = searchParams.get("v");
    //console.log(id);
   
    //let YOUTUBE_Vidio_Dynamic_Id= YOUTUBE_VIDEO_BY_ID.replace('{id}', id);
    //console.log(YOUTUBE_Vidio_Dynamic_Id)
    // console.log(YOUTUBE_VIDEO_BY_ID)// cant update it as this has only getter error comes

    
    
        
        dispatch(ToggleFalse());
       // getVideo();

    

    //? By this api i am not getting any clue how to show vidio on webpage using recieved data & not getting anything to put into video tag of HTML
    // const getVideo = async ()=>{

    //     const data = await fetch(YOUTUBE_Vidio_Dynamic_Id);
    //     const json = await data.json();
    //     console.log(json);
    // }

  

    

    
    
  return (
    <div className='m-2'>
     <iframe width="850" height="400" 
     src={"https://www.youtube.com/embed/"+id} 
     title="YouTube video player" 
     frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
     </iframe>
     <CommentContainer/>
    </div>
  )
}

export default Watch
