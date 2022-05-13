import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { getBankList } from "./reducer/bankReducer";

const reducer = combineReducers({
  bank: getBankList,
});

export default configureStore({
  reducer,
  initialState: {
    bank: {
      banks: [],
      isLoading: false,
      error: null,
    }
  }
});
