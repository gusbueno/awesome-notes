import { ON_CREATE_NOTE } from '../constants/ActionTypes';
import { back } from './navigation';

export const onCreateNote = (note) => {
    return {
        type: ON_CREATE_NOTE,
        note
    }
};

export const saveNote = (note) => {
    return (dispatch) => {
        dispatch(back());
        dispatch(onCreateNote(note));
    }
};