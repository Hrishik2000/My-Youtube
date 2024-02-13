import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToggleMenue } from "./utils/appSlice";
import { YOUTUBE_AUTO_SUGGESTIONS_API } from "../constants";
import {cacheResults} from "./utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  //console.log(searchQuery);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const distatch = useDispatch();
  

  const ToggleMenueHandeler = () => {
    distatch(setToggleMenue());
  };

  //subscribe to the search
  const searchCache = useSelector(store => store.search)

  //calling getSuggestion function
  useEffect(() => {
    //timer setup for 200ms

    
    const timer = setTimeout(() => {
      //checking the cache for search query
      if(searchCache[searchQuery]){
        //directly setSuggestions form cache
        setSuggestions(searchCache[searchQuery]);
      }else{
        //make api call to get suggestions
        getSuggestion();
      }
     
    }, 200);

    // this return will only call in component unmounting phase
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  /*
    ****method 1  to impliment debounsing (using setTimeOut())***

    key - i
      render the component
      useEffect will called
      timer is setup for 200ms
    
    key - ip
      un-mount the previous component (from return clearTimeOut() called & previous timer is vanished)
      re-render the component
      useEffect will called
      new-timer is setuped for 200ms


    if no key is pressed before 200ms
    then after completion of 200ms 
      setTimeout(200)ms makes an api call

  */

  //getSuggestion Debounsing used for 200ms;
  const getSuggestion = async () => {
    const data = await fetch(YOUTUBE_AUTO_SUGGESTIONS_API + searchQuery);
    const json = await data.json();
    //console.log(json[1]);
    setSuggestions(json[1]);

    //& also add suggestions into the cache for further use & reduce api calls
    distatch(cacheResults({
      [searchQuery] : json[1],
    }))
  };

  // Attach scroll event listener to document to hide suggestions on scroll
  useEffect(() => {
    const scrollHandler = () => {
      setShowSuggestions(false);
    };

    document.addEventListener("scroll", scrollHandler);

    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <div className="grid grid-flow-col m-2 shadow p-2">
      <div className="flex h-8 col-span-1  ">
        <img
          onClick={() => ToggleMenueHandeler()}
          className="p-1 cursor-pointer "
          alt="menue"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
        ></img>
        <a href="/">
          <img
            className="mx-2 p-1 h-8"
            alt="logo"
            src="https://vectorseek.com/wp-content/uploads/2021/01/YouTube-Logo-Vector.png"
          ></img>
        </a>
      </div>
      <div className="col-span-10 text-center">
        <input
          className="w-1/2 border border-gray-500 p-2 rounded-l-full "
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
          onScroll={() => setShowSuggestions(false)}
        ></input>
        <button className="border border-gray-500 p-2 rounded-r-full">
          search
        </button>
      </div>

      {showSuggestions && (
        <div className="fixed top-16 left-1/3 w-[35.5rem] bg-white rounded-xl shadow-lg">
          <ul>
            {suggestions.map((s) => (
              <li
                key={s}
                className="p-2 hover:bg-gray-100 flex items-center"
              >
                <img
                  className="h-4 w-6 mr-2"
                  alt="searchlogo"
                  src="https://www.pngitem.com/pimgs/m/75-750830_search-icon-search-clipart-png-image-free-download.png"
                ></img>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="col-span-1 ">
        <img
          className="h-8"
          alt="profile"
          src="https://static.thenounproject.com/png/854888-200.png"
        ></img>
      </div>
    </div>
  );
};

export default Header;
