import { createSlice } from "@reduxjs/toolkit"
import Profile from "../Profile"

export const displaySlice = createSlice({
    name: "display",
    initialState:{
        component: <Profile/>
    },
    reducers:{
        setComponent: (state, action) => {
            state.component = action.payload
        }
    }
})

export default  displaySlice.reducer;