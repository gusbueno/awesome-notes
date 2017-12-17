import { createSelector } from 'reselect';
import { createSelector as ormCreateSelector } from 'redux-orm';
import orm from '../orm';

const ormState = state => state.orm;
export const notes = createSelector(
    ormState,
    state => state.notes.filterByFavourites,
    ormCreateSelector(orm, (session, filterByFavourites) => {
        const noteModelArray = session.Note.all().toModelArray();
        const notes = filterByFavourites ? noteModelArray.filter(note => note.favorite) : noteModelArray;
        console.log(notes);
        return notes;
    })
);