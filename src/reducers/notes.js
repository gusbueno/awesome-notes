import { SHOW_FAVOURITES } from '../constants/ActionTypes';

const initialState = {
    showFavourites: false
};

const notes = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_FAVOURITES:
            return { ...state, showFavourites: !state.showFavourites };
        default:
            return state;
    }
};

export default notes;