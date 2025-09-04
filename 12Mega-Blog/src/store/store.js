//step 4

// import {configureStore} from '@reduxjs/toolkit'
// // import authReducer from './authSlice'


// const store = configureStore({
//     reducer: {
//             // auth: authReducer   // ✅ register your slice reducer


//     }
// })

// export default store;


import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';

const store = configureStore({
    reducer: {
        auth : authSlice,
        //TODO: add more slices here for posts
    }
});


export default store;