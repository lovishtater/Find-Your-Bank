import {
  BANK_LIST_SUCCESS,
  BANK_LIST_FAILURE,
  BANK_LIST_REQUEST,
  FILTERED_BANK_LIST,
} from "../constants/bank";
import axios from "axios";

export const getBankList = (city) => async (dispatch) => {
  dispatch({
    type: BANK_LIST_REQUEST,
  });
  const url = new URL("https://vast-shore-74260.herokuapp.com/banks");

  if (city) {
    url.searchParams.append("city", city);
  } else {
    url.searchParams.append("city", "MUMBAI");
  }
  await axios
    .get(url, {
      timeout: 10000,
    })
    .then((response) => {
      localStorage.setItem("banks", JSON.stringify(response.data));
      dispatch({
        type: BANK_LIST_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: BANK_LIST_FAILURE,
        payload: error,
      });
    });
};

export const getFilteredBankList = (payload) => async (dispatch) => {
  dispatch({
    type: FILTERED_BANK_LIST,
    payload: payload,
  });
};
