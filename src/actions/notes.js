import { ON_UPDATE_NOTE, ON_DELETE_NOTE, SHOW_FAVOURITES } from '../constants/ActionTypes';

export const onUpdateNote = (note) => {
    return {
        type: ON_UPDATE_NOTE,
        note
    }
};

export const onDeleteNote = (id) => {
    return {
        type: ON_DELETE_NOTE,
        id
    }
};

export const onFilterByFavourites = () => {
    return {
        type: SHOW_FAVOURITES
    }
};

export const updateNote = (note) => {
    return (dispatch) => {
        dispatch(onUpdateNote(note));
    }
};

export const deleteNote = (id) => {
    return (dispatch) => {
        dispatch(onDeleteNote(id));
    }
};

export const filterByFavourites = () => {
    return (dispatch) => {
        return dispatch(onFilterByFavourites());
    }
};