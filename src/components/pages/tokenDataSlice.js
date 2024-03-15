import { createSlice } from "@reduxjs/toolkit";

export const tokenDataSlice = createSlice({
    name:'tokenData',
    initialState: {
        
    },
    reducers:{
        setTokenData: (state, action) => {
            state.value = action.payload
        }
    }
})

export default tokenDataSlice.reducer