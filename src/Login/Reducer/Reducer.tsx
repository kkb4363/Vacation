import { combineReducers } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import storage from 'redux-persist/lib/storage';
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
    key:'root',
    storage,
    whitelist:['UserSlice']
};

const reducer = combineReducers({UserSlice});

export default persistReducer(persistConfig,reducer);

//export default reducer;