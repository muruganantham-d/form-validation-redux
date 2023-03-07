import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  address: "",
  district: "",
  country: "",
  pincode:"",

  phone: "",
  tenthPercentage: "",
  completed12th: true,
  twelfthPercentage: "",
  diplomaPercentage: "",
  ugCGPA: "",
  company: "",
  relevantExperience: "",
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    ////new
    setdistrict:(state, action) => {
      state.district = action.payload
    },
    setCountry:(state, action) => {
      state.country = action.payload
    },
    setPincode:(state, action) => {
      state.pincode = action.payload
    },
    // /////
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    setTenthPercentage: (state, action) => {
      state.tenthPercentage = action.payload;
    },
    setCompleted12th: (state, action) => {
      state.completed12th = action.payload;
    },
    setTwelfthPercentage: (state, action) => {
      state.twelfthPercentage = action.payload;
    },
    setDiplomaPercentage: (state, action) => {
      state.diplomaPercentage = action.payload;
    },
    setUgCGPA: (state, action) => {
      state.ugCGPA = action.payload;
    },
    setCompany: (state, action) => {
      state.company = action.payload;
    },
    setRelevantExperience: (state, action) => {
      state.relevantExperience = action.payload;
    },
    resetForm: (state) => {
      state.name = "";
      state.email = "";
      state.address = "";
      state.district = "";
      state.country = "";
      state.pincode = "";
      /////
      state.phone = "";
      state.tenthPercentage = "";
      state.completed12th = true;
      state.twelfthPercentage = "";
      state.diplomaPercentage = "";
      state.ugCGPA = "";
      state.company = "";
      state.relevantExperience = "";
    },
  },
});

export const {
  setName,
  setEmail,
  setAddress,
  setdistrict,
  setCountry,
  setPincode,
  setPhone,
  setTenthPercentage,
  setCompleted12th,
  setTwelfthPercentage,
  setDiplomaPercentage,
  setUgCGPA,
  setCompany,
  setRelevantExperience,
  resetForm,
} = formSlice.actions;

export default formSlice.reducer;