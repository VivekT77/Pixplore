import { createSlice } from "@reduxjs/toolkit"

const initialState = {

  totalNoOfPosts: 0,
}

const viewPostSlice = createSlice({
  name: "viewPost",
  initialState,
  reducers: {
   
    setTotalNoOfPosts: (state, action) => {
      state.totalNoOfPosts = action.payload
    },
   
  },
})

export const {
  setTotalNoOfPosts
} = viewPostSlice.actions

export default viewPostSlice.reducer