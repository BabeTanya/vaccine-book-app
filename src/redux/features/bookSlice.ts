import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BookingItem } from "../../../interfaces";

type BookState = {
  bookItem: BookingItem | null
}

const initialState: BookState = { bookItem: null }

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    createOrUpdateBooking: (state, action: PayloadAction<BookingItem>) => {
      state.bookItem = action.payload
    },
    cancelBooking: (state) => {
      state.bookItem = null
    }
  }
})

export const { createOrUpdateBooking, cancelBooking } = bookSlice.actions
export default bookSlice.reducer