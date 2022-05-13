import {
  BANK_LIST_SUCCESS,
  BANK_LIST_FAILURE,
  BANK_LIST_REQUEST,
  FILTERED_BANK_LIST,
} from "../constants/bank";

export const getBankList = (state = {}, action) => {
  switch (action.type) {
    case BANK_LIST_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case BANK_LIST_SUCCESS:
      return {
        ...state,
        banks: action.payload,
        isLoading: false,
        error: null,
      };
    case FILTERED_BANK_LIST:
      return {
        ...state,
        banks: action.payload,
        isLoading: false,
        error: null,
      };
    case BANK_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
