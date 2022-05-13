import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { getBankList } from "./reducer/bankReducer";
import { getFavoriteBanks } from "./reducer/favoriteReducer";

const reducer = combineReducers({
  bank: getBankList,
  favorite: getFavoriteBanks,
});

export default configureStore({
  reducer,
  initialState: {
    bank: {
      banks: [],
      isLoading: false,
      error: null,
    },
    favorite: {
      favoriteBanks: [],
    },
  },
});
