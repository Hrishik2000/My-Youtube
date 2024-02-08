import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Sidebar = () => {

  const isMenueOpen = useSelector(store=>store.app.ToggleMenue)

  if(!isMenueOpen) return null;
  
  return (
    <div className='border border-grey rounded-xl px-6 m-3 ' >
      <ul className=''>
        <Link to={"/"}><li>Home</li></Link>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <h1 className='font-bold'>You</h1>
      <ul>
      <li>Your channel</li>
      <li>History</li>
      <li>Your videos</li>
      <li>Watch Later</li>
      <li>Show More</li>
      </ul>

      <h1 className='font-bold'>Subscriptions</h1>
      <ul>
      <li>Tricky Man</li>
      <li>Chai aur code</li>
      <li>Namase javascript</li>
      <li>GeeksforGeeks</li>
      <li>Online Tutorials</li>
      </ul>
      <h1 className='font-bold'>Explore</h1>
      <ul>
      <li>Trending</li>
      <li>Shopping</li>
      <li>Music</li>
      <li>Films</li>
      <li>Live</li>
      <li>Gaming</li>
      <li>News</li>
      <li>Sport</li>
      <li>Learing</li>
      <li>Podcasts</li>
     
      </ul >
      <h1 className='font-bold'>More from YouTube</h1>
      <ul>
      <li>Youtube Premium</li>
      <li>YouTube Studio</li>
      <li>YouTube Music</li>
      <li>YouTube Kids</li>
      </ul>

      <div>
      <h1 className='font-bold'>Setting</h1>
      <h1 className='font-bold'>Report history</h1>
      <h1 className='font-bold'>Help</h1>
      <h1 className='font-bold'>Send-feedback</h1>
      </div>
      
    </div>
  )
}

export default Sidebar;
