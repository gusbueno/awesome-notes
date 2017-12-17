import { ON_CREATE_NOTE, ON_UPDATE_NOTE } from '../constants/ActionTypes';

export const onUpdateNote = (note) => {
    return {
        type: ON_UPDATE_NOTE,
        note
    }
};

export const updateNote = (note) => {
    console.log(note);
    return (dispatch) => {
        dispatch(onUpdateNote(note));
    }
};