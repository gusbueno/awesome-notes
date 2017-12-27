import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { ON_UPDATE_NOTE, ON_DELETE_NOTE, SHOW_FAVOURITES, ON_CREATE_NOTE } from '../../src/constants/ActionTypes';
import * as actions from '../../src/actions/notes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const note = {
    id: 'awesomeId',
    text: 'Awesome text',
    favourite: false,
    createdAt: new Date(601254000000) // my birthday ^^
};

describe('Notes actions', () => {
    it('Should dispatch ON_UPDATE_NOTE when updateNote fired', () => {
        const expectedActions = [
            { type: ON_UPDATE_NOTE, note }
        ];
        const store = mockStore();

        store.dispatch(actions.updateNote(note));
        expect(store.getActions()).toEqual(expectedActions);
    });

    it('Should dispatch ON_DELETE_NOTE when deleteNote fired', () => {
        const expectedActions = [
            { type: ON_DELETE_NOTE, id: 'awesomeId' }
        ];
        const store = mockStore();
        store.dispatch(actions.deleteNote('awesomeId'));
        expect(store.getActions()).toEqual(expectedActions);
    });

    it('Should dispatch SHOW_FAVOURITES when filterByFavourites fired', () => {
        const expectedActions = [
            { type: SHOW_FAVOURITES }
        ];
        const store = mockStore();
        store.dispatch(actions.filterByFavourites());
        expect(store.getActions()).toEqual(expectedActions);
    });
});