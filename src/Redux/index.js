import {  configureStore }  from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import authSlice from './authSlice'

import BlogSlice from './BlogSlice'


const store = configureStore({
    reducer: {
        auth:authSlice,
        blog:BlogSlice,
    },
    middleware: [thunk],
    // middleware: [thunk, logger],

       
})
export default store