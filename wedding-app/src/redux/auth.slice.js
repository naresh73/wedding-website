import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name : "auth",
    initialState : {
     isLoggedIn : false
    },    
    reducers : {
        loginUser : (state) => {
            state.isLoggedIn = true
        }
    }
})

export const { loginUser } = authSlice.actions;

export default authSlice.reducer

