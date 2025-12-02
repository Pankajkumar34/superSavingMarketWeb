import { BasicDetails, ContactDetails, ProfileState } from "@/types/auth";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";



const initialState: ProfileState = {
  basicDetails: {
    firstName: "",
    lastName: "",
    profilePic: "",
    phoneNumber: "",
  },

  contactDetails: {
    villageCity: "",
    post: "",
    district: "",
    policeStation: "",
    state: "",
    region: "",
  },
};


const completeProfileSlice = createSlice({
  name: "completeProfile",
  initialState,
  reducers: {
   addBasicDetails: (
      state,
      action: PayloadAction<Partial<BasicDetails>>
    ) => {
      state.basicDetails = {
        ...state.basicDetails,
        ...action.payload,
      };
    },
    addContactDetails: (
      state,
      action: PayloadAction<Partial<ContactDetails>>
    ) => {
      state.contactDetails = {
        ...state.contactDetails,
        ...action.payload,
      };
    },
    },
});

export const { addBasicDetails, addContactDetails } = completeProfileSlice.actions;
export default completeProfileSlice.reducer;