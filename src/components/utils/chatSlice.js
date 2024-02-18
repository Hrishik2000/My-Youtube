import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "../../constants";

const chatSlice = createSlice({
    name: "chat",
    initialState:{
        messages: []
    },
    reducers: {
        setMessages: (state,actions)=>{
            // remove 1 message from top
            if(state.messages.length>OFFSET_LIVE_CHAT)
            state.messages.shift();
            //add a new messaage at bottom
            state.messages.push(actions.payload)
        },

       
    }
})

export const {setMessages} = chatSlice.actions;
export default chatSlice.reducer;