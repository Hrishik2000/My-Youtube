import React from 'react'


const VideoCard = ({info}) => {
    //console.log(info)

    const publishedAtTime = info?.snippet?.publishedAt;
    const views = info?.statistics?.viewCount;
    const title=info?.snippet?.title;
    

    function formatViews(views) {
        if (views >= 1000000) {
            return (views / 1000000).toFixed(1) + 'M';
        } else if (views >= 1000) {
            return (views / 1000).toFixed(1) + 'K';
        } else {
            return views.toString();
        }
    }
    function timeSinceUpload(publishedAtTime) {
        const currentDate = new Date();
        const uploadDate = new Date(publishedAtTime);
        
        const seconds = Math.floor((currentDate - uploadDate) / 1000);
        
        let interval = Math.floor(seconds / 31536000);
        
        if (interval > 1) {
            return `${interval} years ago`;
        }
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
            return `${interval} months ago`;
        }
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
            return `${interval} days ago`;
        }
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
            return `${interval} hours ago`;
        }
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
            return `${interval} minutes ago`;
        }
        return `${Math.floor(seconds)} seconds ago`;
    }
    
    function limitTitle(title, limit) {
        const words = title.split(' ');
        if (words.length <= limit) {
            return title;
        } else {
            return words.slice(0, limit).join(' ') + '...';
        }
    }
    
    
    const limitedTitle = limitTitle(title, 5); // Limiting to 5 words
    //console.log(limitedTitle);
    
    const formattedViews = formatViews(views);
    //console.log(formattedViews);
   
    
    const timeAgo = timeSinceUpload(publishedAtTime);
    //console.log(timeAgo);
    

   
  return (
    
    <div className=' h-64 w-64  shadow-xl rounded-xl cursor-pointer m-1'>
      <img className={`rounded-xl`} alt='thumbnail' src={info?.snippet?.thumbnails?.medium?.url}></img>
      <div className=' flex m-2 '>
            <img alt="channelLogo" className='h-10 w-10 rounded-full' src={info?.snippet?.thumbnails?.medium?.url}></img>
            <div className='mx-2'>
                 <h1 className='font-bold'>{limitedTitle}</h1>
                <h3 className='text-[0.7rem] text-gray-500'>{info?.snippet?.channelTitle}</h3>
                <h3 className='text-[0.7rem] text-gray-500'>{formattedViews} views <span>-{timeAgo}</span></h3>
            </div>
           
      </div>
    </div>
    
  )
}

//higher order component
// a component which takes another compoent as argument or returns a modified version of another component

export const AddCard=({info})=>{
    return(
        <>
            <div className='border border-red-700'>
                <VideoCard info ={info}/>
            </div>

        </>
    )
}

export default VideoCard;
