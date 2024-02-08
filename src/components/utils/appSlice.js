import { createSlice } from "@reduxjs/toolkit";


const appSlice = createSlice({

    name: "app" ,

    initialState:{
        //bool varible to  check current state
        ToggleMenue : true,
        
        
    },

    reducers:{
        setToggleMenue : (state)=>{
            state.ToggleMenue  = !state.ToggleMenue ;
        },
        ToggleFalse : (state)=>{
            state.ToggleMenue  = false ;
        }
    },

});

export const {setToggleMenue,ToggleFalse} = appSlice.actions;
export default appSlice.reducer;
