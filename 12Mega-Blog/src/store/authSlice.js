import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    status: false,
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) =>{
            state.status = true;
            state.userData = action.payload.userData; //state.userData = action.payload// name same so no difference
        }
    }
})

export default authSlice.reducer;