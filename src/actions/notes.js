import { ON_UPDATE_NOTE, ON_DELETE_NOTE } from '../constants/ActionTypes';

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