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
        },
        logout: (state) =>{  // actin can also happen but for logout not necessary
            state.status = false;
            state.userData = null;
        }
    }
})

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;