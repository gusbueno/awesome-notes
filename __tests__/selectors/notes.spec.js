import { factory, ReduxORMAdapter } from 'factory-girl';

import { notes } from '../../src/selectors/notes';
import orm from '../../src/orm';

factory.define('NoteFixed', 'Note', {
    id: 'awesomeNote1',
    text: 'awesome text',
    favourite: false,
    createAt: new Date(601254000000)
});

factory.define('FavouriteNoteFixed', 'Note', {
    id: 'awesomeNote2',
    text: 'awesome text 2',
    favourite: true,
    createAt: new Date(601254000000)
});

describe('Note selectors', () => {
    let state;
    let session;
    beforeEach(async (done) => {
        state = orm.getEmptyState();
        session = orm.mutableSession(state); // Before withMutation
        factory.setAdapter(new ReduxORMAdapter(session));
        await factory.create('NoteFixed');
        await factory.create('FavouriteNoteFixed');
        done();
    });

    it('should return two notes', () => {
        const result = notes({ orm: state, notes: { filterByFavourites: false }});
        expect(result.length).toEqual(2);
    });

    it('should return only the one favourite note', () => {
        const result = notes({ orm: state, notes: { filterByFavourites: true }});
        expect(result.length).toEqual(1);
    });
});