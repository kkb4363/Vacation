import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
    name: 'user',
    initialState:{
        name:'',
        id:'',
        isLogin:false,
    },
    reducers:{
        loginUser:(state,action) => {
            state.name = action.payload.name;
            state.id = action.payload.id;
            state.isLogin = true;
        },

        clearUser:(state) => {
            state.name='';
            state.id='';
            state.isLogin=false;
        }
    }
});

export const {loginUser, clearUser} = UserSlice.actions;
export default UserSlice.reducer;