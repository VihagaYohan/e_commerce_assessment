import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import Article from "../../model/Article";

interface NewsState {
  loadingState: boolean;
  pass: boolean;
  fail: boolean;
  message: String;
  savedNews: Article[];
}

const initialState: NewsState = {
  loadingState: true,
  pass: false,
  fail: false,
  message: "",
  savedNews: [],
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loadingState = true;
    },
    stopLoading: (state) => {
      state.loadingState = false;
    },
    setPass: (state, action: PayloadAction<boolean>) => {
      state.pass = action.payload;
    },
    setFail: (state, action: PayloadAction<boolean>) => {
      state.fail = action.payload;
    },
    setMessage: (state, action: PayloadAction<String>) => {
      state.message = action.payload;
    },
    addNews: (state, action: PayloadAction<Article>) => {
      /* console.log(action.payload);
      let list = state.savedNews.filter(
        (item, index) => JSON.stringify(item) !== JSON.stringify(action.payload)
      );
      if (list.length === 0) {
        console.log(1, list.length);
        return;
      } else {
        state.savedNews = [...state.savedNews, action.payload];
        console.log(2, state.savedNews);
      } */
      state.savedNews = [...state.savedNews, action.payload];
    },
  },
});

export const {
  startLoading,
  stopLoading,
  setPass,
  setFail,
  setMessage,
  addNews,
} = newsSlice.actions;

export default newsSlice.reducer;
