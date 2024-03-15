import { configureStore } from "@reduxjs/toolkit"
import tokenDataReducer from "../components/pages/tokenDataSlice"

export default configureStore({
    reducer: {
        tokenData: tokenDataReducer
    }
})