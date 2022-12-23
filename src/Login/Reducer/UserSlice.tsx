import { combineReducers, createSlice, PayloadAction } from "@reduxjs/toolkit";



export const UserSlice = createSlice({
    name: 'user',
    initialState:{
        ID:'',
        Password:'',
        isLogin:false,
    },
    reducers:{
        loginUser:(state,action:PayloadAction<{ID:string, Password:string}>) => {
            state.ID = action.payload.ID;
            state.Password = action.payload.Password;
            state.isLogin = true;
        },

        clearUser:(state) => {
            state.ID='';
            state.Password='';
            state.isLogin=false;
        }
    }
});



export const {loginUser, clearUser} = UserSlice.actions;
export default UserSlice.reducer;