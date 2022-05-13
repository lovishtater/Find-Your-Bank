import { SET_FAVORITES } from "../constants/favorites";


export const getFavoriteBanks = (state = {}, action) => {
    console.log("getFavoriteBanks", action);
    switch (action.type) {
        case SET_FAVORITES:
        return {
          ...state,
          favoriteBanks: action.payload,
        };
        default:
        return {
          ...state,
          favoriteBanks: localStorage.getItem("favorite")
            ? JSON.parse(localStorage.getItem("favorite"))
            : [],
        };
    }
}
