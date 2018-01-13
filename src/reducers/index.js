import { combineReducers } from 'redux';
import { createReducer } from 'redux-orm';

import orm from '../orm';
import nav from './nav';
import notes from './notes';

const appReducer = combineReducers({
    nav,
    notes,
    orm: createReducer(orm)
});

export default appReducer;