import { configureStore } from "@reduxjs/toolkit";
import completeProfileReducer from "./slice/completeProfileSlice"
import fileUploadReducer from "./slice/fileUploadSlice";
import authReducer from "./slice/authSlice";
const Store = configureStore({
    reducer: {
        complete_profile: completeProfileReducer,
        auth:authReducer,
        fileUpload:fileUploadReducer
    }
})

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export default Store