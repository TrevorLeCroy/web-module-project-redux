import { ADD_FAVORITE, REMOVE_FAVORITE, TOGGLE_FAVORITES } from "../actions/favoriteActions";

const initialState = {
    favorites: [],
    displayFavorites: true
};

const favoritesReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_FAVORITE:
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        case TOGGLE_FAVORITES:
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            };
        case REMOVE_FAVORITE:
            const favs = state.favorites.filter(movie => {
                return movie.id !== action.payload;
            })
            return {
                ...state,
                favorites: [...favs]
            }

        default:
            return state;
    }
}

export default favoritesReducer;