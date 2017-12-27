import { ON_CREATE_NOTE, ON_UPDATE_NOTE, ON_DELETE_NOTE } from '../../src/constants/ActionTypes';
import orm from '../../src/orm';

export function applyActionToModelReducer(orm, modelName, action, session) {
    session[modelName].reducer(action, session[modelName], session);
}

const note = {
    id: 'awesomeId',
    text: 'Awesome text',
    favourite: false,
    createdAt: new Date(601254000000) // my birthday ^^
};

describe('Note model', () => {
    let session;
    beforeEach((done) => {
        session = orm.session();
        done();
    });

    it('correctly handle ON_CREATE_NOTE and creates 1 new note', () => {
        const action = {
            type: ON_CREATE_NOTE,
            note
        };
        //Before:
        expect(session.Note.all().count()).toEqual(0);

        session.Note.reducer(action, session.Note, session);

        //After:
        expect(session.Note.all().count()).toEqual(1);
    });

    it('correctly handle ON_DELETE_NOTE and remove 1 note', () => {
        const createAction = {
            type: ON_CREATE_NOTE,
            note
        };

        const deleteAction = {
            type: ON_DELETE_NOTE,
            id: 'awesomeId'
        };

        session.Note.reducer(createAction, session.Note, session);

        //Before:
        expect(session.Note.all().count()).toEqual(1);

        session.Note.reducer(deleteAction, session.Note, session);

        //After:
        expect(session.Note.all().count()).toEqual(0);
    });

    it('correctly handle ON_UPDATE_NOTE and update 1 note', () => {
        const createAction = {
            type: ON_CREATE_NOTE,
            note
        };

        const updateAction = {
            type: ON_UPDATE_NOTE,
            note: { ...note, favourite: true }
        };

        session.Note.reducer(createAction, session.Note, session);

        //Before:
        expect(session.Note.all().count()).toEqual(1);

        session.Note.reducer(updateAction, session.Note, session);

        //After:
        expect(session.Note.withId('awesomeId').favourite).toEqual(true);
    });
});