import { attr, Model } from 'redux-orm';

import { ON_CREATE_NOTE, ON_UPDATE_NOTE, ON_DELETE_NOTE } from '../constants/ActionTypes';

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
                    NoteRef.withId(action.note.id).update({ favourite: action.note.favourite });
                }
                break;
            case ON_DELETE_NOTE:
                if(this.hasId(action.id)) {
                    NoteRef.withId(action.id).delete();
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
            id: attr(),
            text: attr(),
            favourite: attr(),
            createdAt: attr()
        }
    }
}

export default Note;