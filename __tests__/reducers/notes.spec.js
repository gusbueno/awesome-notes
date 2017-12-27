import notes from '../../src/reducers/notes';
import { SHOW_FAVOURITES } from '../../src/constants/ActionTypes';

const initialState = {
    filterByFavourites: false
};

describe('Notes reducer', () => {
    it('should return default state', () => {
        expect(notes(undefined, {})).toEqual(initialState);
    });

    it('Should update filterByFavourites when SHOW_FAVOURITES action fired', () => {
        expect(notes(initialState, { type: SHOW_FAVOURITES })).toEqual({ ...initialState, filterByFavourites: true });
    });
});