import { createSelector } from 'reselect';
import { createSelector as ormCreateSelector } from 'redux-orm';
import orm from '../orm';

const ormState = state => state.orm;
export const notes = createSelector(
    ormState,
    state => state.notes.filterByFavourites,
    ormCreateSelector(orm, (session, filterByFavourites) => {
        const noteModelArray = session.Note.all().toModelArray();
        const notesFiltered = filterByFavourites ? noteModelArray.filter(note => note.favourite) : noteModelArray;
        const notesSorted = notesFiltered.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt);
        });
        return notesSorted;
    })
);