//step 4

import {configureStore} from '@reduxjs/toolkit'
// import authReducer from './authSlice'


const store = configureStore({
    reducer: {
            // auth: authReducer   // ✅ register your slice reducer


    }
})

export default store;