import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { ON_CREATE_NOTE } from '../../src/constants/ActionTypes';
import * as actions from '../../src/actions/createNote';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const note = {
    id: 'awesomeId',
    text: 'Awesome text',
    favourite: false,
    createdAt: new Date(601254000000) // my birthday ^^
};

describe('CreateNote actions', () => {
    it('Should dispatch ON_CREATE_NOTE when onCreateNote fired', () => {
        const expectedActions = [
            { type: ON_CREATE_NOTE, note }
        ];
        const store = mockStore();
        store.dispatch(actions.onCreateNote(note));
        expect(store.getActions()).toEqual(expectedActions);
    });

    it('Should dispatch ON_CREATE_NOTE and Navigation/BACK when saveNote fired', () => {
        const expectedActions = [
            { type: 'Navigation/BACK' },
            { type: ON_CREATE_NOTE, note }
        ];
        const store = mockStore();
        store.dispatch(actions.saveNote(note));
        expect(store.getActions()).toEqual(expectedActions);
    });
});