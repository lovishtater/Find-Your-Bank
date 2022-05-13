import { SET_FAVORITES } from "../constants/favorites";

export const addFavorite = (bank) => (dispatch) => {
  let favoriteBanks = [];
  if (localStorage.getItem("favorite")) {
    favoriteBanks = JSON.parse(localStorage.getItem("favorite"));
    favoriteBanks.push(bank);
    localStorage.setItem("favorite", JSON.stringify(favoriteBanks));
  } else {
    favoriteBanks.push(bank);
    localStorage.setItem("favorite", JSON.stringify(favoriteBanks));
  }
  dispatch({
    type: SET_FAVORITES,
    payload: favoriteBanks,
  });
};

export const removeFavorite = (bank) => (dispatch) => {
  let favoriteBanks = JSON.parse(localStorage.getItem("favorite"));
  let newFavoriteBanks = favoriteBanks.filter((favoriteBank) => {
    return favoriteBank.ifsc !== bank.ifsc;
  });
  localStorage.setItem("favorite", JSON.stringify(newFavoriteBanks));
  dispatch({
    type: SET_FAVORITES,
    payload: newFavoriteBanks,
  });
};
