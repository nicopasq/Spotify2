import { configureStore } from "@reduxjs/toolkit"
import displayComponentReducer from './components/display/displaySlice'

const store = configureStore({
    reducer:{
        displayComponent: displayComponentReducer
    }
})

export default store