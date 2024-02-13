import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {},
    reducers:{
        cacheResults: (state,action)=>{
            //spread state & payload object &  assign it in state object
            //state = { ...state, ...action.payload }; //not know why not working by this new mentod
            state = Object.assign(state, action.payload);//old way
        },
    },

})

export  const {cacheResults}  = searchSlice.actions;
export default searchSlice.reducer;