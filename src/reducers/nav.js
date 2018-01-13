import { Nav } from '../Nav';

const initialState = Nav.router.getStateForAction(Nav.router.getActionForPathAndParams('Notes'));
const nav = (state = initialState, action) => {
    const nextState = Nav.router.getStateForAction(action, state);
    return nextState || state;
};

export default nav;