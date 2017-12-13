import { ORM } from 'redux-orm';

import Note from './models/Note';

const orm = new ORM();

orm.register(Note);

export default orm;