import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToggleMenue } from "./utils/appSlice";
import {YOUTUBE_AUTO_SUGGESTIONS_API} from "../constants";
import { cacheResults } from "./utils/searchSlice";
import SelectedQueryContext from "./utils/selectedQueryContext";
import { useContext } from "react";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
;
const { query, setQuery } = useContext(SelectedQueryContext);

  const distatch = useDispatch();

  const ToggleMenueHandeler = () => {
    distatch(setToggleMenue());
  };

  //subscribe to the search
  const searchCache = useSelector((store) => store.search);

  //calling getSuggestion function
  useEffect(() => {
    //timer setup for 200ms

    const timer = setTimeout(() => {
      //checking the cache for search query
      if (searchCache[searchQuery]) {
        //directly setSuggestions form cache
        setSuggestions(searchCache[searchQuery]);
      } else {
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
    
    try {
      const data = await fetch(YOUTUBE_AUTO_SUGGESTIONS_API + searchQuery);
      const json = await data.json();
      //console.log(json[1]);
      setSuggestions(json[1]);

      //& also add suggestions into the cache for further use & reduce api calls
      distatch(
        cacheResults({
          [searchQuery]: json[1],
        })
      );
    } catch (e) {
      console.log(e);
    }
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
      <form
        className="col-span-10 text-center"
        onSubmit={(e) => {
          e.preventDefault();
          setQuery({ query : searchQuery});
        }}
      >
        {/* {console.log(SelectedQuery)} */}
        <input
          className="w-1/2 border border-gray-500 p-2 rounded-l-full "
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
          onScroll={() => setShowSuggestions(false)}
        ></input>
        <button
          className="border border-gray-500 p-2 rounded-r-full"
          onClick={() => {
            setQuery({ query : searchQuery});
            console.log(query)
          }}
        >
          search
        </button>
      </form>

      {showSuggestions && (
        <div className="fixed top-16 left-1/3 w-[35.5rem] bg-white rounded-xl shadow-lg">
          <ul>
            {suggestions.map((s) => (
              <li key={s} className="p-2 hover:bg-gray-100 flex items-center">
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
      <div className="col-span-1 flex justify-center items-baseline  ">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" className="mx-2 " viewBox="0 0 24 24" width="24" focusable="false"><path d="M14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2zm3-7H3v12h14v-6.39l4 1.83V8.56l-4 1.83V6m1-1v3.83L22 7v8l-4-1.83V19H2V5h16z"></path></svg>
      <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" className="mx-2" height="24" viewBox="0 0 24 24" width="24" focusable="false" ><path d="M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm10-2.65V19H4v-1.65l2-1.88v-5.15C6 7.4 7.56 5.1 10 4.34v-.38c0-1.42 1.49-2.5 2.99-1.76.65.32 1.01 1.03 1.01 1.76v.39c2.44.75 4 3.06 4 5.98v5.15l2 1.87zm-1 .42-2-1.88v-5.47c0-2.47-1.19-4.36-3.13-5.1-1.26-.53-2.64-.5-3.84.03C8.15 6.11 7 7.99 7 10.42v5.47l-2 1.88V18h14v-.23z"></path></svg>
     
        <img
          className="h-8 "
          alt="profile"
          src="https://static.thenounproject.com/png/854888-200.png"
        ></img>
      </div>
    </div>
  );
};

export default Header;
