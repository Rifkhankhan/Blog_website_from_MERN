import {  configureStore }  from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import authSlice from './authSlice'
import ProductSlice from './ProductSlice'


const store = configureStore({
    reducer: {
        product:ProductSlice,
        auth:authSlice,
  
        blog:ProductSlice,
    },
    middleware: [thunk],
    // middleware: [thunk, logger],

       
})
export default store