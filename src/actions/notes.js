import { ON_CREATE_NOTE, ON_UPDATE_NOTE } from '../constants/ActionTypes';

export const onCreateNote = (note) => {
    return {
        type: ON_CREATE_NOTE,
        note
    }
};

export const onUpdateNote = (note) => {
    return {
        type: ON_UPDATE_NOTE,
        note
    }
};

export const createNote = (note) => {
    console.log(note);
    return (dispatch) => {
        dispatch(onCreateNote(note));
    }
};

export const updateNote = (note) => {
    console.log(note);
    return (dispatch) => {
        dispatch(onUpdateNote(note));
    }
};