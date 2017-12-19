import { ON_CREATE_NOTE, ON_UPDATE_NOTE, ON_DELETE_NOTE } from '../constants/ActionTypes';
import { back } from './navigation';

export const onUpdateNote = (note) => {
    return {
        type: ON_UPDATE_NOTE,
        note
    }
};

export const onDeleteNote = (id) => {
    console.log(id);
    return {
        type: ON_DELETE_NOTE,
        id
    }
};

export const updateNote = (note) => {
    console.log(note);
    return (dispatch) => {
        dispatch(onUpdateNote(note));
    }
};

export const deleteNote = (id) => {
    return (dispatch) => {
        dispatch(onDeleteNote(id));
    }
};