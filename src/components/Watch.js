import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ToggleFalse } from "./utils/appSlice";
//import { YOUTUBE_VIDEO_BY_ID } from '../constants';
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentsContainer";
import ChatContainer from "./ChatContainer";
import { setMessages } from "./utils/chatSlice";

const Watch = () => {
  const [liveMessage, setLiveMessage] = useState("");
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
    <div className="m-2">
      <div className="flex ">
        <iframe
          width="1050"
          height="500"
          src={"https://www.youtube.com/embed/" + id}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div>
          <h1 className="font-bold px-2 py-3">Live Chat</h1>
          <div className="flex h-[455px] w-[400px] bg-slate-100  mx-2 overflow-y-scroll rounded-md flex-col-reverse">
            <ChatContainer />
          </div>
          <form
            className="text-center"
            onSubmit={(e) => {
              e.preventDefault(); //obstruct default behaviour of form when press enter
              //console.log("submitted " + liveMessage);
              dispatch(
                // adding message from input into the chatSlice
                setMessages({
                  name: "Hrishik",
                  message: liveMessage,
                })
              );

              //setLiveMessage("");
              
              
            }}
          >
            <input
              type="text"
              className="Border w-[300px] border-black p-2  bg-slate-300 mx-2 rounded-md"
              onChange={(e) => {
                setLiveMessage(e.target.value);
              }}
              placeholder="write message here"
            ></input>
            {/* {console.log(message)} */}
            <button type="button" className=" bg-green-400 p-2 rounded-md"
            onClick={()=>{
              dispatch(
                // adding message from input into the chatSlice
                setMessages({
                  name: "Hrishik",
                  message: liveMessage,
                })
              );

             
            
            }}>
              send
            </button>
          </form>
        </div>
      </div>

      <CommentContainer />
    </div>
  );
};

export default Watch;
