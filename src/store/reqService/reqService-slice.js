import { createSlice } from "@reduxjs/toolkit";

const reqServcieSlice = createSlice({
  name: "reqService",
  initialState: {
    location: "",
    requestedService: "",
    datetimeSlot: "",
    latitude: null,
    longitude: null,
  },
  reducers: {
    UPDATE_DETAILS(state, action) {
      console.log(action.payload);
      // state = action.payload;
      state.location = action.payload.location;
      state.requestedService = action.payload.requestedService;
      state.datetimeSlot = action.payload.datetimeSlot;
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
    },
  },
});

export const reqServiceActions = reqServcieSlice.actions;

export default reqServcieSlice;