import {configureStore} from "@reduxjs/toolkit"
import shopingSlice from "../State Management/shopingSlice"

export const store = configureStore({
    reducer : {
        app : shopingSlice
    }
})