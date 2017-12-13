import { attr, Model } from 'redux-orm';

import { ON_CREATE_NOTE, ON_UPDATE_NOTE } from '../constants/ActionTypes';

class Note extends Model {
    static reducer(action, NoteRef) {
        switch(action.type) {
            case ON_CREATE_NOTE:
                if(!this.hasId(action.note.id)) {
                    this.create(action.note);
                }
                break;
            case ON_UPDATE_NOTE:
                if(this.hasId(action.note.id)) {
                    NoteRef.withId(action.note.id).update(action.note);
                }
                break;
            default:
                break;
        }
    }

    static get modelName() {
        return 'Note';
    }

    static get fields() {
        return {
            id: attr(), // non-relational field for any value; optional but highly recommended
            text: attr(),
            favourite:attr()
        }
    }
}

export default Note;