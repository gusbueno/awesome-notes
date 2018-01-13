import configureMockStore from 'redux-mock-store';

import * as actions from '../../src/actions/navigation';
import { ON_UPDATE_NOTE } from '../../src/constants/ActionTypes';

const mockStore = configureMockStore();

describe('Navigation actions', () => {
    it('Should dispatch Navigation/BACK when back fired', () => {
        const expectedActions = [
            { type: 'Navigation/BACK' }
        ];
        const store = mockStore();

        store.dispatch(actions.back());
        expect(store.getActions()).toEqual(expectedActions);
    });

    it('Should dispatch Navigation/NAVIGATE when goto fired', () => {
        const expectedActions = [
            { type: 'Navigation/NAVIGATE', routeName: 'Notes' }
        ];
        const store = mockStore();

        store.dispatch(actions.goto('Notes'));
        expect(store.getActions()).toEqual(expectedActions);
    });
});