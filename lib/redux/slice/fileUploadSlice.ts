import { createSlice } from "@reduxjs/toolkit";
import { fileUploadThunk } from "../../../lib/thunkApis/authThunks";
interface FileUploadState {
  uploading: boolean;
  success: boolean;
  error: string | null;
  fileUrl: string | null;
}
const initialState: FileUploadState = {
    uploading: false,
    success: false,
    error: null,
    fileUrl: null,
};

const fileUploadSlice = createSlice({
    name: "fileUpload",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fileUploadThunk.pending, (state,action) => {
            state.uploading = true;
            state.success = false;
            state.error = null;
            state.fileUrl = null;
        })
        builder.addCase(fileUploadThunk.fulfilled, (state,action) => {
            console.log("file upload fulfilled", action.payload);
            state.uploading = false;
            state.success = true;
            state.error = null;
            state.fileUrl = action.payload.filePath;
        })
         builder.addCase(fileUploadThunk.rejected, (state,action) => {
            state.uploading = false;
            state.success = false;
            state.error = action.payload as any;
            state.fileUrl = null;
        })
    }
})

export default fileUploadSlice.reducer;
