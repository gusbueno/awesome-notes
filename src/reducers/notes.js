import { SHOW_FAVOURITES } from '../constants/ActionTypes';

const initialState = {
    filterByFavourites: false
};

const notes = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_FAVOURITES:
            return { ...state, filterByFavourites: !state.filterByFavourites };
        default:
            return state;
    }
};

export default notes;