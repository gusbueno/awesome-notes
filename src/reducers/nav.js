import { NavigationActions } from 'react-navigation';

import { NOTES, BACK } from '../constants/ActionTypes';
import { Nav } from '../Nav';

const initialState = Nav.router.getStateForAction(Nav.router.getActionForPathAndParams('Notes'));
const nav = (state = initialState, action) => {
    let nextState = Nav.router.getStateForAction(action, state);
    switch (action.type) {
        case NOTES:
            nextState = Nav.router.getStateForAction(NavigationActions.navigate({ routeName: 'Notes' }), state);
            break;
        default:
            break;
    }
    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
};

export default nav;