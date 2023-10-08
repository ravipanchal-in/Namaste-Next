import { createSlice } from "@reduxjs/toolkit";

type appSliceType = {
  greetText: string;
  isLoggedIn: boolean;
};

const initialState: appSliceType = {
  greetText: "Jay Shree Krishna",
  isLoggedIn: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setGreetText: (state, action) => {
      state.greetText = action.payload;
    },
  },
});

export const { setGreetText } = appSlice.actions;
export default appSlice.reducer;
